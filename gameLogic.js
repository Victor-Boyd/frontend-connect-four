
let gameState = {
    column0: 0,
    column1: 0,
    column2: 0,
    column3: 0,
    column4: 0,
    column5: 0,
    column6: 0, 
    p1Turn: true
}

function dropChecker(columnIndex) {
    gameState[`column` + columnIndex]++
    console.log(gameState[`column` + columnIndex], columnIndex)
    console.log(gameState)
    if (gameState.p1Turn === true) {
        gameState.p1Turn = false
    } else {
        gameState.p1Turn = true
        console.log('what')
    }
}

function checkForFull(columnIndex) {
    if (gameState[`column` + columnIndex] >= 6) {
        let disableMe = document.getElementById(`drop-button-${columnIndex}`)
        console.log(disableMe)
        disableMe.disabled = true
    }
}
