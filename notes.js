// var dec-----------------------------------------------------------------------------------------------------------
var noteOne = localStorage.getItem('note1')
var noteTwo = localStorage.getItem('note2')
var noteThr = localStorage.getItem('note3')
var noteFou = localStorage.getItem('note4')
var noteFiv = localStorage.getItem('note5')
var noteSix = localStorage.getItem('note6')
var noteSev = localStorage.getItem('note7')
var noteEig = localStorage.getItem('note8')


// --------------------------------------------------------------------------------------------get notes from sotrage--
// -------------------------------------------------------------------------------------------------note chunk save call
$(function(){$('#hrChunk1').val(noteOne)});

$(function(){$('#hrChunk2').val(noteTwo)});

$(function(){$('#hrChunk3').val(noteThr)});

$(function(){$('#hrChunk4').val(noteFou)}); 
  
$(function(){$('#hrChunk5').val(noteFiv)});

$(function(){$('#hrChunk6').val(noteSix)});

$(function(){$('#hrChunk7').val(noteSev)});

$(function(){$('#hrChunk8').val(noteEig)});
