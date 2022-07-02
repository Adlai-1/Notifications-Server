import { initializeApp, cert } from "firebase-admin/app";

export const app = initializeApp({
  credential: cert({Provide your private key details here!}),
  databaseURL: Provide your database URL here,
});

//Follow the Firebase-admin docs to know more...
