//todays time and date
var timeOfDay = function () {
  var utahTime = document.getElementById("utahTime");
  var currentTime = moment();
  utahTime.textContent = currentTime.format("dddd, MMMM Do YYYY, h:mm a");
  setInterval(function() {timeOfDay(); }, 60000)
}
timeOfDay();

var storage = JSON.parse(localStorage.getItem("reminders")) || {};

//create a object loop that will take the key and assign the value of the key to the corresponding id of the textarea
for (var [key, value] of Object.entries(storage)) {
  var textArea = document.getElementById(key)
  localStorage.getItem(key)
  textArea.innerHTML = value
}

//this tells the hour of the day
$('.time-block').each(function () {
  var time = $(this).data('time')
  console.log(time)
var current = moment().hours()
console.log(current)

if(current < time) {
  $(this).children('.reminders').addClass('future')
}
else if (current > time) {
  $(this).children('.reminders').addClass('past')
}

else if (current === time) {
  $(this).children('.reminders').addClass('present')
}

})


//event listener for saving button on reminders
$('.saveBtn').each(function(){
  $(this).on('click', function(event) {

  var id = "x" + event.target.id
  var reminders = $('#'+ id).val();
  storage[id] = reminders
  localStorage.setItem("reminders", JSON.stringify(storage));
  console.log("reminder was saved")
})
});
function getValue() {
  var storedText = localStorage.getItem("reminders");
  if (storedText != null) {

  }
}

