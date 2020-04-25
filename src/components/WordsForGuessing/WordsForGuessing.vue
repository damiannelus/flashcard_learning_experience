<template>
  <div>
    <ul v-if="drawnFlashCards && drawnFlashCards.length">
      <li v-for="flashCard in drawnFlashCards" v-bind:key="flashCard.id" class>
          <div v-if="flashCard.isChecked != true" class="bg-danger w-6 h-6 p-1 flex justify-left items-left mr-2">
          <input
            type="checkbox"
            class="hidden w-4 h-4 text-green-600 pointer-events-none"
            v-model="flashCard.isChecked"
            v-bind:id="flashCard.id"
            @change="wordChecked(flashCard.id)"
            unchecked
          />
          <span v-bind:class="{'checked':flashCard.isChecked}">{{ flashCard.word }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "words-for-guessing",

  methods: {
    wordChecked(wordID) {
      console.log(`wordChecked.wordID ${wordID}`);
      
      this.$store.dispatch('crossOutFlashcard', wordID);
    },

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    },
  },

  computed: {
    drawnFlashCards: function () {
      let currentFlashCards = this.$store.state.flashCards;
      let filteredFlashCards = currentFlashCards.filter(card => !card.isChecked);
      let drawnFlashCards = this.shuffle(filteredFlashCards);
      return drawnFlashCards.slice(0, 10);   
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>