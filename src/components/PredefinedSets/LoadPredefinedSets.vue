<template>
  <div>
    <button v-on:click="loadPredefinedSet">Load sample flashcards</button>
  </div>
</template>

<script>
import Vuex from "vuex";
import predefiendSet from "../../data_objects/predefinedSet";
const fb = require("../../utils/FirebaseConfig");

import FlashCard from "../../data_objects/flashCard";

import parseCSV from "../../utils/CSVManipulaitons";
import { readFlashCards } from "../../utils/FirebaseAccess";

export default {
  name: "LoadPredefinedSets",
  data() {
    return {
      predefinedSets: []
    };
  },
  methods: {
    loadPredefinedSet: function() {
      let loadedFlashCards = [];
      fb.flashCardsCollection
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            loadedFlashCards.push(
              new FlashCard(doc.id, doc.data().english, doc.data().polish)
            );
            console.log(doc.id, " => ", doc.data().english);
          });
          console.log(
            "FB access : loadedFlashCards.length: " + loadedFlashCards.length
          );
          this.$store.dispatch("loadFlashcards", loadedFlashCards);
        })
        .catch(err => {
          console.log("Error getting documents: ", err);
        });
    },
    uploadLoaded: function() {
      this.$store.state.flashCards.forEach((item, idx, array) => {
        fb.flashCardsCollection
          .add({english: item.word, polish: item.translation})
          .then(() => {
            console.log("Document added successfully");
          })
          .catch(err => {
            console.error("Error writing document: ", err);
          });
      });
    }
  }
};
</script>

<style>
</style>