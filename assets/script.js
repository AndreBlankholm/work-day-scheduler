var saveBtn = document.querySelector(".saveBtn");


$(document).ready(function () {
  var date = moment().format("dddd MMMM Do");
  $("#currentDay").text(date);

  function currentTime() {

    var current = moment().hours();
    
    var time = $(".time-block");
    time.each(function () {
      var hour = parseInt($(this).attr("id"));
      if (hour === current) {
        $(this).children(".col-10").attr("class", "present col-10 description");
      } else if (current > hour) {
        $(this).children(".col-10").attr("class", "past col-10 description");
      } else {
        $(this).children(".col-10").attr("class", "future col-10 description");
      }
    });
  }

  currentTime();

});

