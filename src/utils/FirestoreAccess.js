const fc = require('./FirebaseConfig');
import FlashCard from "../data_objects/flashCard";

//functions
const loadPredefinedSet = async () => {
  let loadedFlashCards = [];
  console.log(process.env.VUE_APP_FIREBASE_PROJECT_ID);
  console.log("fc.flashCardsCollection: " + fc.flashCardsCollection);
  await fc.flashCardsCollection
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        loadedFlashCards.push(
          new FlashCard(doc.id, doc.data().english, doc.data().polish)
        );
      });
      console.log(
        "FB access : loadedFlashCards.length: " + loadedFlashCards.length
      );
    })
    .catch(err => {
      console.log("Error getting documents: ", err);
    });
  return loadedFlashCards;
};

const checkIfCardExists = async (wordToCheck) => {
  console.log(`Word to check: ${wordToCheck}`);
  let result = true;
  // 2. Word to check: glass
  await fc.flashCardsCollection.where("english", "==", wordToCheck).get()
    .then(doc => {
      console.log(`doc.empty: ${doc.empty}`);
      // 3. doc.empty: false
      if (doc.empty) {
        console.log("No such flashcard!");
        result = false;
      } else {
        console.log("Flashcard exists!");
        // 4. Flashcard exists!
        result = true;
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
      result = true;
    });
  return result;
}

const addSingleWord = async (front, back) => {
  console.log(`Attempt to add: ${front}, ${back}`);
  //1. Attempt to add: glass, szklanka
  let isDuplicate = true;
  await checkIfCardExists(front)
  .then(result => {
    console.log(`isDuplicate: ${result}`);
    isDuplicate = result;
    // 5. isDuplicate: undefined
  })
  .catch(err => {
    console.log(err);
  });
  if (!isDuplicate) {
    // No such a flashcard and won't duplicate.
    fc.flashCardsCollection
      .add({ english: front, polish: back })
      .then(function (docRef) {
        console.log(`Document ${docRef.id} added successfully`);
        return "Success. Word added";
      })
      .catch(err => {
        console.error("Error writing document: ", err);
        return "Failure. Word not added";
      });
  }
};

export {
  loadPredefinedSet,
  addSingleWord
}