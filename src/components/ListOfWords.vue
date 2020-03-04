<template>
  <div>
    <!-- WE KEEP CLEAN BELOW THIS COMMENT -->
    <div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col  class="bg-info">
            <div>
              <p>
                <vue-csv-import v-model="csv"></vue-csv-import>
              </p>
              <div class="mt-2">{{ csv }}</div>
            </div>
          </b-col>
          <div class="w-100"></div>
          <b-col class="bg-dark">
            <words-for-guessing></words-for-guessing>
          </b-col>
          <b-col>Placeholder for sth extra</b-col>
        </b-row>
      </b-container>
    </div>
    <label class="custom-label flex"></label>
  </div>
</template>

<script>
import VueCsvImport from "vue-csv-import";
import WordsForGuessing from "./WordsForGuessing";

export default {
  csv: null,
  components: { VueCsvImport, WordsForGuessing }
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