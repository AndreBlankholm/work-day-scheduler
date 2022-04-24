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
                $(this).children(".col-10").attr("class", "present col-10 description")
            } else if (current > hour) {
                $(this).children(".col-10").attr("class", "past col-10 description")
            } else {
                $(this).children(".col-10").attr("class", "future col-10 description")
            }
        })
    };
    currentTime()

    //Local Storage for saving scheduled events
    saveButton.on("click", function(event) {
        event.preventDefault();
        var description = $(this).siblings(".col-10").val().replace(/[""]+/g, "");
        var parentEl = $(this).parent().attr("id");

        localStorage.setItem(parentEl, JSON.stringify(description));
    });

    // Replacing textareas with 'global' saved for that row
    // (/[""]+/g, "") uses Global Modifier to display everything that was previously saved
    $("#9 textarea").val(localStorage.getItem("9").replace(/[""]+/g, ""));
    $("#10 textarea").val(localStorage.getItem("10").replace(/[""]+/g, ""));
    $("#11 textarea").val(localStorage.getItem("11").replace(/[""]+/g, ""));
    $("#12 textarea").val(localStorage.getItem("12").replace(/[""]+/g, ""));
    $("#13 textarea").val(localStorage.getItem("13").replace(/[""]+/g, ""));
    $("#14 textarea").val(localStorage.getItem("14").replace(/[""]+/g, ""));
    $("#15 textarea").val(localStorage.getItem("15").replace(/[""]+/g, ""));
    $("#16 textarea").val(localStorage.getItem("16").replace(/[""]+/g, ""));
    $("#17 textarea").val(localStorage.getItem("17").replace(/[""]+/g, ""));
});


