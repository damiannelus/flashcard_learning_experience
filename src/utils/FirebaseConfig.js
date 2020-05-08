import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.UE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser


// firebase collections
const flashCardsCollection = db.collection('flashCards');

// const listPredefinedSets = () => {
//   const storage = firebase.app().storage();
//   const storageRef = storage.ref();

//   storageRef.listAll().then(res => {
//     res.items.forEach(item => {
//       console.log(item.bucket);
//       console.log(item.fullPath);
//       console.log(item.parent);
//       console.log(item.root);
//       console.log(item.storage);
//     });
//   }).catch(error => { console.log(error) });
// }

// const obtainFileFromFirebase = (fileName) => {
//   const storage = firebase.app().storage();
//   const fileToParse = storage.ref().child(fileName);
//   // fileToParse.getDownloadURL().then((url) => { this.setState({ img: url }));
//   // const gsReference = storage.refFromURL('gs://bucket/images/stars.jpg')
//   return fileToParse.getDownloadURL();
// }

export {
  db,
  auth,
  currentUser,
  flashCardsCollection,
  // listPredefinedSets,
  // obtainFileFromFirebase
}

