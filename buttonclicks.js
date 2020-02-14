

// ------------------------------------------------------------on click local storage set note in proper chunk1---------
$(document).ready(function(){
    $("button").click(function(){
        var note = $.trim($("#hrChunk1").val());
        if(note === ""){
          return;
        };
       localStorage.setItem("note1", note)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk2---------
  $(document).ready(function(){
    $("button").click(function(){
        var note = $.trim($("#hrChunk2").val());
        if(note === ""){
          return;
        };
       localStorage.setItem("note2", note)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk3---------
  $(document).ready(function(){
    $("button").click(function(){
        var note = $.trim($("#hrChunk3").val());
        if(note === ""){
          return;
        };
       localStorage.setItem("note3", note)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk4---------
  $(document).ready(function(){
    $("button").click(function(){
        var note = $.trim($("#hrChunk4").val());
        if(note === ""){
          return;
        };
       localStorage.setItem("note4", note)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk--------5
  $(document).ready(function(){
    $("button").click(function(){
        var note = $.trim($("#hrChunk5").val());
        if(note === ""){
          return;
        };
       localStorage.setItem("note5", note)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk--------6
  $(document).ready(function(){
    $("button").click(function(){
        var note = $.trim($("#hrChunk6").val());
        if(note === ""){
          return;
        };
       localStorage.setItem("note6", note)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk--------7
  $(document).ready(function(){
    $("button").click(function(){
        var note = $.trim($("#hrChunk7").val());
        if(note === ""){
          return;
        };
       localStorage.setItem("note7", note)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk--------8
  $(document).ready(function(){
    $("button").click(function(){
        var note = $.trim($("#hrChunk8").val());
        if(note === ""){
          return;
        };
       localStorage.setItem("note8", note)
      });
   
  });
//   ---------------------------------------------------------------------class change for save button for gradient move
$( ".btn" ).click(function() {
    $(this).toggleClass('myButtonClicked').fadeIn(1000);
    $('#hrChunk1').addClass('form-controlSaved')

    // alert('Changes saved M8!')
  });
// ----------------------------------------------------------------------if
$('.form-control').click(function() {
    var chunk = $('.form-control')
    if ($(chunk).hasClass('form-controlSaved'));
    $(this).removeClass('form-controlSaved')
});
  
$(document).ready(function(){
    $("#saveBtn1").click(function(){
      $("#panel").slideToggle("slowest");
      $("#panel").delay(500).slideUp(1000);
    });
  });
