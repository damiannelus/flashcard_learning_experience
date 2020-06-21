<template>
  <div>
    <button v-on:click="loadPredefinedSet">Load sample flashcards</button>
  </div>
</template>

<script>
import Vuex from "vuex";
import predefiendSet from "../../data_objects/predefinedSet";
const fb = require("../../utils/FirestoreAccess");

import FlashCard from "../../data_objects/flashCard";

import parseCSV from "../../utils/CSVManipulaitons";

export default {
  name: "LoadPredefinedSets",
  data() {
    return {
      predefinedSets: []
    };
  },
  methods: {
    loadPredefinedSet: function() {
      fb.loadPredefinedSet()
      .then((result) => {
        this.$store.dispatch("loadFlashcards", result);
      }).catch((err) => {
        console.log(err);
      });
      
    },
    uploadLoaded: function() {
      this.$store.state.flashCards.forEach((item, idx, array) => {
        fb.addSingleWord(item.word, item.translation)
      });
    }
  }
};
</script>

<style>
</style>