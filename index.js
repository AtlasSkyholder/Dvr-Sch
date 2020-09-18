const PORT       = process.env.PORT || 8080;
const express    = require("express");
const multer = require('multer');
const path = require('path');

const app        = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

const Papa = require('papaparse');
const fs = require('fs');
let csvFile; // name for file to be parsed after POST
let csvData; // name for data of csv

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
      console.log(file);
      csvFile = file.originalname;
      cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", upload.single('myfile'), (req, res) => {
  const testFilePath = csvFile;
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

csvData = testRows.data;
res.redirect("schedule");

});


app.get("/schedule", (req, res) => {
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  console.log(csvData);
  res.render("schedule", { week, csvData });
})

app.listen(PORT, function(){
  console.log(`Example app listening on port ${PORT}`);
});