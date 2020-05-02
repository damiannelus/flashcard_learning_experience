import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhDrefIMZS2OQAPRduVZ7JfjSEujrxfCI",
  authDomain: "click-275312.firebaseapp.com",
  databaseURL: "https://click-275312.firebaseio.com",
  projectId: "click-275312",
  storageBucket: "click-275312.appspot.com",
  messagingSenderId: "134974555368",
  appId: "1:134974555368:web:6b086757921d86c8f1f55d",
  measurementId: "G-3XGPRP2RHH"
};

firebase.initializeApp(firebaseConfig);

export default function listPredefinedSets() {
  const storage = firebase.app().storage();
  const storageRef = storage.ref();
  
  storageRef.listAll().then(res => {
    res.items.forEach( item => {
      console.log( item.bucket ); 
      console.log(item.fullPath);
      console.log(item.parent);
      console.log(item.root);
      console.log(item.storage);
   });
  }).catch(error => {console.log(error)});
}

export default function obtainFile(fileNam) {
  
};
