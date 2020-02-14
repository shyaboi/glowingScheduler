var date = moment().format('MMMM Do YYYY').toString();
var timeM = moment().format('h:mm:ss a');
var hour = 14
var permaTime = 13;
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
if (hour = permaTime) {
    $('#hrChunkFiv').removeClass('pastChunk')
    $('#hrChunkFiv').addClass('currentChunk')
    $('#saveBtn5').removeClass('myButton')
    $('#saveBtn5').removeClass('.myButtonClicked')
    $('#saveBtn5').addClass('myButtonCurrent')
    $('#hrChunk5').addClass('pastForm-control')
    $('#hrChunkFiv').removeClass('currentChunk')
    $('#hrChunkFiv').addClass('currentChunk')
    }


if (hour < 55) {
    $('#hrChunkTwo').removeClass('currentChunk')
    $('#hrChunkTwo').addClass('pastChunk')
    $('#saveBtn2').removeClass('myButton')
    $('#saveBtn2').removeClass('.myButtonClicked')
    $('#saveBtn2').addClass('myButtonPast')
    $('#hrChunk2').addClass('form-controlPased')
    $('#hrChunkTwo').removeClass('currntChunk')
    $('#hrChunkTwo').addClass('pastChunk')
    }

if (hour < 55) {
        $('#hrChunkOne').removeClass('currentChunk')
        $('#hrChunkOne').addClass('pastChunk')
        $('#saveBtn1').removeClass('myButton')
        $('#saveBtn1').removeClass('.myButtonClicked')
        $('#saveBtn1').addClass('myButtonPast')
        $('#hrChunk1').addClass('form-controlPased')
        $('#hrChunkOne').removeClass('currntChunk')
        $('#hrChunkOne').addClass('pastChunk')
}
if (hour < 55) {
            $('#hrChunkThr').removeClass('currentChunk')
            $('#hrChunkThr').addClass('pastChunk')
            $('#saveBtn3').removeClass('myButton')
            $('#saveBtn3').removeClass('.myButtonClicked')
            $('#saveBtn3').addClass('myButtonPast')
            $('#hrChunk3').addClass('form-controlPased')
            $('#hrChunkThr').removeClass('currntChunk')
            $('#hrChunkThr').addClass('pastChunk')
}

if (hour < 55) {
    $('#hrChunkFou').removeClass('currentChunk')
    $('#hrChunkFou').addClass('pastChunk')
    $('#saveBtn4').removeClass('myButton')
    $('#saveBtn4').removeClass('.myButtonClicked')
    $('#saveBtn4').addClass('myButtonPast')
    $('#hrChunk4').addClass('form-controlPased')
    $('#hrChunkFou').removeClass('currntChunk')
    $('#hrChunkFou').addClass('pastChunk')
}
// if (hour < permaTime){
//     $('#saveBtn2').removeClass('myButton')
//     $('#saveBtn2').removeClass('.myButtonClicked')
//     $('#saveBtn2').addClass('myButtonPast')
// }

$("#currentTime").text(function () {
    return $(this).text().replace("Current Work Hour"); 
});​​​​​

// if (hour >= 22) {
//     $('.form-control').addClass('form-controlSaved')
// }
// let timerId = setInterval(date , 100);
// ----------------------------------------------------------------------------------Update Time
function updateTime(){
$('#currentDay').replaceWith(date);
}

console.log(hour)
