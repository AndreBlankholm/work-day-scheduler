//saveBtn to button variable
var saveButton = $(".saveBtn");

// 
// displays current date
$(document).ready(function() {
    var currentDate = moment().format("dddd MMMM Do");
    $("#currentDay").text(currentDate);

    
    function currentTime() {
        var current = moment().hours()
        var time = $(".time-block");
        time.each(function() {
            console.log(this);
            var hour = parseInt($(this).attr("id"))
            if (hour === current) {
                $(this).children(".col-10").attr("class", "present col-10 description");
            } else if (current > hour) {
                $(this).children(".col-10").attr("class", "past col-10 description");
            } else {
                $(this).children(".col-10").attr("class", "future col-10 description");
            }
        });
    };

    currentTime()

    //Local Storage for saving scheduled events
    saveButton.on("click", function(event) {
        event.preventDefault();
        var description = $(this).siblings(".col-10").val().replace(parentEl);
        var parentEl = $(this).parent().attr("id");

        localStorage.setItem(parentEl, JSON.stringify(description));
    });

    
    // added json parse
    $("#9 textarea").val(JSON.parse(localStorage.getItem("9")));
    $("#10 textarea").val(JSON.parse(localStorage.getItem("10")));
    $("#11 textarea").val(JSON.parse(localStorage.getItem("11")));
    $("#12 textarea").val(JSON.parse(localStorage.getItem("12")));
    $("#13 textarea").val(JSON.parse(localStorage.getItem("13")));
    $("#14 textarea").val(JSON.parse(localStorage.getItem("14")));
    $("#15 textarea").val(JSON.parse(localStorage.getItem("15")));
    $("#16 textarea").val(JSON.parse(localStorage.getItem("16")));
    $("#17 textarea").val(JSON.parse(localStorage.getItem("17")));
});


