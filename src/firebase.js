import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAHe3mruPCudO6_YOmsLN_nFxO-4Tt-zgk",
  authDomain: "paddit-88297.firebaseapp.com",
  projectId: "paddit-88297",
  storageBucket: "paddit-88297.appspot.com",
  messagingSenderId: "755277954083",
  appId: "1:755277954083:web:df46b0295bc93bb2b2c596",
  measurementId: "G-47HBRL1E6K"
};

// The Firebase SDK is initialized and available here!
firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged(user => { });
// firebase.database().ref('/path/to/ref').on('value', snapshot => { });
// firebase.firestore().doc('/foo/bar').get().then(() => { });
// firebase.functions().httpsCallable('yourFunction')().then(() => { });
// firebase.messaging().requestPermission().then(() => { });
// firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
// firebase.analytics(); // call to activate
// firebase.analytics().logEvent('tutorial_completed');
// firebase.performance(); // call to activate

try {
  let app = firebase.app();
  let features = [
    'analytics',
    'auth',
    'database',
    // 'firestore',
    // 'functions',
    // 'messaging',
    // 'storage',
    // 'remoteConfig',
    // 'performance',
  ].filter(feature => typeof app[feature] === 'function');
  console.debug(`Firebase SDK loaded with ${features.join(', ')}`);
} catch (e) {
  console.error('Error loading the Firebase SDK, check the console.', e);
}

export default firebase;
