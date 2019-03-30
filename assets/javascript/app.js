//create an array of questions
var answers = [
    ['a'],
    ['b'],
    ['c']
];

var totalQuestions = answers.length;

// zero?
var correct = 0;
var incorrect = 0;

$(document).ready(function(){
    $("form").hide();
    $("#submit").hide();
    $("#start").on("click", start);
    $("h4").hide();
})

var time = 10;
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
        $("#time-left").hide();
        $("form").hide();
        $("button").hide();
        $("body").append("You got " + correct + " correct and " + incorrect + " incorrect.");
        $("h4").hide();
    };
};


$("#start").click(function(){
    $("form").show();
    $("#start").hide();
    $("#submit").show();
    $("h4").show();
});

$("#submit").click(function(){
    $("#time-left").hide();
    $("form").hide();
    $("button").hide();
    $("body").append("You got " + correct + " correct and " + incorrect + " incorrect.");
});


/*when 'done' button is clicked, execute function
$("#submit").click(function(){
    
    var test = document.forms[0];
   
    for (var i = 0; i < test.length; i++){
        //var value = $("#option").attr("value");
        if (test[i].checked) {
            
            console.log(test[i]);
        }
    }
});
*/

/*<div class="container">
    <form>
            <div id="question1">
                <p>What is the first letter of the alphabet?</p>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question1" id="exampleRadios1" value="a">
                        <label class="form-check-label" for="exampleRadios1">
                             </label>
                    </div>
                
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question1" id="exampleRadios2" value="b">
                        <label class="form-check-label" for="exampleRadios2">
                        b
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name=" " id="exampleRadios3" value="c">
                        <label class="form-check-label" for="exampleRadios3">
                        c
                        </label>
                    </div>
            </div>
    </form>
</div>
*/

var wins = 0;
var loss = 0;

/*$("#submit").on("click", function{
    if(document.forms.question1)
})*/


