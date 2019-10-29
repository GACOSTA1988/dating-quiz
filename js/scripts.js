$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var yourAge = parseInt($("#age").val());
    console.log(yourAge);
    var yourInterest = $("#gender").val();
    console.log(yourInterest);


    if (yourAge < 30) {
      // alert("end");
      $("#youngmale").show();
      $("#youngfemale").show();
      return
    }
    if (yourInterest === "f") {
      $("#oldfemale").show();
      $("#youngfemale").show();
      return
    };

    });
  });
