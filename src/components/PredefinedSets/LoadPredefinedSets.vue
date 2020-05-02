<template>
  <div>
    <button v-on:click="loadPredefinedSet">DON'T TOUCH THIS</button>
  </div>  
</template>

<script>
import predefiendSet from "../../data_objects/predefinedSet";
import {listPredefinedSets,obtainFileFromFirebase} from "../../utils/FirebaseAccess";
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