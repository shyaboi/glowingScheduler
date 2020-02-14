
// ------------------------------------------------------------on click local storage set note in proper chunk1---------
$(document).ready(function(){
    $("button").click(function(){
        var comment = $.trim($("#hrChunk1").val());
        if(comment === ""){
          return;
        };
       localStorage.setItem("note1", comment)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk2---------
  $(document).ready(function(){
    $("button").click(function(){
        var comment = $.trim($("#hrChunk2").val());
        if(comment === ""){
          return;
        };
       localStorage.setItem("note2", comment)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk3---------
  $(document).ready(function(){
    $("button").click(function(){
        var comment = $.trim($("#hrChunk3").val());
        if(comment === ""){
          return;
        };
       localStorage.setItem("note3", comment)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk4---------
  $(document).ready(function(){
    $("#saveBtn").click(function(){
        var comment = $.trim($("#hrChunk4").val());
        if(comment === ""){
          return;
        };
       localStorage.setItem("note4", comment)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk--------5
  $(document).ready(function(){
    $("#saveBtn").click(function(){
        var comment = $.trim($("#hrChunk5").val());
        if(comment === ""){
          return;
        };
       localStorage.setItem("note5", comment)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk--------6
  $(document).ready(function(){
    $("#saveBtn").click(function(){
        var comment = $.trim($("#hrChunk6").val());
        if(comment === ""){
          return;
        };
       localStorage.setItem("note6", comment)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk--------7
  $(document).ready(function(){
    $("#saveBtn").click(function(){
        var comment = $.trim($("#hrChunk7").val());
        if(comment === ""){
          return;
        };
       localStorage.setItem("note7", comment)
      });
   
  });
  // ------------------------------------------------------------on click local storage set note in proper chunk--------8
  $(document).ready(function(){
    $("#saveBtn").click(function(){
        var comment = $.trim($("#hrChunk8").val());
        if(comment === ""){
          return;
        };
       localStorage.setItem("note8", comment)
      });
   
  });