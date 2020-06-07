<template>
  <div class="ListOfDone">
    <h3 v-if="doneToDisplay.length > 0">{{doneToDisplay.length}} already checked </h3>
    <h3 v-else>Checked words will appear below</h3>
    <ul v-if="doneToDisplay && doneToDisplay.length">
      <li v-for="flashCard in latestDone" v-bind:key="flashCard.id">
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
    },

    latestDone () {
      const wordsToDisplay = Math.min(this.$store.state.doneFlashCards.length, 14);
      return this.$store.state.doneFlashCards.slice(this.$store.state.doneFlashCards.length - wordsToDisplay);
    }
  }
};
</script>

<style>
</style>