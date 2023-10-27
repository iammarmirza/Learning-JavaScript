const IMAGE_URL = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]
const LADDERS = {
    3 : 7,
    10 : 14,
    17 : 22,
    21 : 26,
    30 : 35
}

const SNAKES = {
    8 : 2,
    16 : 6,
    23 : 15,
    28 : 18,
    33 : 25
}

const NUMBERS = [
    [36, 35, 34, 33, 32, 31],
    [25, 26, 27, 28, 29, 30],
    [24, 23, 22, 21, 20, 19],
    [13, 14, 15, 16, 17, 18],
    [12, 11, 10, 9, 8, 7],
    [1, 2, 3, 4, 5, 6]
];

function createBoard() {
    const div = document.querySelector('.parent-div')

    for (let i = 0; i < NUMBERS.length; i++) {
        const rowDiv = document.createElement('div')
        rowDiv.classList.add('rows')
        for (let j = 0; j < NUMBERS[i].length; j++) {
            const count = NUMBERS[i][j];
            const boardDiv = document.createElement('div')
            boardDiv.classList.add('buttons')
            boardDiv.setAttribute('data-count', count)
            boardDiv.innerHTML = count
            if (LADDERS[count]) {
                const ladderSpan = document.createElement('span');
                ladderSpan.setAttribute('class', 'ladder')
                ladderSpan.innerHTML = "🚪"
                boardDiv.appendChild(ladderSpan)
            }
            if (SNAKES[count]) {
                const snakeSpan = document.createElement('span');
                snakeSpan.setAttribute('class', 'snakes')
                snakeSpan.innerHTML = "🐍"
                boardDiv.appendChild(snakeSpan)
            }
            rowDiv.appendChild(boardDiv)
        }
        div.appendChild(rowDiv)
    }
}
window.addEventListener('load', createBoard)

function rollDice() {
    const result = document.querySelector('#dice-count')
    const randomNumber = Math.floor(Math.random() * 6) + 1
    result.innerHTML = "You rolled " + randomNumber
    dice.style.backgroundImage = `url(Images/${IMAGE_URL[randomNumber - 1]})`
    dice.innerHTML = ""
    const isGameActive = document.querySelector(`.active`)
    if (randomNumber === 6 && !isGameActive) {
        alert("Game Begins")
        startGame()
    } else {
        continueGame(randomNumber)
    }
}
const dice = document.getElementById('dice')
dice.addEventListener('click', rollDice)

function startGame() {
    const blockToBeActive = document.querySelector(`[data-count='1']`)
    blockToBeActive.classList.add('active')
}

function continueGame(diceValue) {
    const activeBlock = document.querySelector('.active');
    const activeNumber = Number(activeBlock.dataset.count);
    let newPosition = activeNumber + diceValue;

    if (LADDERS[newPosition]) {
        const ladderEnd = LADDERS[newPosition]
        alert(`You've found a ladder! Climbing from ${newPosition} to ${ladderEnd}`);
        newPosition = ladderEnd;
    }
    if (SNAKES[newPosition]) {
        const snakesEnd = SNAKES[newPosition]
        alert(`You got bit by a snake! Descending from ${newPosition} to ${snakesEnd}`)
        newPosition = snakesEnd;
    }

    if (newPosition <= 36) {
        activeBlock.classList.remove('active');
        const newActiveBlock = document.querySelector(`[data-count='${newPosition}']`);
        newActiveBlock.classList.add('active');
    }

    if (newPosition === 36) {
        endGame();
    }
}

function endGame() {
    alert('Congratulations, You won the game.')
}
