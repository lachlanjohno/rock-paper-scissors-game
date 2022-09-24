const options = document.querySelector("#options");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const chatLog = document.querySelector(".chat-log");
const userTallyLog = document.querySelector(".user-tally");
const computerTallyLog = document.querySelector(".computer-tally");
let computerWins = 0;
let userWins = 0;
let rounds = 0;
let lastUserOption = "";
let userTally = 0;
let computerTally = 0;
let gameOver = false;

window.onload = () => {
  let userChoice;
  let computerChoice;

  rock.addEventListener("click", function (e) {
    if (gameOver === true) return;
    rounds += 1;
    userChoice = "rock";
    lastUserOption = "rock";
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode("");
    newLi.appendChild(liContent);
    chatLog.appendChild(newLi);
    liContent.textContent = "You picked rock!";
    newLi.style.color = "blue";

    calculateComputer();
  });

  paper.addEventListener("click", function (e) {
    if (gameOver === true) return;
    rounds += 1;
    userChoice = "paper";
    lastUserOption = "paper";
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode("");
    newLi.appendChild(liContent);
    chatLog.appendChild(newLi);
    liContent.textContent = "You picked paper!";
    newLi.style.color = "blue";

    calculateComputer();
  });

  scissors.addEventListener("click", function (e) {
    if (gameOver === true) return;
    rounds += 1;
    userChoice = "scissors";
    lastUserOption = "scissors";
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode("");
    newLi.appendChild(liContent);
    chatLog.appendChild(newLi);
    liContent.textContent = "You picked scissors!";
    newLi.style.color = "blue";

    calculateComputer();
  });

  options.addEventListener("click", () => {
    if (gameOver) return;
    if (rounds === 3) {
      endGame();
    }

    function endGame() {
      gameOver = true;
      if (
        (userTally === 1 && computerTally === 1) ||
        (userTally === 0 && computerTally === 0)
      ) {
        const newLi = document.createElement("li");
        newLi.textContent = `You have tied the game! Game will restart in a moment.`;
        chatLog.appendChild(newLi);
      } else if (userTally >= 2 || computerTally === 0) {
        const newLi = document.createElement("li");
        newLi.textContent = `You have won the game! Game will restart in a moment.`;
        chatLog.appendChild(newLi);
        userWins = userWins + 1;
        userTallyLog.innerHTML = userWins;
        userTally = 0;
        computerTally = 0;
      } else if (userTally <= 3) {
        const newLi = document.createElement("li");
        newLi.textContent = `You have lost the game! Game will restart in a moment.`;
        chatLog.appendChild(newLi);
        computerWins = computerWins + 1;
        computerTallyLog.innerHTML = computerWins;
        userTally = 0;
        computerTally = 0;
      }

      setTimeout(() => {
        chatLog.textContent = "";
        rounds = 0;
        gameOver = false;
        userTally = 0;
      }, 2000);
    }
  });

  function calculateComputer() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
      computerChoice = "rock";
      const newLi = document.createElement("LI");
      const liContent = document.createTextNode("");
      newLi.appendChild(liContent);
      chatLog.appendChild(newLi);
      liContent.textContent = "Computer picked rock!";
      newLi.style.color = "red";
    } else if (randNum === 1) {
      computerChoice = "paper";
      const newLi = document.createElement("LI");
      const liContent = document.createTextNode("");
      newLi.appendChild(liContent);
      chatLog.appendChild(newLi);
      liContent.textContent = "Computer picked paper!";
      newLi.style.color = "red";
    } else if (randNum === 2) {
      computerChoice = "scissors";
      const newLi = document.createElement("LI");
      const liContent = document.createTextNode("");
      newLi.appendChild(liContent);
      chatLog.appendChild(newLi);
      liContent.textContent = "Computer picked scissors!";
      newLi.style.color = "red";
    }

    if (lastUserOption === "rock" && computerChoice === "rock") {
      const newLI = document.createElement("li");
      newLI.textContent = `You have tied this round`;
      chatLog.appendChild(newLI);
    } else if (lastUserOption === "rock" && computerChoice === "paper") {
      computerTally = computerTally + 1;
      const newLI = document.createElement("li");
      newLI.textContent = `You have lost this round`;
      chatLog.appendChild(newLI);
    } else if (lastUserOption === "rock" && computerChoice === "scissors") {
      userTally = userTally + 1;
      const newLI = document.createElement("li");
      newLI.textContent = `You have won this round`;
      chatLog.appendChild(newLI);
    } else if (lastUserOption === "paper" && computerChoice === "rock") {
      userTally = userTally + 1;
      const newLI = document.createElement("li");
      newLI.textContent = `You have won this round`;
      chatLog.appendChild(newLI);
    } else if (lastUserOption === "paper" && computerChoice === "paper") {
      const newLI = document.createElement("li");
      newLI.textContent = `You have tied this round`;
      chatLog.appendChild(newLI);
    } else if (lastUserOption === "paper" && computerChoice === "scissors") {
      computerTally = computerTally + 1;
      const newLI = document.createElement("li");
      newLI.textContent = `You have lost this round`;
      chatLog.appendChild(newLI);
    } else if (lastUserOption === "scissors" && computerChoice === "rock") {
      computerTally = computerTally + 1;
      const newLI = document.createElement("li");
      newLI.textContent = `You have lost this round`;
      chatLog.appendChild(newLI);
    } else if (lastUserOption === "scissors" && computerChoice === "paper") {
      userTally = userTally + 1;
      const newLI = document.createElement("li");
      newLI.textContent = `You have won this round`;
      chatLog.appendChild(newLI);
    } else if (lastUserOption === "scissors" && computerChoice === "scissors") {
      const newLI = document.createElement("li");
      newLI.textContent = `You have tied this round`;
      chatLog.appendChild(newLI);
    }
  }
};
