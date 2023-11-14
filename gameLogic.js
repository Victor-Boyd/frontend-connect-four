
let gameState = {
    column0: 5,
    column1: 5,
    column2: 5,
    column3: 5,
    column4: 5,
    column5: 5,
    column6: 5, 
    p1Turn: true
}

function dropChecker(columnIndex, rowIndex) {
    rowIndex = gameState[`column` + columnIndex]
    gameState[`column` + columnIndex]--
    let elementToChange = document.getElementById(`circle-thing-row${rowIndex}-column${columnIndex}`)
    console.log(elementToChange)
    if (gameState.p1Turn === true) {
        elementToChange.style.backgroundColor = 'blue'
        gameState.p1Turn = false
    } else {
        elementToChange.style.backgroundColor = 'red'
        gameState.p1Turn = true
        console.log('what')
    }
}

function checkForFull(columnIndex) {
    if (gameState[`column` + columnIndex] < 0) {
        let disableMe = document.getElementById(`drop-button-${columnIndex}`)
        console.log(disableMe)
        disableMe.disabled = true
    }
}


