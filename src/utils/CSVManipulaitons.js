import FlashCard from "../../src/data_objects/flashCard";

export default function parseCSV(csvFile) {
  let parse_header = [];
  let parse_csv  = [];
  let sortOrders = {};
  let sortKey = ""

  let idx = 0;
  csvFile.trim();
  var lines = csvFile.split(/\r\n|\n/);
  lines.forEach(line => {
    line = line.trim();
  })
  var headers = lines[0].split(",");
  lines[0].split(",").forEach(function (key) {
    sortOrders[key] = 1;
  });

  lines.map(function (line, indexLine) {
    if (indexLine < 1) return; // Jump header line

    var obj = {};
    if (line.indexOf(',') > -1) {
      var currentline = line.split(",");
      headers.map(function (header, indexHeader) {
        obj[header] = currentline[indexHeader].trim();
      });
      idx += 1;
      parse_csv.push(
        new FlashCard(
          idx,
          obj.english.replace("\r", ""),
          obj.polish.replace("\r", "")
        )
      );
    }
  });
  return parse_csv; // JavaScript object
}
