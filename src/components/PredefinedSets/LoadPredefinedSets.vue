<template>
  <div>
    <div class="d-none d-lg-block">
      <button v-on:click="loadPredefinedSet">Load sample flashcards</button>
    </div>
    <div class="d-block d-lg-none">
      <button type="button" v-on:click="loadPredefinedSet" class="btn btn-outline-primary">Load sample flashcards</button>
    </div>
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
        .then(result => {
          this.$store.dispatch("loadFlashcards", result);
          this.$ga.event('game', 'words loaded', 'predefined');
        })
        .catch(err => {
          console.log(err);
          this.$ga.event('game', 'Error loading', 'predefined');
        });
    },
    uploadLoaded: function() {
      this.$store.state.flashCards.forEach((item, idx, array) => {
        fb.addSingleWord(item.word, item.translation);
      });
    }
  }
};
</script>

<style>
</style>