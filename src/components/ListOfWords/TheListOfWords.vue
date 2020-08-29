<template>
  <div id="TheListOfWords">
    <div>
      <b-container class="bv-example-row">
        <div class="d-none d-lg-block">
          <b-row>
            <b-col>
              <div>
                <p>
                  <LoadPredefinedSets></LoadPredefinedSets>
                </p>
              </div>
            </b-col>
            <b-col>
              <div>
                <p>
                  <LoadFileComponent></LoadFileComponent>
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
        <b-row cols="1">
          <b-col class="bg-light" col xl="8" lg="8">
            <words-for-guessing></words-for-guessing>
          </b-col>
          <b-col class="bg-light" col xl="4" lg="4">
            <div class="d-none d-lg-block">
              <ListOfDone></ListOfDone>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="bg-light">
            <div class="d-none d-lg-block">
              <newFlashCardForm></newFlashCardForm>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <label class="custom-label flex"></label>
    <div class="d-block d-lg-none">
      <div>{{ $tc('list-of-words.small-screen-done-counter', doneCnt) }}</div>
      <b-row>
        <b-col>
          <LoadPredefinedSets></LoadPredefinedSets>
        </b-col>
        <b-col>
          <LoadFileComponent></LoadFileComponent>
        </b-col>
        <b-col>
          <newFlashCardForm></newFlashCardForm>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import FlashCard from "../../data_objects/flashCard";
import LoadFileComponent from "../LoadFile/LoadFile";
import WordsForGuessing from "../WordsForGuessing/WordsForGuessing";
import ListOfDone from "../ListOfDone/ListOfDone";
import _ from "lodash";
import LoadPredefinedSets from "../PredefinedSets/LoadPredefinedSets";
import newFlashCardForm from "../NewWords/AddWord";
Vue.prototype._ = _;

export default {
  components: {
    LoadFileComponent,
    WordsForGuessing,
    ListOfDone,
    LoadPredefinedSets,
    newFlashCardForm
  },

  methods: {},

  computed: {
    doneCnt() {
      return this.$store.state.doneFlashCards.length;
    }
  }
};
</script>

<style scoped>
</style>