const saveEl = document.querySelector("#save-el");
const countEl = document.getElementById("count-el");
let count = 0;
const exit = document.querySelector(".exit");
const entry = document.querySelector(".entry");
const counterEnter = document.querySelector("#counter-enter");
const counterExit = document.querySelector("#counter-exit");
let peopleEntering = 0;
let peopleLeaving = 0;
const entering = document.querySelector("#people-entering");
const leaving = document.querySelector("#people-leaving");
const statusDisplay = document.querySelector(".status");
let maxCapacity = 100;
const maxDisplayCapacity = document.querySelector(".max-cap");


maxDisplayCapacity.textContent = maxCapacity 

function displayStatus() {
  if(count/maxCapacity < 0.5) {
   statusDisplay.textContent= "Less than 50% of capacity occupied"
   statusDisplay.style.color = "blue" 
  }

  else if (count/maxCapacity < 0.75) {
  statusDisplay.textContent= "Occupation between 50% and 75%" 
  statusDisplay.style.color = "#f37335" 
}
 else if(count/maxCapacity < 1) {
  statusDisplay.textContent= "More than 75% of capacity occupied" 
  statusDisplay.style.color = "#93291e" 
}
else {
  statusDisplay.textContent= "Max Occupation reached!"
  statusDisplay.style.color = "red" 
}
}

function increaseCount() {
  if (count<maxCapacity) {
  count += 1;
  countEl.innerText = count;
  visibleEntry()
  peopleEntering += 1;
  entering.textContent = peopleEntering
  peopleLeaving = 0
  displayStatus()
  }
  
  else (
   statusDisplay.textContent= "Max Occupation reached!" 
  )
  
}

function decreaseCount() {
  if (count>0){
  count -=1;
  countEl.innerText = count;
  peopleLeaving += 1;
  leaving.textContent = peopleLeaving;
}
  else {
  count = 0;
  countEl.innerText = count;
  leaving.textContent = peopleLeaving; 
  }
  visibleExit()
  peopleEntering = 0;
  displayStatus()
}


function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = count;
}

function reset() {
  countEl.textContent = 0;
  count = 0;
  peopleEntering = 0;
  peopleLeaving = 0;
  entering.textContent = peopleEntering;
  leaving.textContent = peopleLeaving;
  entry.style.visibility = "visible";
  exit.style.visibility = "visible";
  counterEnter.style.visibility = "visible";
  counterExit.style.visibility = "visible";
  statusDisplay.textContent= "Status";
  statusDisplay.style.color= "black";
}

function visibleEntry() {
  entry.style.visibility = "visible";
  exit.style.visibility = "hidden";
  counterEnter.style.visibility = "visible";
  counterExit.style.visibility = "hidden";
}

function visibleExit() {
  entry.style.visibility = "hidden";
  exit.style.visibility = "visible";
  counterEnter.style.visibility = "hidden";
  counterExit.style.visibility = "visible";
}

function increaseOneCap() {
  maxCapacity += 1
  maxDisplayCapacity.innerText = maxCapacity
  displayStatus()
}

function decreaseOneCap() {
  maxCapacity -= 1
   if(maxCapacity < 0) {
    maxCapacity = 0
    maxDisplayCapacity.innerText = maxCapacity
  } else {
    maxDisplayCapacity.innerText = maxCapacity
  }
  displayStatus()
}

function increaseTenCap() {
  maxCapacity += 10
  maxDisplayCapacity.innerText = maxCapacity
  displayStatus()
}

function decreaseTenCap() {
  maxCapacity -= 10
  if(maxCapacity < 0) {
    maxCapacity = 0
    maxDisplayCapacity.innerText = maxCapacity
  } else {
    maxDisplayCapacity.innerText = maxCapacity
  }
  displayStatus()
}

function resetCap() {
  maxCapacity = 100
  maxDisplayCapacity.innerText = maxCapacity
  displayStatus()
}




