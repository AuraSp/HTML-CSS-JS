$(document).ready(function () {
    $("#interactive-button").on("click", function () {
        alert("Wow");
    });

    $("button").click(function () {
        $("div").animate({ left: '800px'});
    });


    $("#interactive").on("click", function () {
        alert("Wow");
    });
});