<template>
  <div>
    <ul v-if="flashCards && flashCards.length">
      <li v-for="flashCard in flashCards" v-bind:key="flashCard.id" class>
        <div class="bg-danger w-6 h-6 p-1 flex justify-left items-left mr-2">
          <input
            type="checkbox"
            class="hidden w-4 h-4 text-green-600 pointer-events-none"
            v-model="flashCard.isChecked"
            v-bind:id="flashCard.id"
            unchecked
          />
          <span v-bind:class="{'checked':flashCard.isChecked}">{{flashCard.word}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "words-for-guessing",
  data() {
    return {
      flashCards: [
        { id: 1, word: "Gutted", translation: "zawiedziony", isChecked: false },
        { id: 2, word: "Plant", translation: "Fabryka", isChecked: false },
        {
          id: 3,
          word: "Countryside",
          translation: "Przedmieścia",
          isChecked: false
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>