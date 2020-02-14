

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
$( "#saveBtn1" ).click(function() {
    $(this).toggleClass('myButtonClicked').fadeIn(1000);
    $('#hrChunk1').addClass('form-controlSaved')
})

$( "#saveBtn2" ).click(function() {
        $(this).toggleClass('myButtonClicked').fadeIn(1000);
        $('#hrChunk2').addClass('form-controlSaved')
})

$( "#saveBtn3" ).click(function() {
            $(this).toggleClass('myButtonClicked').fadeIn(1000);
            $('#hrChunk3').addClass('form-controlSaved')
    // alert('Changes saved M8!')
});

$( "#saveBtn4" ).click(function() {
    $(this).toggleClass('myButtonClicked').fadeIn(1000);
    $('#hrChunk4').addClass('form-controlSaved')
})

$( "#saveBtn5" ).click(function() {
    $(this).toggleClass('myButtonClicked').fadeIn(1000);
    $('#hrChunk5').addClass('form-controlSaved')
})

$( "#saveBtn6" ).click(function() {
    $(this).toggleClass('myButtonClicked').fadeIn(1000);
    $('#hrChunk6').addClass('form-controlSaved')
})

$( "#saveBtn7" ).click(function() {
    $(this).toggleClass('myButtonClicked').fadeIn(1000);
    $('#hrChunk7').addClass('form-controlSaved')
})

$( "#saveBtn8" ).click(function() {
    $(this).toggleClass('myButtonClicked').fadeIn(1000);
    $('#hrChunk8').addClass('form-controlSaved')
})
// ------------------------------------------------------------if chunk has filled in save, re-default to edit.
$('.form-control').click(function() {
    var chunk = $('.form-control')
    if ($(chunk).hasClass('form-controlSaved'));
    $(this).removeClass('form-controlSaved')
    $(this).removeClass('pastForm-control')
});
// ------------------------------------------------------------if chunk has filled in save, re-default to edit.

//   ---------------------------------------------------------------------------------------save panel animation
$(document).ready(function(){
    $("#saveBtn1").click(function(){
      $("#pane1").slideToggle("slowest");
      $("#pane1").delay(500).slideUp(1000);
    });
});

$(document).ready(function(){
    $("#saveBtn2").click(function(){
      $("#pane2").slideToggle("slowest");
      $("#pane2").delay(500).slideUp(1000);
    });
});

$(document).ready(function(){
    $("#saveBtn3").click(function(){
      $("#pane3").slideToggle("slowest");
      $("#pane3").delay(500).slideUp(1000);
    });
});

$(document).ready(function(){
    $("#saveBtn4").click(function(){
      $("#pane4").slideToggle("slowest");
      $("#pane4").delay(500).slideUp(1000);
    });
});

$(document).ready(function(){
    $("#saveBtn5").click(function(){
      $("#pane5").slideToggle("slowest");
      $("#pane5").delay(500).slideUp(1000);
    });
});

$(document).ready(function(){
    $("#saveBtn6").click(function(){
      $("#pane6").slideToggle("slowest");
      $("#pane6").delay(500).slideUp(1000);
    });
});

$(document).ready(function(){
    $("#saveBtn7").click(function(){
      $("#pane7").slideToggle("slowest");
      $("#pane7").delay(500).slideUp(1000);
    });
});

$(document).ready(function(){
    $("#saveBtn8").click(function(){
      $("#pane8").slideToggle("slowest");
      $("#pane8").delay(500).slideUp(1000);
    });
});
  //   ---------------------------------------------------------------------------------------save panel animation
