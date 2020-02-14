var date = moment().format('MMMM Do YYYY').toString();
var time = moment().format('h:mm:ss a');
var hour = moment().hour();

// setInterval(() => {
    updateTime()
// }, 1000);


// let timerId = setInterval(date , 100);
function updateTime(){
$('#currentDay').replaceWith(date);
console.log(hour)
}
