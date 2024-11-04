//Create your own game here

document.getElementById("startButton").addEventListener("click", startGame); //what a niffy thing to get the game to begin

function startGame() {
    alert("Welcome to My Number Sequence Game!");

    let sequence = [];
    let level = 1;      // starts at here and progress
    const winningLevel = 5; // just where I want the game to end

    while (true) {
        const nextNumber = Math.floor(Math.random() * 10);
        sequence.push(nextNumber);
        alert(`Level ${level}\nRemember this sequence: ${sequence.join(" ")}`);
        const playerSequence = prompt("Enter the sequence:").split(" ").map(Number);

        if (JSON.stringify(sequence) === JSON.stringify(playerSequence)) {
            if (level === winningLevel) {
                alert(`Congratulations! You've reached level ${winningLevel} and won the game!🏆`); // You've won a Cookie
                break;
            } else {
                level++;
                alert("Correct! Moving to the next level."); 
            }
        } else {
            alert(`Wrong sequence! Game over. You reached level ${level}.`); //No cookies for you today
            break;
        }

        if (!confirm("Do you want to play again?")) break;      //Can always change this in the future if need be.
    }
}
