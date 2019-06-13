
var random_number = Math.floor((Math.random() * 120) + 19);

var button_number_1 = Math.floor((Math.random() * 12) + 1);
var button_number_2 = Math.floor((Math.random() * 12) + 1);
var button_number_3 = Math.floor((Math.random() * 12) + 1);
var button_number_4 = Math.floor((Math.random() * 12) + 1);

var score = 0;
var wins = 0;
var loses = 0;

$("#random_number").text(random_number);
$("#btn1").val(button_number_1);
$("#btn2").val(button_number_2);
$("#btn3").val(button_number_3);
$("#btn4").val(button_number_4);

$("#wins").text(wins);
$("#loses").text(loses);
$("#score").text(score);

$("#btn1").click(function(){
    console.log($("#btn1").val());
    score += parseInt($("#btn1").val());
    $("#score").text(score);
    checkwin();
});

$("#btn2").click(function(){
    console.log($("#btn2").val());
    score += parseInt($("#btn2").val());
    $("#score").text(score);
    checkwin();
});

$("#btn3").click(function(){
    console.log($("#btn3").val());
    score += parseInt($("#btn3").val());
    $("#score").text(score);
    checkwin();
});

$("#btn4").click(function(){
    console.log($("#btn4").val());
    score += parseInt($("#btn4").val());
    $("#score").text(score);
    checkwin();
});

function checkwin() {
    if (random_number < score) {
        loses++;
        reset_variables();
        $("#loses").text(loses);
        alert("Nice Try!");
    }
    if (random_number === score) {
        wins++;
        reset_variables();
        $("#wins").text(wins);
        alert("Good Job!");
    }
}

function reset_variables() {
    random_number = Math.floor((Math.random() * 120) + 19);
    button_number_1 = Math.floor((Math.random() * 12) + 1);
    button_number_2 = Math.floor((Math.random() * 12) + 1);
    button_number_3 = Math.floor((Math.random() * 12) + 1);
    button_number_4 = Math.floor((Math.random() * 12) + 1);
    score = 0;

    $("#random_number").text(random_number);
    $("#btn1").val(button_number_1);
    $("#btn2").val(button_number_2);
    $("#btn3").val(button_number_3);
    $("#btn4").val(button_number_4);
    $("#score").text(score);
}
