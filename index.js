import { Expo } from "expo-server-sdk";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { getDatabase } from "firebase-admin/database";
import { app } from "./FireBase.js";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

let expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });

const db = getDatabase(app);

let somePushTokens = [];

//Retriving Expo Tokens from Firebase Database...
(async () => {
  db.ref("/Tokens").on(
    "value",
    (data) => {
      Object.values(data.val()).forEach((token) => somePushTokens.push(token));
    },
    (err) => console.log(err)
  );
})();

const typeDefs = gql`
  input Message {
    title: String!
    subtitle: String
    body: String!
  }

  type Query {
    hello: String
    Broadcast(input: Message): String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello UD-Server!",

    Broadcast: (parent, { input }) => {
      let message = [];
      //let somePushTokens = ["ExponentPushToken[csz4ryCpNRVqvcic4Rn59a]"];

      for (let pushToken of somePushTokens) {
        // Checks that all push tokens appear to be valid Expo push tokens
        if (!Expo.isExpoPushToken(pushToken)) {
          console.error(
            `Push token ${pushToken} is not a valid Expo push token`
          );
          continue;
        }

        // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
        message.push({
          to: pushToken,
          sound: "default",
          title: input.title,
          body: input.body,
          subtitle: input.subtitle,
        });
      }
      // The Expo push notification service accepts batches of notifications so
      // that you don't need to send 1000 requests to send 1000 notifications. We
      // recommend you batch your notifications to reduce the number of requests
      // and to compress them (notifications with similar content will get
      // compressed).
      let chunks = expo.chunkPushNotifications(message);

      (async () => {
        for (let chunk of chunks) {
          try {
            let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
            //tickets.push(...ticketChunk);
            //console.log(ticketChunk);
          } catch (error) {
            console.error(error);
          }
        }
      })();
      return "Done";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.start().then(() => {
  const app = express();

  server.applyMiddleware({ app });

  const PORT = 4000 || process.env.PORT;

  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
