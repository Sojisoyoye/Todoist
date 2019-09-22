import firebase from 'firebase/app';
import 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: "todoist-2bc3e",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  });

export { firebaseConfig as firebase };

