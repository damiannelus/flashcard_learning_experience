import firebase from "firebase/app";
import 'firebase/firestore';

export default function listPredefinedSets() {
  const storage = firebase.app().storage();
  const storageRef = storage.ref();

  storageRef.listAll().then(res => {
    for (const file in res.items) {
      console.log(file.name);
    }
    // console.log("storageRef.listAll: "+ res.items);
  }).catch(error => {console.log(error)});
}