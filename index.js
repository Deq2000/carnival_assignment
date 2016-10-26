$(document).ready(function() {
    $("form").on('submit', function(event) {
        event.preventDefault();
        $("#Judgement").html("");
        var value1 = parseInt($('#myInput').val());
        var value2 = parseInt($('#myInput2').val());
        console.log(value1);
        console.log(value2);
        if (value2 >= value1) {
            $("#Judgement").html("Enter if you dare.");
        } else {
            $("#Judgement").html("BEGONE you feeble swine.");
        }
    });
});