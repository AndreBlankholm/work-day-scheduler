//make var for button
var saveBtn = document.querySelector(".saveBtn");

$(document).ready(function() {
  var date = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(date);

  function currentTime() {
    var current = moment().hours();

    var time = $(".time-block");
    
    time.each(function() {
      var hour = parseInt($(this).attr("id"));
      if (hour === current) {
        $(this).children(".col-10").attr("class", "present col-10 description");
      } else if (current > hour) {
        $(this).children(".col-10").attr("class", "past col-10 description");
      } else {
        $(this).children(".col-10").attr("class", "future col-10 description");
      }
    });
  };


  button.on("click", function(event) {
    event.preventDefault();
    var text = $(this).siblings(".col-10").val().replace(/[""]+/g, "");
    var parent = $(this).parent().attr("id");

    localStorage.setItem(parent, JSON.stringify(text));
  });

  $("#9").val(localStorage.getItem("9").replace(/[""]+/g, ""));
  $("#10").val(localStorage.getItem("10").replace(/[""]+/g, ""));
  $("#11").val(localStorage.getItem("11").replace(/[""]+/g, ""));
  $("#12").val(localStorage.getItem("12").replace(/[""]+/g, ""));
  $("#13").val(localStorage.getItem("13").replace(/[""]+/g, ""));
  $("#14").val(localStorage.getItem("14").replace(/[""]+/g, ""));
  $("#15").val(localStorage.getItem("15").replace(/[""]+/g, ""));
  $("#16").val(localStorage.getItem("16").replace(/[""]+/g, ""));
  $("#17").val(localStorage.getItem("17").replace(/[""]+/g, ""));

  currentTime();

});
