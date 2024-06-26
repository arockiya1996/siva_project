
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {  // Changed &gt; to >
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });

    function newDate() {
        return new Date().getFullYear();
    }

    // Corrected the way of setting innerHTML on load
    window.onload = function() {
        document.getElementById("autodate").innerHTML = newDate(); // Removed unnecessary '+' before newDate()
    };
});
