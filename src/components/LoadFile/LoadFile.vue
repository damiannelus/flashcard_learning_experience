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
          vm.parseCSV(csv);
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

    // parse CSV
    parseCSV(csvFile) {
      var vm = this;
      let idx = 0;
      csvFile.trim();
      var lines = csvFile.split(/\r\n|\n/);
      lines.forEach(line => {
        line = line.trim();
      })
      var headers = lines[0].split(",");
      lines[0].split(",").forEach(function(key) {
        vm.sortOrders[key] = 1;
      });

      lines.map(function(line, indexLine) {
        if (indexLine < 1) return; // Jump header line

        var obj = {};        
        if (line.indexOf(',') > -1) {
          var currentline = line.split(",");
          headers.map(function(header, indexHeader) {
            obj[header] = currentline[indexHeader].trim();
          });
          idx += 1;
          vm.parse_csv.push(
            new FlashCard(
              idx,
              obj.english.replace("\r", ""),
              obj.polish.replace("\r", "")
            )
        );
        }            
        return vm.parse_csv; // JavaScript object
      });
    }
  }
};
</script>

<style>
</style>