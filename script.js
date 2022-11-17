// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".guess").value = 23;
// intiliazation of vairbles
let number = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let high_score = score;
final_msg = "";

// scorecheck function which is check button s' function
const scorecheck = function () {
  number = Number(document.querySelector(".guess").value);
  if (number === secretNumber) {
    final_msg = `Correct guess you have won (●'◡'●) , your score is ${score}`;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    if (score > high_score) {
      high_score = score;
    }
  }
  if (!number) {
    final_msg = "NO NUMBER";
  } else if (number !== secretNumber) {
    if (score === 1) {
      final_msg = `SORRY YOU HAVE LOST THE GAME ! DEFEATE LOSER`;
    } else {
      final_msg = `Sorry WRONG GUESS , Guess something ${
        number > secretNumber ? "lower" : "higher"
      }`;
    }
    score--;
  }

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = final_msg;
  document.querySelector(".highscore").textContent = high_score;
};

//playagain function defined click to play again resetting everything
const playagain = () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "GUESS AGAIN";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").textContent = "?";
};
//function calling after clicking on check button
document.querySelector(".check").addEventListener("click", scorecheck);
document.querySelector(".again").addEventListener("click", playagain);
