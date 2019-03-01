$(document).ready(function () {

    var questions = [{
        // [0]
        question: "In what year was the lightbulb invented?",
        choices: [1870, 1873, 1876, 1879],
        answer: 1879
    },
    {
        // [1]
        question: "In what year was the telephone invented?",
        choices: [1864, 1876, 1888, 1900],
        answer: 1876
    },
    {
        // [2]
        question: "In what year was the car invented?",
        choices: [1885, 1890, 1895, 1900],
        answer: 1885
    },
    {
        // [3]
        question: "In what year was the internet invented?",
        choices: [1980, 1981, 1982, 1983],
        answer: 1983
    },
    {
        // [4]
        question: "In what year was the television invented?",
        choices: [1920, 1927, 1934, 1941],
        answer: 1927
    },
    {
        // [5]
        question: "In what year was the radio invented?",
        choices: [1880, 1895, 1910, 1925],
        answer: 1895
    },
    {
        // [6]
        question: "In what year was the computer invented?",
        choices: [1932, 1934, 1936, 1938],
        answer: 1936
    },
    {
        // [7]
        question: "In what year was the iPhone invented?",
        choices: [2001, 2003, 2005, 2007],
        answer: 2007
    },
    {
        // [8]
        question: "In what year was the microwave invented?",
        choices: [1926, 1936, 1946, 1956],
        answer: 1946
    },
    {
        // [9]
        question: "In what year was the camera invented?",
        choices: [1812, 1816, 1820, 1830],
        answer: 1816
    }];

    var scoreCount = 0;

    var timerCount = 30;

    $("#startBtn").on("click", function () {
        infoContainer.style.display = "none";

        function timerDisplay() {
            var timer = $("#timerContainer");
            timerContainer.style.display = "block";
            timer.html("<h3>Time Left: " + timerCount + " Seconds</h3> <hr>");

            setInterval(1000);
            function tic() {
                timerCount--;
            }
            tic();
        }
        timerDisplay();

        function quizDisplay() {
            var question = $("#questionContainer");
            questionContainer.style.display = "block";

            var choices = $("#choiceContainer")
            choiceContainer.style.display = "block";
            

            for (i = 0; i < questions.length; i++) {
                question.html("<h2>" + questions[i].question + "</h2>");
                choices.html("<h2>" + questions[i].choices + "</h2>");

            }
        }
        quizDisplay();

    });

});