<template>
  <div class="LoadFileComponent">
    <div class="panel panel-sm">
      <div class="panel-body">
        <div class="form-group">
          <div class="col-sm-9">
            <input
              type="file"
              id="csv_file"
              name="csv_file"
              class="form-control"
              @change="loadCSV($event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
import FlashCard from "../../data_objects/flashCard";
import parseCSV from "../../utils/CSVManipulaitons";

export default {
  name: "LoadFileComponent",
  data() {
    return {
      parse_header: [],
      parse_csv: [],
      sortOrders: {},
      sortKey: ""
    };
  },

  methods: {
    loadCSV(e) {
      var vm = this;
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        //TODO Handle errors load
        reader.onload = function(event) {
          var csv = event.target.result;
          parseCSV(csv);
          vm.$store.dispatch('loadFlashcards', vm.parse_csv);
        };
        reader.onerror = function(evt) {
          if (evt.target.error.name == "NotReadableError") {
            alert("Cannot read file !");
          }
        };
      } else {
        alert("FileReader are not supported in this browser.");
      }
    },
  }
};
</script>

<style>
</style>