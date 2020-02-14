var date = moment().format('MMMM Do YYYY').toString();
var time = moment().format('h:mm:ss a');
var hour = moment().hour();
var past = hour > 
// setInterval(() => {
    updateTime()
// }, 1000);

// -------------------------------------------------------------------------------------------------------------------------------------------var Dec
// var ninAM = $('hrChunk1')
// var tenAM = $('hrChunk2')
// var eleAM = $('hrChunk3')
// var tweAM = $('hrChunk4')
// var onePM = $('hrChunk5')
// var twoPM = $('hrChunk6')
// var thrPM = $('hrChunk7')
// var fouPM = $('hrChunk8')
if (hour = hour) {
    $('#hrChunkTwo').removeClass('currentChunk')
    $('#hrChunkTwo').addClass('pastChunk')
    }

if (hour = hour){
    $('#hrChunk2').addClass('pastForm-control')
}
if (hour = hour){
    $('#saveBtn2').removeClass('myButton')
    $('#saveBtn2').removeClass('.myButtonClicked')
    $('#saveBtn2').addClass('myButtonPast')
}


// if (hour >= 22) {
//     $('.form-control').addClass('form-controlSaved')
// }
// let timerId = setInterval(date , 100);
// ----------------------------------------------------------------------------------Update Time
function updateTime(){
$('#currentDay').replaceWith(date);
}

console.log(hour)
