const gameGrid = document.getElementById('game-grid');
const startButton = document.getElementById('start-button');
const columns = 7; // Number of columns
const rows = 6; // Number of rows

startButton.addEventListener('click', () => setupGame());

function setupGame() {
    for (let col = 0; col < columns; col++) {
        addButtons(col); // Add buttons for each column
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            addGameBoard(row, col); // Add game board cells with row and column number
        }
    }
    startButton.disabled = true;
}

function addButtons(columnIndex) {
    const button = document.createElement('button');
    button.className = 'drop-button';
    button.dataset.column = columnIndex; // Store the column index
    button.addEventListener('click', () => dropChecker(columnIndex));
    gameGrid.appendChild(button);
}

function addGameBoard(rowIndex, columnIndex) {
    const circleThingContainer = document.createElement('div');
    circleThingContainer.className = 'circle-thing-container';
    circleThingContainer.dataset.row = rowIndex;     // Store the row index
    circleThingContainer.dataset.column = columnIndex; // Store the column index

    const circleThing = document.createElement('div');
    circleThing.className = 'circle-thing';
    circleThingContainer.appendChild(circleThing);

    gameGrid.appendChild(circleThingContainer);
}


