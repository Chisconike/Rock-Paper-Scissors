// Start //

let btn1 = document.querySelector('.one');
let btn2 = document.querySelector('.two');
let btn3 = document.querySelector('.three');
let reset = document.querySelector('.reset');
let div = document.querySelector('.display')



let score = {
    wins: 0,
    losses: 0,
    ties: 0
}

// get the message form the local Storage 
// JSON. Parse convert the string to object.

// score = JSON.parse(localStorage.getItem('score'));


function check() {
    let computerMove;
    let rand = Math.floor(Math.random() * 6) + 1
    if (rand >= 1 && rand <= 2) {
        computerMove = '🪨';
    } else if (rand >= 3 && rand <= 4) {
        computerMove = '📄';
    } else if (rand >= 5 && rand <= 6) {
        computerMove = '✂️';
    }
    return computerMove;
}


function play(choice) {

    const computerMove = check();

    let result;

    // for Rock
    if (choice === '🪨') {
        if (computerMove === '🪨') {
            result = 'Tie 🪢.';
        } else if (computerMove === '📄') {
            result = 'Computer Win 😂.';
        } else if (computerMove === '✂️') {
            result = 'You win 🏆.';
        }

        // for Paper
    } else if (choice === '📄') {
        if (computerMove === '🪨') {
            result = 'You win 🏆.';
        } else if (computerMove === '📄') {
            result = 'Tie 🪢.';
        } else if (computerMove === '✂️') {
            result = 'Computer Win 😂.';
        }
        // for Scissors

    } else if (choice === '✂️') {
        if (computerMove === '🪨') {
            result = 'Computer Win 😂.';
        } else if (computerMove === '📄') {
            result = 'You win 🏆.';
        } else if (computerMove === '✂️') {
            result = 'Tie 🪢.';
        }
    }

    // for Scores
    if (result === 'You win 🏆.') {
        score.wins++;
    } else if (result === 'Computer Win 😂.') {
        score.losses++;
    } else if (result === 'Tie 🪢.') {
        score.ties++;
    }

    // Save data to local Storage
    // JSON.stringify convert the object to string

    // localStorage.setItem('score', JSON.stringify(score));



    // for Display

    div.innerHTML = `
    <p>${result}</p>
    <pre> You ${choice} - ${computerMove} Com </pre>
    <p>wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}</p>
`
}



// for Reset
function reload() {
    score.wins = 0;
    score.ties = 0;
    score.losses = 0;
    // for Display

    div.innerHTML = ``
}



// for Event Listeners
btn1.addEventListener('click', () => {
    play('🪨')

})

btn2.addEventListener('click', () => {
    play('📄')
})

btn3.addEventListener('click', () => {
    play('✂️')
})

reset.addEventListener('click', () => {
    reload()
})