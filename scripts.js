function myFunction0() {
  var element = document.getElementById("hp_0");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("first");
  element.classList.toggle("hide");
}

function myFunction1() {
  var element = document.getElementById("hp_1");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("second");
  element.classList.toggle("hide");
}

function myFunction2() {
  var element = document.getElementById("hp_2");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("third");
  element.classList.toggle("hide");
}

function myFunction3() {
  var element = document.getElementById("hp_3");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("four");
  element.classList.toggle("hide");
}

function myFunction4() {
  var element = document.getElementById("hp_4");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("five");
  element.classList.toggle("hide");
}

function myFunction5() {
  var element = document.getElementById("hp_5");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("six");
  element.classList.toggle("hide");
}

function myFunction6() {
  var element = document.getElementById("hp_6");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("seven");
  element.classList.toggle("hide");
}

function myFunction7() {
  var element = document.getElementById("hp_7");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("eight");
  element.classList.toggle("hide");
}

function myFunction8() {
  var element = document.getElementById("hp_8");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("nine");
  element.classList.toggle("hide");
}

function myFunction9() {
  var element = document.getElementById("hp_9");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("ten");
  element.classList.toggle("hide");
}

function myFunction10() {
  var element = document.getElementById("hp_10");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("eleven");
  element.classList.toggle("hide");
}

function myFunction11() {
  var element = document.getElementById("hp_11");
  element.classList.toggle("hidding");
  var element_1 = document.getElementById("twelve");
  element.classList.toggle("hide");
}

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // prepares code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) {
      document.getElementById(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange

  // now that everything is set, initiate request
  ajax.send();

}

window.onload = function() {
  
  loadFileInto("day1.html","hp_0");
  
  loadFileInto("day2.html","hp_1");
  
  loadFileInto("day3.html","hp_2");
  
  loadFileInto("day4.html","hp_3");
  
  loadFileInto("day5.html","hp_4");
  
  loadFileInto("day6.html","hp_5");
  
  loadFileInto("day7.html","hp_6");
  
  loadFileInto("day8.html","hp_7");
  
  loadFileInto("day9.html","hp_8");
  
  loadFileInto("day10.html","hp_9");
  
  loadFileInto("day11.html","hp_10");
  
  loadFileInto("day12.html","hp_11");
  
};
