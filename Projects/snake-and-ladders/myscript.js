const IMAGE_URL = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]
const LADDERS = {
    4: 14,
    8: 30,
    21: 42,
    28: 56,
    50 : 67,
    60 : 80,
    71 : 92,
    88 : 99,
}

const SNAKES = {
    22 : 10,
    34 : 6,
    62 : 18,
    48 : 26,
    85 : 24,
    91 : 56,
    97 : 2
}

const NUMBERS = [
    [100, 99, 98, 97, 96, 95, 94, 93, 92, 91],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [80, 79, 78, 77, 76, 75, 74, 73, 72, 71],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [60, 59, 58, 57, 56, 55, 54, 53, 52, 51],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [40, 39, 38, 37, 36, 35, 34, 33, 32, 31],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [20, 19, 18, 17, 16, 15, 14, 13, 12, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
    dice.style.backgroundImage = `url(Images/dice${randomNumber}.png)`
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

    if (newPosition <= 100) {
        activeBlock.classList.remove('active');
        const newActiveBlock = document.querySelector(`[data-count='${newPosition}']`);
        newActiveBlock.classList.add('active');
    }

    if (newPosition === 100) {
        endGame();
    }
}

function endGame() {
    alert('Congratulations, You won the game.')
}
