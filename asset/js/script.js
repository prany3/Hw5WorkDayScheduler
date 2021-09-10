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
     console.log(getInput1) //output variables to check if certain codes are working
    document.getElementById("input-1").innerHTML = getInput1;
    document.getElementById("input-2").innerHTML = getInput2;
    document.getElementById("input-3").innerHTML = getInput3;
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

