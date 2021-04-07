import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAFBQY4EGG4kI2AIBm_mYjiPShyv2Wz0Zo',
  authDomain: 'sidehustle-stack.firebaseapp.com',
  projectId: 'sidehustle-stack',
  storageBucket: 'sidehustle-stack.appspot.com',
  messagingSenderId: '882746887119',
  appId: '1:882746887119:web:4f042d41e58efe35ba20ba',
  measurementId: 'G-24P28LCE8Q',
};

// eslint-disable-next-line import/no-mutable-exports
let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const storage = app.storage();

export { app, storage };
