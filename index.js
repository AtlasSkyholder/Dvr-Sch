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
let csvFileName; // name for created csv File for download
let csvData; // name for data of csv
let weekNumber = 1; // variable for cycling through the weeks
let fileArray = [];

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
  if(csvFileName !== undefined) {  //if the user comes back to the home page from the download page, it will delete the csv file there, prevent /uploads from getting too big
    fs.unlink(csvFileName, (err) => { 
      if(err) {
        console.error(err);
        return;
      }
      //file removed
    });
  }

  csvData = undefined;  // reset csvData in case I want to choose data api

  res.render("index");
});

app.post("/", upload.single('myfile'), (req, res) => {

if (req.body.inputType === 'file') {  //here it checks if the inputType was file or apiCall, if file, then it will parse the data and send it upstream, if not, then use local data/ fake api call
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

  let tempArray = [];  // temporary array to push in objects of names to then be reduced to an array of unique objects

  for (let i = 0; i < csvData.length; i++) {  // creates an object with key name, pushes all the objects into the array to be reduced after
    let tempObj={};
    tempObj['name'] = csvData[i].name;
    tempArray.push(tempObj);
  }

  fileArray = [...new Set(tempArray.map(item => JSON.stringify(item)))].map(single => JSON.parse(single));  // reducing the array of objects with key names to unique array

  fileArray.forEach(obj => {  // builds each obj in fileArray with a schedule
    obj['schedule'] = [];
    let newArr = [];
    for (let k = 0; k < csvData.length; k++) {
      let c = [];
      if(obj.name === csvData[k].name){  // if the names match, then it adds a day to the start of each array, then pushes them to c
        let a = JSON.parse(csvData[k].schedule);  // parses the string that represented an array of arrays for a single day
        for(let n = 0; n < a.length; n ++) {
          let d = parseInt(csvData[k].day);
          let e = a[n];
          let b = [d, e[0], e[1]];
          c.push(b);
        }
        newArr = newArr.concat(c);  //here it concats to a larger array to make the schedule array
      }
    }
    obj.schedule = newArr;  // adds the schedule array to the object schedule key
  })

  fs.unlink(testFilePath, (err) => { //delete the uploaded file to keep /uploads from overflowing with files
    if(err) {
      console.error(err);
      return;
    }
    //file removed
  });
}

  res.redirect("schedule");

});


app.get("/schedule", (req, res) => {
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let localData; // just a generic local variable to either take on csvData (parsed data from selected file), or data (local data, just a fake api call)
  let strData;

  if (csvData !== undefined) {
    localData = fileArray;
  } else {
    localData = data;
  }

  console.log(localData);

  strData = JSON.stringify(localData);

  res.render("schedule", { week, weekNumber, strData, localData });
});



app.post("/schedule", (req,res) => {

  const name = req.body.dayList;
  const day = parseInt(req.body.daySelect);

  let schedule = [];  //used to obtain the schedule of the selected person, becomes an array of arrays

  for ( item of data) { //here looks for the exact driver and returns their schedule
    if (item.name === name) {
      schedule = item.schedule;
    }
  }

  let arraySum = []; //this array will be used to summarize the events in each group of days

  for (let i = 0; i < schedule.length; i = i + (day*10) ) {  //iterating through the schedule to collect the pickup,deliver and other data
    let pickup = 0;
    let deliver = 0;
    let other = 0;
    for (let h = i; h < (i+(day*10)); h++) {
      let item = schedule[h][2];
      switch(item) {
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
    arraySum.push(['Day ' + ((i/10)+1) + ' - Day ' + ((i/10)+day), pickup, deliver, other]);  // creates an array of the day window with a summary of pickups, deliveries and other
  }

  let schedObj = arraySum.map( item => {    //creating a template for all the data

    return     { Time_Frame: item[0],
    Pickup: item[1],
    DropOff: item[2],
    Other: item[3]
  };
  });

  const someData = Papa.unparse(schedObj);  // unparsing the template for .csv

  csvFileName = "./uploads/" + name + "Data.csv";  //the path to the csv file

  fs.writeFile(csvFileName, someData, err => {  //writting the .csv file
  if (err) throw err;
  console.log("someData table successfully saved!");
  });

  res.redirect("link");

});

app.get("/link" , (req, res) => {

  let fileName = csvFileName.replace('./uploads/', '');
  res.render("link", {csvFileName, fileName});
})

app.listen(PORT, function(){
  console.log(`Example app listening on port ${PORT}`);
});