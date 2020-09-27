let atrData = document.currentScript.getAttribute('data');

let newData = strToObj(atrData);

let schData; // schedule Data needs to be a global variable so it takes less time to cycle through the weeks. Only gets updated when the driver is changed

function add(){
  let num = parseInt(document.getElementById('wkNum').innerHTML);
  num = num + 1;
  document.getElementById('wkNum').innerHTML= num;
  document.getElementById('hid').value= num;
  updateBoard(num);
}

function subtract(){
  let num = parseInt(document.getElementById('wkNum').innerHTML);
  if (num > 1) {
    num = num - 1;
    document.getElementById('wkNum').innerHTML= num;
    document.getElementById('hid').value= num;
    updateBoard(num);
  }
}

function strToObj(data){
  for (let i = 0; i < data.length; i++) {
    data = data.replace('&#34;', '"');
  }

  return JSON.parse(data);
}

function load(str){

  for ( item of newData) { //here looks for the exact driver and returns their schedule
    if (item.name === str) {
      schData = item.schedule;
    }
  }
  let num = 1;
  document.getElementById('wkNum').innerHTML= num;
  updateBoard(num);

}

function updateBoard (num) {

  let schArr = [];
  schData.forEach(single => {    //here it looks for the schedule between day 1 and day 7

    if (single[0] >= (((num-1) * 7) +1) && single[0] <= (num *7)){
      schArr.push(single);
    }
  });

  for (let c = 0; c < 70; c++) {
    let id = c + '';
    if (id.length === 1) {
      id = '0' + id;
    }
    if(schArr[c][2] === 0) {
      document.getElementById(id).innerHTML = '';
    } else if (schArr[c][2] === 1) {
      document.getElementById(id).innerHTML = "Pickup goods";
    } else if (schArr[c][2] === 2) {
      document.getElementById(id).innerHTML = "Deliver goods";
    } else if (schArr[c][2] === 3) {
      document.getElementById(id).innerHTML = "Other";
    }
    
  }


}

function submitThis() {
  $.ajax({
    url:'/schedule',
    type:'post',
    data:$('#nav').serialize(),
    success:function(){
      console.log("It worked!!");

    }
  })
  return false;
}