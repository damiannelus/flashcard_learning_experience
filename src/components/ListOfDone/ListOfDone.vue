<template>
  <div class="ListOfDone">
    <h1 v-if="doneToDisplay.length > 0">Well done lad!</h1>
    <ul v-if="doneToDisplay && doneToDisplay.length">
      <li v-for="flashCard in doneToDisplay" v-bind:key="flashCard.id">
        {{flashCard.word}} - {{flashCard._translation}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "ListOfDone",
  props: ["doneFlashCards"],

  computed: {
    doneToDisplay () {
      return this.$store.state.doneFlashCards;
    }
  }
  // data () {

  // }
};
</script>

<style>
</style>