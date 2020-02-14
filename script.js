var noteOne = '';
console.log(noteOne)

$(function(){
$("#hrChunks").fadeIn(1500);
});

$(document).ready(function(){
  $("#saveBtn").click(function(){
      var comment = $.trim($("#hrChunk1").val());
     localStorage.setItem("#note", comment)
    });
 
});
// $( ".btn" ).click(function() {
//     $( this ).toggleClass('myButtonClicked' );
//     alert('Changes saved M8!')
//   });

//   $(document).ready(function () {
//     var savesnotesbtn = document.getElementById("saveBtn");

//     //FILL TEXT AREAS WITH NOTES
//     for (var i = 1; i < 9; i++) {
//       $("#note" + i + "input").val(localStorage.getItem("note" + i));
//     }
    function saveNotes() {
      // Save data to localstorage
      for (var i = 1; i < 9; i++) {
        localStorage.setItem("note" + i, $("#note" + i + noteOne).val());
      }};
window.onload = function(){
    saveNotes()
};
