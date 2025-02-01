let userScore = 0;
let compScore = 0;

const choose = document.querySelectorAll(".choice");
const msgg = document.querySelector("#msg");
const userScoree=document.querySelector("#user-Score");
const compScoree=document.querySelector("#comp-Score");


const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);//generate random index number less than 3 floor value
    return options[randomIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoree.innerText=userScore;
        console.log("You win");
        msgg.innerText = `You win!! ${userChoice} beats ${compChoice}`;
        msgg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScoree.innerText=compScore;
        console.log("You lose");
        msgg.innerText = `You lost.${compChoice} beats ${userChoice}`;
        msgg.style.backgroundColor = "red";
    }
}


const drawGame = () => {
    console.log("Game was drawn");
    msgg.innerText = "Game draw.";
    msgg.style.backgroundColor = "#4C585B";
}


const playGame = (userChoice) => {
    console.log("User choice=", userChoice);
    const compChoice = generateCompChoice();
    console.log("Computer choice=", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choose.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});