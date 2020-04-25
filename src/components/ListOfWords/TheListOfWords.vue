<template>
  <div>
    <div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col class="bg-info">
            <div>
              <p>
                <LoadFileComponent></LoadFileComponent>
              </p>
            </div>
          </b-col>
          <div class="w-100"></div>
          <b-col class="bg-dark">
            <words-for-guessing></words-for-guessing>
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
import Vue from "vue";
import FlashCard from "../../data_objects/flashCard";
import LoadFileComponent from "../LoadFile/LoadFile";
import WordsForGuessing from "../WordsForGuessing/WordsForGuessing";
import ListOfDone from "../ListOfDone/ListOfDone";
import _ from "lodash";
Vue.prototype._ = _;

export default {
  components: { LoadFileComponent, WordsForGuessing, ListOfDone },

  methods: {
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