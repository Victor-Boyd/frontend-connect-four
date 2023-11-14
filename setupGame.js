// all of this code exists purely to avoid doing tons of repetative html by building the game grid for me


const gameGrid = document.getElementById('game-grid')
const startButton =  document.getElementById('start-button')

startButton.addEventListener('click', () => {setupGame()})

function setupGame() {
    for(let i = 0; i < 7 ; i++) {
        addButtons()
    }
    for(let i = 0; i < 42 ; i++) {
        addGameBoard()
    }
    startButton.disabled = true

}

function addButtons() {
    const button = document.createElement('button')
    button.className = 'drop-button'
    button.addEventListener('click', () => dropChecker())
    gameGrid.appendChild(button)
}

function addGameBoard() {
    const circleThingContainer = document.createElement('div')
    circleThingContainer.className = 'circle-thing-container'

    const circleThing = document.createElement('div')
    circleThing.className = 'circle-thing'
    circleThingContainer.appendChild(circleThing)

    gameGrid.appendChild(circleThingContainer)
}

function dropChecker() {
    console.log('lol')
}