import Vue from 'vue'
import Vuex from 'vuex'

import FlashCard from "./data_objects/flashCard";
import _ from "lodash";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flashCards: [
        new FlashCard(1, "Gutted", "Zawiedziony"),
        new FlashCard(2, "Plant", "Fabryka"),
        new FlashCard(3, "Countryside", "Przedmieścia")
      ],
      doneFlashCards: [],
  },
  getters: {
    getUnchecked: state => {
      try {
        return state.flashCards.filter(card => !card.isChecked);
      } catch (error) {
        return {};
      }
    }
  },
  //mutations are meant to be very thin wrappers around native operations on the state, with almost no business logic
  //It's also worth keeping in mind that many Vuex's plugins don't watch the state directly to track changes, 
  //they rather rely on mutations for that. "Out of bound" changes to the state are thus invisible to them.
  mutations: {
    FILL_IN_FLASHCARDS(state, newFlashCards) {
      Vue.set(state, 'flashCards', newFlashCards)
    },
    ADD_DONE_FLASHCARD(state, flashCard) {
      state.doneFlashCards.push(flashCard);
    },
    ADD_FLASHCARD(state, flashCard) {
      state.flashCards.push(flashCard);
    }
  },
  //Actions to house more elaborate business logic.
  //actions can be asynchronous, whereas mutations are typically not
  actions: {
    crossOutFlashcard ({commit}, wordID) {
      console.log(
        `CHECK_FLASHCARD.wordID: ${wordID}`
      );
      
      let flashcardToMove = this.state.flashCards.filter(obj => {
        return obj.id === wordID;
      });
      
      commit('ADD_DONE_FLASHCARD', flashcardToMove[0]);

      let newFlashCards = _.remove(this.state.flashCards, function(n) {
        return n.id !== wordID;
      });
      console.log(`crossOutFlashcard.newFlashCards.length: ${newFlashCards.length}`);
      commit('FILL_IN_FLASHCARDS', newFlashCards);
    },

    loadFlashcards ({commit}, newFlashCards) {
      commit('FILL_IN_FLASHCARDS', newFlashCards);
    },

    addFlashCard ({commit}, newFlashCard) {
      commit('ADD_FLASHCARD', newFlashCard);
    }
  }
})
