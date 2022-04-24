// Assign saveBtn to button variable
var saveButton = $(".saveBtn");

// .ready() Runs everything before user sees it
// Displays current date
$(document).ready(function() {
    var currentDate = moment().format("dddd MMMM Do");
    $("#currentDay").text(currentDate);

    // Time Block Colors: Past = Grey || Present = Red || Future = Green 
    function currentTime() {
        var current = moment().hours()
        var time = $(".time-block");
        time.each(function() {
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

    
    
    $("#9 textarea").val(localStorage.getItem("9"));
    $("#10 textarea").val(localStorage.getItem("10"));
    $("#11 textarea").val(localStorage.getItem("11"));
    $("#12 textarea").val(localStorage.getItem("12"));
    $("#13 textarea").val(localStorage.getItem("13"));
    $("#14 textarea").val(localStorage.getItem("14"));
    $("#15 textarea").val(localStorage.getItem("15"));
    $("#16 textarea").val(localStorage.getItem("16"));
    $("#17 textarea").val(localStorage.getItem("17"));
});


