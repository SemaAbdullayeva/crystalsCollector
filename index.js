function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


$(document).ready(function () {

    var Score = random(1, 100);
    $("#score").html(Score);

    var crystal1 = random(1, 10);
    var crystal2 = random(1, 10);
    var crystal3 = random(1, 10);
    var crystal4 = random(1, 10);
    var counter = 0;

    $("#crstl1").on("click", function () {
        counter += crystal1;
        WinLoose();
        $("#yourscore").text(counter);

    });

    $("#crstl2").on("click", function () {
        counter += crystal2;
        WinLoose();
        $("#yourscore").text(counter);


    });

    $("#crstl3").on("click", function () {
        counter += crystal3;
        WinLoose();
        $("#yourscore").text(counter);


    });

    $("#crstl4").on("click", function () {
        counter += crystal4;
        WinLoose();
        $("#yourscore").text(counter);


    });
    var wins = 0;
    var losses = 0;

    function WinLoose() {

        if (counter === Score) {
            wins += 1;
            $(win).text(wins);
            restart();

        } else if (counter > Score) {
            losses += 1;
            $(loss).text(losses);
            restart();
        }

    }

    function restart() {
        counter = 0;
        Score = random(1, 100);
        $("#score").html(Score);

        $("#yourscore").text(counter);

        crystal1 = randomNum(1, 10);
        crystal2 = randomNum(1, 10);
        crystal3 = randomNum(1, 10);
        crystal4 = randomNum(1, 10);


    }


});




