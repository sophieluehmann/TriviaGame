    //create an array of questions
var questions = [
    {
    question: 'How many seconds are in an hour?'  ,
    options: ["5000", "2500", "3600"],
    correctAnswer: "3600",
    },
    {
    question: 'People who suffer from anatidaephobia are afraid of?'  ,
    options: ["Pancakes", "Ducks", "Chairs"],
    correctAnswer: "Ducks",
    },
    {
    question: 'What is the charge of a proton?'  ,
    options: ["+1", "-1", "0 (neutral)"],
    correctAnswer: "+1",
    },
    {
    question: 'What is the unit of measure for sound?',
    options: ["Decibel", "Ampere", "Volt"],
    correctAnswer: "Decibel",
    }   
];


for (var i=0; i<questions.length; i++){
    $(".container").append("<h3>" + questions[i].question +"</h3>");
    for (var j = 0; j<questions[i].options.length; j++) {
        $(".container").append("<input type='radio' name='question" + i + "' value=" +  questions[i].options[j] + ">" + questions[i].options[j]);
    };
};

var correct = 0;
var incorrect = 0;

$(document).ready(function(){
    $(".container").hide();
    $("#submit").hide();
    $("#start").on("click", start);
    $("h4").hide();
})

var time = 20;
var intervalId;
var clockRunning = false;

function start() {
    if (clockRunning === false) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
    
};


function count() {
    time--;
    $("#time-left").text(time);
    if (time == 0) {
        endFunction();
    };
};


$("#start").click(function(){
    $(".container").show();
    $("#start").hide();
    $("#submit").show();
    $("h4").show();
});

$("#submit").click(function() {
    clearInterval(intervalId);
    endFunction();
});

function endFunction (){
    $("#time-left").hide();
    $("form").hide();
    $("button").hide();
    
    
    //this would be a lot simpler with a for loop
    if ($("input[name=question0]:checked").val() === questions[0].correctAnswer) {
        correct++;
    } else {
        incorrect++;
    }
    if ($("input[name=question1]:checked").val() === questions[1].correctAnswer) {
        correct++;
    } else {
        incorrect++;
    }
    if ($("input[name=question2]:checked").val() === questions[2].correctAnswer) {
        correct++;
    } else {
        incorrect++;
    }
    if ($("input[name=question3]:checked").val() === questions[3].correctAnswer) {
        correct++;
    } else {
        incorrect++;
    }
    
    $("body").append("You got " + correct + " correct and " + incorrect + " incorrect.");
};

      


