import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "${apiKey}",
  authDomain: "${authDomain}",
  databaseURL: "${databaseURL}",
  projectId: "${projectId}",
  storageBucket: "${storageBucket}",
  messagingSenderId: "${messagingSenderId}",
  appId: "${appId}",
});

export const auth = app.auth();
export default app;
