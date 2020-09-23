const PORT       = process.env.PORT || 8080;
const express    = require("express");
const multer = require('multer');
const path = require('path');
const Papa = require('papaparse');
const fs = require('fs');
const bodyParser = require('body-parser');

const app        = express();

const data = require('./assets/data/data');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

let csvFile; // name for file to be parsed after POST
let csvData; // name for data of csv
let weekNumber = 1; // variable for cycling through the weeks

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
      console.log(file);
      csvFile = file.originalname;
      cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });



const someArray = [
                { name: "Fred",
                  array: [1,2,3]},
                  {name: "Dude",
                  array: [[4],[5],[6]]}
              ];
const someData = Papa.unparse(someArray);

fs.writeFile("./uploads/someData.csv", someData, err => {
  if (err) throw err;
  console.log("someData table successfully saved!");
});





app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", upload.single('myfile'), (req, res) => {
  const testFilePath = req.file.path;
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

  let strData = JSON.stringify(data);

  res.render("schedule", { week, csvData, weekNumber, strData, data });
});



app.post("/schedule", (req,res) => {

  console.log(req.body);

  const name = req.body.dayList;
  let num = req.body.wkNumber;
  const day = req.body.daySelect;
  
  num = (((num-1) * 7) +1);

  let schedule = [];

  for ( item of data) { //here looks for the exact driver and returns their schedule
    if (item.name === name) {
      schedule = item.schedule;
    }
  }

  let newSch = [];
  for (let i = 0; i < day; i++) {
    schedule.forEach(item => {
      if(item[0] === (num + i)) {
        newSch.push(item);
      }
    });
  }

  const otherArray = [
    { Time_Frame: "Day 1 - 2",
      Pickup: 2,
      Drop_off: 2,
      Other: 1
    }
  ];
  const someData = Papa.unparse(otherArray);

  fs.writeFile("./uploads/" + name + "Data.csv", someData, err => {
  if (err) throw err;
  console.log("someData table successfully saved!");
  });


});

app.listen(PORT, function(){
  console.log(`Example app listening on port ${PORT}`);
});