<template>
  <div class="LoadFileComponent">
    <div class="panel panel-sm">
      <div class="panel-body">
        <div class="form-group">
          <label for="csv_file" class="control-label col-sm-3 text-right">CSV file to import</label>
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
        <div class="col-sm-offset-3 col-sm-9">
          <a href="#" class="btn btn-primary">Parse CSV</a>
        </div>
        <table v-if="parse_csv">
          <thead>
            <tr>
              <th
                v-for="key in parse_header"
                @click="sortBy(key)"
                :class="{ active: sortKey == key }"
                v-bind:key="key.id"
              >
                {{ key | capitalize }}
                <span
                  class="arrow"
                  :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
                ></span>
              </th>
            </tr>
          </thead>
          <tr v-for="csv in parse_csv" v-bind:key="csv.id">
            <td v-for="key in parse_header" v-bind:key="key.id">{{csv[key]}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
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

  // filters ???

  methods: {
    loadCSV(e) {
      var vm = this;
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        // Handle errors load
        reader.onload = function(event) {
          var csv = event.target.result;
          vm.parseCSV(csv);          
          vm.$emit("newFileLoaded", vm.parse_csv);
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
      var lines = csvFile.split("\n");
      var result = [];
      var headers = lines[0].split(",");
      lines[0].split(",").forEach(function(key) {
        vm.sortOrders[key] = 1;
      });

      lines.map(function(line, indexLine) {
        if (indexLine < 1) return; // Jump header line

        var obj = {};
        var currentline = line.split(",");

        headers.map(function(header, indexHeader) {
          obj[header] = currentline[indexHeader];
        });
        vm.parse_csv.push(obj);
        result.pop() // remove the last item because undefined values        
        return result; // JavaScript object
      });
    }
  }
};
</script>

<style>
</style>