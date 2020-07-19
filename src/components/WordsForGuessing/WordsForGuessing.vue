<template>
  <div>
    <b-list-group v-if="drawnFlashCards && drawnFlashCards.length" flush class="align-items-center">
      <b-list-group-item v-on:click="wordChecked(flashCard.id)" v-for="flashCard in drawnFlashCards" v-bind:key="flashCard.id" class="align-items-right">
          <div v-if="flashCard.isChecked != true" class="">
          <span v-bind:class="{'checked':flashCard.isChecked}"> {{ flashCard.word }}</span>
        </div>
      </b-list-group-item>
    </b-list-group>
    <button type="button" class="btn btn-outline-primary" v-on:click="shuffleCards">{{ $t('list-of-words.shuffle') }}</button>
    <k-progress :percent="percent" :color="['#008000', '#FFA500', '#FF0000']" :color-flow="false" active></k-progress>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import KProgress from 'k-progress';


export default {
  components: {KProgress},
  name: "words-for-guessing",
  data() {
    return {
      shuffler: 0,
      percent: 0,
    }
  },
  created: function() {
		var self = this;
		setInterval(function() {
        if (self.percent<100) {
             self.percent++;
         } else {
           self.shuffleCards();
           self.percent = 0;
         }
    }, 60000);
	},

  methods: {
    wordChecked(wordID) {
      this.$store.dispatch('crossOutFlashcard', wordID);
      this.percent = 0;
    },

    drawFlashCards: function() {
      this.shuffler ++; 
      console.log(`Shuffler: ${this.shuffler}`);
    },

    shuffleCards() {
      console.log(`FCs shuffled...`);
      this.percent = 0;
      this.drawnedFlashCards = this.drawFlashCards();
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
    drawnFlashCards: {
      get: function () {
        this.shuffler;
        return this.shuffle(this.filteredFlashCards).slice(0, 10);
      }
    },
    filteredFlashCards: {
      get: function () {
        return this.$store.getters.getUnchecked;
      }
    },
    ...mapGetters([
      'getUnchecked'
    ])
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>