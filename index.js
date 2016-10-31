$(document).ready(function() {
    $("form").on('submit', function(event) {
        event.preventDefault();
        $("#Judgement").html("");
        var value1 = parseInt($('#myInput').val());
        var value2 = parseInt($('#myInput2').val());
        console.log(value1);
        console.log(value2);
        var UB01 = document.getElementById("myInput3");
        var UB02 = document.getElementById("myInput4");
        if (value2 >= value1) {
            $("#Judgement").html("Enter if you dare.");
        } else {
            if (UB01.checked == true && UB02.checked == true) {
                $("#Judgement").html("BEGONE you feeble swine.");
            } else if (UB01.checked == true) {
                $("#Judgement").html("You lucky plebe...");
            } else {
                $("#Judgement").html("BEGONE you feeble swine.");
            }
        }
    });
});