const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const app        = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const Papa = require('papaparse');
const fs = require('fs');
const testFilePath = 'test.csv';
const testFile = fs.readFileSync(testFilePath, "utf8");

const testRows = {};
Papa.parse(testFile, {
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    testRows.data = results.data;
    testRows.errors = results.errors;
    testRows.meta = results.meta;
  }
})

console.log(testRows.data);

app.get("/", (req, res) => {
  res.render("index", { testRows });
});

app.listen(PORT, process.env.IP, function(){
  console.log(`Example app listening on port ${PORT}`);
});