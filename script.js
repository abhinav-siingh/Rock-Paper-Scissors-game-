  let userScore = 0;
  let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper" ,"scissors"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
};
const drawGame = () => {
    console.log("game is draw");
    msg.innerText="game is draw ! play again 🎃";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `you won 🏆 your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `you lost 😞,${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

 const playGame = (userChoice) => {
    //generate comp choice
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
    

     if (userChoice === compChoice) {
        drawGame();
     }else{
        let userWin = true;
        if(userChoice==="rock") {
            //scissior,paper
            userWin = compChoice ==="paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
     }
 };
 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userChoice = choice.getAttribute("id");
         playGame(userChoice);
   });
 }) ;