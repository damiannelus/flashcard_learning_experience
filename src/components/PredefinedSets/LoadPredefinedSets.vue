<template>
  <div>
    <button>DON'T TOUCH THIS</button>
  </div>  
</template>

<script>
import predefiendSet from "../../data_objects/predefinedSet";
import listPredefinedSets from "../../utils/FirebaseAccess"

export default {
  name: "LoadPredefinedSets",
  data() {
    return {
      predefinedSets: []
    }
  }, 
  created() {
    listPredefinedSets();
  }
}

</script>

<style>

</style>