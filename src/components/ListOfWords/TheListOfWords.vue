<template>
  <div>
    <div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col class="bg-info">
            <div>
              <p>
                <LoadFileComponent @newFileLoaded="updateMessage"></LoadFileComponent>
              </p>
            </div>
          </b-col>
          <div class="w-100"></div>
          <b-col class="bg-dark">
            <words-for-guessing v-bind="$props" @wordChecked="wordCrossed"></words-for-guessing>
          </b-col>
          <b-col>
            <ListOfDone></ListOfDone>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <label class="custom-label flex"></label>
  </div>
</template>

<script>
// import VueCsvImport from "vue-csv-import";
import LoadFileComponent from "../LoadFile/LoadFile";
import WordsForGuessing from "../WordsForGuessing/WordsForGuessing";
import ListOfDone from "../ListOfDone/ListOfDone";

export default {
  components: { LoadFileComponent, WordsForGuessing, ListOfDone },
  props: {
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
    
  },

  data: function ()  {
    return {
      doneFlashCards: [],
    }
  },

  methods: {
    updateMessage(loadedFlashCards) {
      let newFlashCards = []
      loadedFlashCards.map((currentValue, index, ) => {
        newFlashCards.push({
          id: index+1,
          word: currentValue.english,
          translation: currentValue.polish,
          isChecked: false
        })
      })
      this.flashCards = newFlashCards;
    },

    wordCrossed(wordID) {
      console.log(`wordID: ${wordID}`);
      
      let flashcardToMove = this.flashCards.filter(obj => {
        return obj.id === wordID;
      })
      console.log(`flashcardToMove: ${flashcardToMove.id}`);
      
      this.doneFlashCards.push(flashcardToMove);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

.list-item {
  text-decoration: underline;
}

.checked {
  text-decoration: line-through;
}
</style>