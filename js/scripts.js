$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var yourAge = parseInt($("input#age").val());
    console.log(yourAge);
    var yourInterest = $("input#gender").val();
    console.log(yourInterest);


    if (yourAge < 30) {
      alert("end");
      $("#youngmale").show();
      $("#youngfemale").show();

    }

    });
  });
