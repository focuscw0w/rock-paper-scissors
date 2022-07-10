let playerChoice = '';
let computerChoice = '';

let allSymbols = ['rock', 'paper', 'scissors']

let symbolButtons = document.querySelectorAll('.symbol-btn');
symbolButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let clickedButton = event.target;
        chooseSymbol(clickedButton);
    });
});

function chooseSymbol(playerClick) {
    /* PLAYER */
    let symbolName = playerClick.innerText;
    playerChoice = symbolName;

    /* COMPUTER */
    /*let computerChoices = allSymbols.filter(e => e!== playerChoice)*/
    let getComputerChoice = Math.floor(Math.random() * allSymbols.length);
    computerChoice = allSymbols[getComputerChoice];

    /*let getComputerChoice = Math.floor(Math.random() * computerChoices.length);
    computerChoice = computerChoices[getComputerChoice];*/

    gameStart(playerChoice, computerChoice);
}

function gameStart(player, computer) {
    let playerHand = document.querySelector('.player-hand');
    let computerHand = document.querySelector('.computer-hand');
    
    playerHand.src = `images/${player}.png`;
    computerHand.src = `images/${computer}.png`;
    
    checkWinner(player, computer)
}

function checkWinner(player, computer) {
    const playerCounter = document.querySelector('.player-counter');
    const computerCounter = document.querySelector('.computer-counter');
   
    let playerScore = playerCounter.innerText;
    let computerScore = computerCounter.innerText;

    let gameInfo = document.querySelector('.game-info-heading');

    if(player == 'rock') {
        if(computer == 'paper') {
            computerScore++;
            computerCounter.innerText = computerScore;
            gameInfo.innerHTML = `<strong>Prehral si!</strong>`
        }
        if(computer == 'scissors') {
            playerScore++;
            playerCounter.innerText = playerScore;
            gameInfo.innerHTML = `<strong>Vyhral si!</strong>`
        }
        if(computer == 'rock') {
            gameInfo.innerHTML = `<strong>Nevyhral nikto</strong>`
        }
    }
    if(player == 'paper') {
        if(computer == 'rock') {
            playerScore++;
            playerCounter.innerText = playerScore;
            gameInfo.innerHTML = `<strong>Vyhral si!</strong>`
        }
        if(computer == 'scissors') {
            computerScore++;
            computerCounter.innerText = computerScore;
            gameInfo.innerHTML = `<strong>Prehral si!</strong>`
        }
        if(computer == 'paper') {
            gameInfo.innerHTML = `<strong>Nevyhral nikto</strong>`
        }
    }
    if(player == 'scissors') {
        if(computer == 'rock') {
            computerScore++;
            computerCounter.innerText = computerScore;
            gameInfo.innerHTML = `<strong>Prehral si!</strong>`
        }
        if(computer == 'paper') {
            playerScore++;
            playerCounter.innerText = playerScore;
            gameInfo.innerHTML = `<strong>Vyhral si!</strong>`
        }
        if(computer == 'scissors') {
            gameInfo.innerHTML = `<strong>Nevyhral nikto</strong>`
        }
    }
}

