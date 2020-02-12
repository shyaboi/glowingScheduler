var notes = document.getElementById("hrChunk1").value;




$( ".btn" ).click(function() {
    $( this ).toggleClass('myButtonClicked' );
    alert('Changes saved M8!')
  });

  $(document).ready(function () {
    var savesnotesbtn = document.getElementById("saveBtn");

    //FILL TEXT AREAS WITH NOTES
    for (var i = 1; i < 9; i++) {
      $("#note" + i + "input").val(localStorage.getItem("note" + i));
    }

    function saveNotes() {
      // Save data to localstorage
      for (var i = 1; i < 9; i++) {
        localStorage.setItem("note" + i, $("#note" + i + notes).val());
      }
      $(savesnotesbtn).click(function(){
          saveNotes()
      })
    };
window.onload = function(){
    saveNotes()
};
});