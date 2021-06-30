let content = ["Rock", "Paper", "Scissors"];

// computer's guess
function computerPlay()
{
    let ans;
    ans = Math.floor(Math.random()*content.length)
    return content[ans];
}

// each round 
let player_score = 0;
let computer_score = 0;
function playRound(playerSelection, computerSelection)
{
    if(playerSelection == computerSelection)
    {
        console.log(`Score : Computer - ${computer_score}  Player - ${player_score}`);
    }

    else if(playerSelection == "rock" && computerSelection == "paper")
    {
        computer_score ++;
        console.log(`Score : Computer - ${computer_score}  Player - ${player_score}`);
    }

    else if(playerSelection == "paper" && computerSelection == "rock")
    {
        player_score++;
        console.log(`Score : Computer - ${computer_score} Player - ${player_score}`);
    }

    else if(playerSelection == "rock" && computerSelection == "scissors")
    {
        player_score ++;
        console.log(`Score : Computer - ${computer_score} Player - ${player_score}`);
    }

    else if(playerSelection == "scissors" && computerSelection == "rock")
    {
        computer_score++;
        console.log(`Score : Computer - ${computer_score} Player - ${player_score}`);
    }

    else if(playerSelection == "paper" && computerSelection == "scissors")
    {
        computer_score++;
        console.log(`Score : Computer - ${computer_score} Player - ${player_score}`);
    }

    else if(playerSelection == "scissors" && computerSelection == "paper")
    {
        player_score ++;
        console.log(`Score : Computer - ${computer_score} Player - ${player_score}`);
    }
}

// Result to display winner
function winner(player_score, computer_score)
{
    if(player_score > computer_score)
    {
        console.log(`You Won!`);
    }

    else if(player_score < computer_score)
    {
        console.log("You lose!");
    }

    else
    {
        console.log("It's a Tie!!");
    }
}

// looping to play 5 times - driver code
function game()
{
    for(let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Please, Enter your guess : ");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = computerPlay();
        computerSelection = computerSelection.toLowerCase();
        playRound(playerSelection, computerSelection);
    }
    winner(player_score, computer_score);
}

game();

