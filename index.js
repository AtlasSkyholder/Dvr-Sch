const PORT       = process.env.PORT || 8080;
const express    = require("express");
const multer = require('multer');
const path = require('path');
const Papa = require('papaparse');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

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

  const name = req.body.dayList;
  const day = req.body.daySelect;

  let schedule = [];  //used to obtain the schedule of the selected person, becomes an array of arrays

  for ( item of data) { //here looks for the exact driver and returns their schedule
    if (item.name === name) {
      schedule = item.schedule;
    }
  }

  let arraySum = []; //this array will be used to summarize the events in each group of days

  for (let i = 0; i < schedule.length; i + day) {  //iterating through the schedule to collect the pickup,deliver and otgher data
    let pickup = 0;
    let deliver = 0;
    let other = 0;
    for (let h = i; h < i+day; h++) {
      let item = schedule[h][2];
      switch(item) {
        case 0 :
          break;
        case 1 :
          pickup++;
          break;
        case 2 :
          deliver++;
          break;
        case 3 :
          other++;
          break;
      }
    }
    arraySum.push(['Day ' + (i+1) + ' - Day ' + (i+day), pickup, deliver, other]);  // creates an array of the day window with a summary of pickups, deliveries and other
  }

 

  let schedObj = arraySum.map( item => {    //creating a template for all the data

    return     { Time_Frame: item[0],
    Pickup: item[1],
    Drop_off: item[2],
    Other: item[3]
  };
  });

  const someData = Papa.unparse(schedObj);  // unparsing the template for .csv

  fs.writeFile("./uploads/" + name + "Data.csv", someData, err => {  //writting the .csv file
  if (err) throw err;
  console.log("someData table successfully saved!");
  });


});

app.listen(PORT, function(){
  console.log(`Example app listening on port ${PORT}`);
});