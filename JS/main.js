
document.getElementById("playButton").addEventListener("click", startGame);

function startGame(){

    let playAgain = true;

    while(playAgain){
        let user = prompt("Choose anyone : Rock, Paper, Scissor:");

        user ? user = user.toLowerCase() : user?? 1 ?  alert("You Didn't Enter") : alert("You Didn't Enter");

        let computer = Math.floor(Math.random()*3+1);

        computer === 1 ? computer="rock": computer ===2 ? computer = "paper" : computer = "scissor";

        user == computer ? alert(`You: ${user}\nComputer: ${computer}\nIt's a Tie`) :
                user === "rock"? computer==="paper"? alert(`You: ${user}\nComputer: ${computer}\nComputer Won`) : alert(`You: ${user}\nComputer: ${computer}\nYou Won`) :
                user === "paper"? computer=== "scissor"? alert(`You: ${user}\nComputer: ${computer}\nComputer Won`): alert(`You: ${user}\nComputer: ${computer}\nYou Won`):
                computer === "rock"? alert(`You: ${user}\nComputer: ${computer}\nComputer Won`):alert(`You: ${user}\nComputer: ${computer}\nYou Won`);

        let playAgainConfirm = confirm("Do you want to play again?");

        if(!playAgainConfirm)
            playAgain = false;

    }

    alert("Thanks for Playing");

}