// dice roller
function refreshPage() {
    var rndNum1 = Math.floor(Math.random() * 6) + 1;
    var rndNum2 = Math.floor(Math.random() * 6) + 1;

    var dice1 = "images/dice" + rndNum1 + ".png";
    var dice2 = "images/dice" + rndNum2 + ".png";

    document.querySelector("img.img1").setAttribute("src", dice1);
    document.querySelector("img.img2").setAttribute("src", dice2);

    if (rndNum1 === rndNum2) {
        document.querySelector("h1").textContent = "Draw!";
    } else if (rndNum1 > rndNum2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";
        p1Score++;
        var p1Sb = "Score: " + p1Score;
        document.querySelector("p.score1").innerHTML = p1Sb;
    } else {
        document.querySelector("h1").textContent = "Player 2 Wins!";
        p2Score++;
        var p2Sb = "Score: " + p2Score;
        document.querySelector("p.score2").innerHTML = p2Sb;
    }

}

var p1Score = 0;
var p2Score = 0;

const refreshBtn = document.querySelector("button");
refreshBtn.setAttribute("onclick", "refreshPage()");


