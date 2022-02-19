

//todays time and date
var utahTime= document.getElementById("utahTime");
var currentTime = moment();
utahTime.textContent = currentTime.format("dddd, MMMM Do YYYY, h:mm:a");

//for loop for time sections
var container = document.querySelector(".container");
for (var i = 0; i < array.length; i++) {
   container.innerHTML += '<div class="box"></div>';
}


//event listener for saving button on reminders
document.querySelector(".saveBtn").addEventListener("click", function() {
  var reminders = document.getElementById("reminders").value;
  //local storage
  localStorage.setItem("reminders", reminders);
  alert('reminder saved');
  console.log("reminder was saved") 
 
}, false)
reminders.value = localStorage.getItem("reminders")


//for loop to save all the text areas!!!!!
//for(i=0; i < reminders.length; i++) {}

//var createTask = function(taskText, taskDate, taskList) {
    //create elements that make up a task
   // var taskLi = $("<li>").addClass("list-group-item");
    //var taskSpan = $("<span>")
    //.addCLass()
//}



//once the page loads this ufnction will happen
//$(document).ready(function {
//})

//drag and drop featuer
//$(".column").sortable({
  //  connectWith: $(".container .card"),
    //scroll: false,
//    tolerance: "pointer",
  //  helper: "clone",
   // activate: function(event) {
    //  console.log("activate", this);
    //},
   // deactivate: function(event) {
   //   console.log("deactivate", this);
   // },
   // over: function(event) {
    //  console.log("over", event.target);
   // },
    //out: function(event) {
   //   console.log("out", event.target);
   // },
   // update: function(event) {
   //   console.log($(this).children());
   // }
 // });
  