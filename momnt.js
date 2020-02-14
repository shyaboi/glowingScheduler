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
if (past)
    $('form-control').addClass('pastForm-control')

if (hour = hour) {
    $('#hrChunkTwo').removeClass('pastChunk')
    $('#hrChunkTwo').addClass('currentChunk')
    
}

// if (hour >= 22) {
//     $('.form-control').addClass('form-controlSaved')
// }
// let timerId = setInterval(date , 100);
function updateTime(){
$('#currentDay').replaceWith(date);
}

console.log(past)
