var today = moment();
var currentDay = today.format ("MMMM Do YYYY")
console.log(currentDay)
var currentTime = today.format("hh:mm a")
console.log(currentTime)
var dayElement = document.getElementById("currentDay")
dayElement.innerHTML = currentDay;
var timeElement = document.getElementById("currentTime")
timeElement.innerHTML = currentTime;
// savePlanner
var plannerContent = [];
function savedPlanner() {
    var getInput1 = localStorage.getItem("planner_1")
    var getInput2 = localStorage.getItem("planner_2")
    var getInput3 = localStorage.getItem("planner_3")
    var getInput4 = localStorage.getItem("planner_4")
    var getInput5 = localStorage.getItem("planner_5")
    var getInput6 = localStorage.getItem("planner_6")
    var getInput7 = localStorage.getItem("planner_7")
    var getInput8 = localStorage.getItem("planner_8")
    var getInput9 = localStorage.getItem("planner_9")
    // console.log(getInput1) //output variables to check if certain codes are working
    document.getElementById("input-1").innerHTML = getInput1;
    document.getElementById("input-2").innerHTML = getInput2;
    document.getElementById("input-3").innerHTML = getInput3;
    document.getElementById("input-4").innerHTML = getInput4;
    document.getElementById("input-5").innerHTML = getInput5;
    document.getElementById("input-6").innerHTML = getInput6;
    document.getElementById("input-7").innerHTML = getInput7;
    document.getElementById("input-8").innerHTML = getInput8;
    document.getElementById("input-9").innerHTML = getInput9;
}
savedPlanner()

var button_1 = document.getElementById("btn-1");
var button_2 = document.getElementById("btn-2");
var button_3 = document.getElementById("btn-3");
var button_4 = document.getElementById("btn-4");
var button_5 = document.getElementById("btn-5");
var button_6 = document.getElementById("btn-6");
var button_7 = document.getElementById("btn-7");
var button_8 = document.getElementById("btn-8");
var button_9 = document.getElementById("btn-9");



button_1.addEventListener("click",function (event) {  
    event.preventDefault();
    var input_1 = document.getElementById("input-1");
    console.log(input_1.value)
    localStorage.setItem("planner_1", input_1.value);
})

button_2.addEventListener("click",function (event){
    event.preventDefault();
    var input_2 = document.getElementById("input-2");
    console.log(input_2.value)
    localStorage.setItem("planner_2", input_2.value);
})

button_3.addEventListener("click", function (event) {
    event.preventDefault();
    var input_3 = document.getElementById("input-3");
    console.log(input_3.value)
    localStorage.setItem("planner_3", input_3.value);
})

button_4.addEventListener("click", function (event) {
    event.preventDefault();
    var input_4 = document.getElementById("input-4");
    console.log(input_4.value)
    localStorage.setItem("planner_4", input_4.value);
})

button_5.addEventListener("click", function (event) {
    event.preventDefault();
    var input_5 = document.getElementById("input-5");
    console.log(input_5.value)
    localStorage.setItem("planner_5", input_5.value);
})

button_6.addEventListenr("click", function (event) {
    event.preventDefault();
    var input_6 = document.getElementById("input-6");
    console.log(input_6.value)
    localStorage.setItem("planner_6", input_6.value);
})

button_7.addEventListener("click", function (event) {
    event.preventDefault();
    var input_7 = document.getElementById("input-7");
    console.log(input_7.value)
    localStorage.setItem("planner_7", input_7.value);
})

button_8.addEventListener("click", function (event) {
    event.preventDefault();
    var input_8 = document.getElementById("input-8");
    console.log(input_8.value)
    localStorage.setItem("planner_8", input_8.value);
})

button_9.addEventListener("click", function (event) {
    event.preventDefault();
    var input_9 = document.getElementById("input-9");
    console.log(input_9value)
    localStorage.setItem("planner_9", input_9.value);
})



var element = document.getElementById("hour-12");

document.getElementById("hour-12").classList.remove("future")
element.classList.add("present")
