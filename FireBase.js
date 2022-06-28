import { initializeApp, cert } from "firebase-admin/app";

export const app = initializeApp({
  credential: cert({
    "type": "service_account",
    "project_id": "testings-5619e",
    "private_key_id": "da9bfef90c5cbf770dacd221022199fc2a4011ce",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCjaZNLvlEwnB+5\nqWYSFp6AXNNRifRq3o1jUn2bxlghaLSpRJ/AFjXz2qYZh5i0rI/eI9KAH0Svg2/j\n5+y1iDpUQjh1jfdoZ7Y1QtFgfE+ou06D85+qTcbdfleTm4UZzKa+RkbtWw6NPmEb\np0Qgl4MCKathm4S9WeMb6Nlbq7yZoaA8r9qxN0PmGEcZIL4tTLMo5EWcJ4mdtQmp\nrcZ1nbnwKYfyEY/qZQ57qhulZoKKTPrZywzVFCa7h32EG1xVE9uEE1nmRDEEyNpJ\nC70sMNENhH06Q/t6VXFONy1uuuLXQA1cToCahK+nY/e0dhfcKuVFXvpO+q6DwdmX\nUZTziNLhAgMBAAECggEAJPqarPzD5bKm0T5ezUAWHSkkXuLPjzGOoEfGCe6/+ct2\neol/dxnvmp/Dj6pqKZSVN+k2VOz+f5NISjQtEkViIbgci6mVL6isiG/27pUi96Vv\nVpfWbVUNaAkTq2D5pUV1BEDmAwdkixzvH7FhzthKer5QPJXTW4AQTzwJl9+Mnd0j\nBB8jLjshqF9GIt5yMPUGuUNqRqkxdu4eQa9A4YQAWv16G7UzqDRPC7yNxLlAMLqd\nMbYqBEWyrwP1XUngqzrM4VjwVIeL/Aap+3RkXVC/aWptHLOh6xsqaX2Tgj2hnpeF\n3NGG0RptAu6Nl6ao4Ytbo+tigEd60cXlivt+ARaEIwKBgQDd1vfBFrF/jlu6Yr/I\nKGc9xc2OnqHHt8j25YCfh3Yp9cikWpzcpMZzht03ZEBNUmYWQO21Rl8U432s90E+\nBnkSUnQS9QyHw/ifilx400/oGuvo8ccTac7RyKlmf/9DfVE8haVl0CYP80vrs640\n8NbiFHDd8k6EkhJcNU0uq+iukwKBgQC8k1+uJJxmJTragi+/LigexXgzIG9S2fDr\nrjgjVdAvkBVrSGi5FQdEdzGWehzT3wiHXGY0z4nj6CHnzCe8iOgZakc9QBafOQ07\ndYyDfKs2o8yNxfWL70LWBdxEIo8OG3gHrodqgvQkljINHx0q2p1c6+H+kvYB/v/L\nZATZO5xtOwKBgQDM2cMy9Ke3qFegB6wdQuIDMvMcbfPqnxXemBNsPQSqvqIm0t3j\nCe2PpMwGaHbQb/SBPDfFm1QVz/SvkisXAZcviiBRmSOXAypE+NlnYYp6RNHv68Pv\nc1dedTOoyS2IvuITRz5yhAGB3SMQZn3JuVRUtJd8/FHxLYnyx+2b2XcmLQKBgEiK\nvOTlypB0w/Yo3KtD20UzG7E3SfvqQQa453mYWlThrYuuuDJyx2/sFlRXt1090C8a\nOWsZZ2cX9msQGz0owXh9bNhAHjO0I8X6y0oNnGORkW/8diAVs3VXnctMLBH2OS9j\nUU6E/9xPNwPbM0I4BQ8o4rAm4qIT8VzRphfXGa7fAoGAU/xWUgBGEUU3tzN5M33t\nZMSdRaArr8doa/6sOhz0/HoP4XvZqc/igSuZHr/p9rDVjVJGklTWbfZJN3BKB5gC\nzx0TGJH8YU/fWlNEjCWergw6HLxegfmDwmPHUkdeaZs5Qpeu56JjuLyRgFjhNJMT\nVjXIRbJyx0EI/dGOTrSF4X0=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-j6my6@testings-5619e.iam.gserviceaccount.com",
    "client_id": "111689718843860053094",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-j6my6%40testings-5619e.iam.gserviceaccount.com"
  }),
  databaseURL: "https://testings-5619e-default-rtdb.firebaseio.com",
});
