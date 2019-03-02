$(document).ready(function () {

    var questions = [{
        // [0]
        question: "In what year was the lightbulb invented?",
        choices: ["1870  1873  1876  1879  "],
        answer: "1879"
    },
    {
        // [1]
        question: "In what year was the telephone invented?",
        choices: ["1864  1876  1888  1900  "],
        answer: "1876"
    },
    {
        // [2]
        question: "In what year was the car invented?",
        choices: ["1885  1890  1895  1900  "],
        answer: "1885"
    },
    {
        // [3]
        question: "In what year was the internet invented?",
        choices: ["1980  1981  1982  1983  "],
        answer: "1983"
    },
    {
        // [4]
        question: "In what year was the television invented?",
        choices: ["1920  1927  1934  1941  "],
        answer: "1927"
    },
    {
        // [5]
        question: "In what year was the radio invented?",
        choices: ["1880  1895  1910  1925  "],
        answer: "1895"
    },
    {
        // [6]
        question: "In what year was the computer invented?",
        choices: ["1932  1934  1936  1938  "],
        answer: "1936"
    },
    {
        // [7]
        question: "In what year was the iPhone invented?",
        choices: ["2001  2003  2005  2007  "],
        answer: "2007"
    },
    {
        // [8]
        question: "In what year was the microwave invented?",
        choices: ["1926  1936  1946  1956  "],
        answer: "1946"
    },
    {
        // [9]
        question: "In what year was the camera invented?",
        choices: ["1812  1816  1820  1830  "],
        answer: "1816"
    }];

    var scoreCount = 0;

    var timerCount = 61;

    var intervalId;

    $("#startBtn").on("click", function () {
        timerCount = 61
        infoContainer.style.display = "none";

        function timerDisplay() {
            var timer = $("#timerContainer");
            timerContainer.style.display = "block";
            timer.html("<h3>Time Left: " + timerCount + " Seconds</h3> <hr>");

            clearInterval(intervalId);
            intervalId = setInterval(tic, 1000);

            function tic() {

                timerCount--;
                timer.html("<h3>Time Left: " + timerCount + " Seconds</h3><br><hr>");

                if (timerCount === 0) {

                    timerCount = 0;
                    clearInterval(intervalId);
                    scoreDisplay();
                }
            }
            tic();
        }
        timerDisplay();

        function quizDisplay() {
            var quiz = $("#quizBox");
            quizBox.style.display = "block";

            // Could not figure out how to turn this into a for loop
            $("#questionContainer0").html("<h2>" + questions[0].question + "</h2>");
            $("#choiceContainer0").html("<h2>" + questions[0].choices + "</h2>");

            $("#questionContainer1").html("<h2>" + questions[1].question + "</h2>");
            $("#choiceContainer1").html("<h2>" + questions[1].choices + "</h2>");

            $("#questionContainer2").html("<h2>" + questions[2].question + "</h2>");
            $("#choiceContainer2").html("<h2>" + questions[2].choices + "</h2>");

            $("#questionContainer3").html("<h2>" + questions[3].question + "</h2>");
            $("#choiceContainer3").html("<h2>" + questions[3].choices + "</h2>");

            $("#questionContainer4").html("<h2>" + questions[4].question + "</h2>");
            $("#choiceContainer4").html("<h2>" + questions[4].choices + "</h2>");

            $("#questionContainer5").html("<h2>" + questions[5].question + "</h2>");
            $("#choiceContainer5").html("<h2>" + questions[5].choices + "</h2>");

            $("#questionContainer6").html("<h2>" + questions[6].question + "</h2>");
            $("#choiceContainer6").html("<h2>" + questions[6].choices + "</h2>");

            $("#questionContainer7").html("<h2>" + questions[7].question + "</h2>");
            $("#choiceContainer7").html("<h2>" + questions[7].choices + "</h2>");

            $("#questionContainer8").html("<h2>" + questions[8].question + "</h2>");
            $("#choiceContainer8").html("<h2>" + questions[8].choices + "</h2>");

            $("#questionContainer9").html("<h2>" + questions[9].question + "</h2>");
            $("#choiceContainer9").html("<h2>" + questions[9].choices + "</h2>");

        }
        quizDisplay();

        function quizFunction() {
            

        }
        quizFunction();

        function scoreDisplay() {
            if (timerCount === 0) {
                quizBox.style.display = "none";
                timerContainer.style.display = "none";

                var score = $("#scoreContainer");
                scoreContainer.style.display = "block";
                score.html("<h2> Your Score: " + scoreCount + "</h2><br><hr>");

                var reset = $("#resetBtn");
                resetBtn.style.display = "block";

            }
        }
        scoreDisplay();

        function reset() {

            $("#reset").on("click", function () {
                infoContainer.style.display = "block";
                scoreContainer.style.display = "none";
                resetBtn.style.display = "none";
            });

        }
        reset();

    });

});