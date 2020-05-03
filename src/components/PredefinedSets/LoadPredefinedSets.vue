<template>
  <div>
    <button v-on:click="loadPredefinedSet">DON'T TOUCH THIS</button>
  </div>  
</template>

<script>
import Vuex from 'vuex'
import predefiendSet from "../../data_objects/predefinedSet";
import {listPredefinedSets,obtainFileFromFirebase} from "../../utils/FirebaseAccess";

import parseCSV from "../../utils/CSVManipulaitons";
// import obtainFileFromFirebase from "../../utils/FirebaseAccess";

export default {
  name: "LoadPredefinedSets",
  data() {
    return {
      predefinedSets: []
    }
  },
  methods: {
    loadPredefinedSet: function () {
      let gsFileRef = obtainFileFromFirebase('wordsToUpload.csv')
      gsFileRef.then((result) => {
        // var reader = new FileReader();
        // reader.readAsText(result);
        this.$store.dispatch('loadFlashcards', parseCSV(result));
      }).catch((err) => {
        console.log("error mtf");
      });
      console.log(gsFileRef);
    }
  },
  created() {
    listPredefinedSets();
  }
}

</script>

<style>

</style>