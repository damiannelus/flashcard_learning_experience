const fb = require('./FirebaseConfig');
import FlashCard from "../data_objects/flashCard";

import Vuex from 'vuex' 

// const readFlashCards = () => {
//   let loadedFlashCards = [];
//   fb.flashCardsCollection.get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       loadedFlashCards.push(new FlashCard(
//         doc.id,
//         doc.data().english,
//         doc.data().polish
//       ));
//       console.log(doc.id, " => ", doc.data().english);
//     });
//     console.log("FB access : loadedFlashCards.length: " + loadedFlashCards.length)
//     $store.dispatch('loadFlashcards', loadedFlashCards);
//   }).catch((err) => {
//     console.log("Error getting documents: ", err);
//   });
// }

// export {
//   readFlashCards
// }