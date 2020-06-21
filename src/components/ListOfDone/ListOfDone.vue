<template>
  <div class="ListOfDone">
    <h3>{{ $tc('list-of-words.done-words-title', doneToDisplay.length) }}</h3>
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