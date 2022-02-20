

//todays time and date
var utahTime= document.getElementById("utahTime");
var currentTime = moment();
utahTime.textContent = currentTime.format("dddd, MMMM Do YYYY, h:mm:a");
var storage = JSON.parse(localStorage.getItem("reminders")) || {};
console.log(storage)

//create a object loop that will take the key and assign the value of the key to the corresponding id of the textarea
for(var [key, value] of Object.entries(storage)) {
  console.log(key, value);
  //var saveReminders =
//textarea.append(storage);

  //  var reminder = document.getElementsByClassName("reminders").innerHTML = storage
}


//event listener for saving button on reminders
document.querySelector(".container-fluid").addEventListener("click", function(event) {
  if(event.target.matches("button") === false) {
  return
}
var id = "x" + event.target.id
  var reminders = document.getElementById(id).value; 
    //local storage
   // console.log(reminders)

  storage[id] = reminders
  localStorage.setItem("reminders", JSON.stringify(storage));
  console.log("reminder was saved") 
 

 //localStorage.getItem("reminders");  
});
function getValue() {
  var storedText = localStorage.getItem("reminders");
  if(storedText != null) {
    
  }
}






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
  