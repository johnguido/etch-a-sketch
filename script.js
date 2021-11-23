let HEIGHT = 17;
let WIDTH = 17;
let RESET = true;

function createGrid(height, width){
    let squareSideSize = (gridSquareSize(height, width));
    if (height && width){
        for (let i = 0; i < height; i++){
            //create layer of squares for each row of height
            for (let k = 0; k < width; k++){
                createAndAddSquareToInnerContainer(HEIGHT, WIDTH);
            }
        }
    }
}

function createAndAddSquareToInnerContainer(height, width){
    const innerContainer = document.querySelector('.inner-container');
    const square = document.createElement('div');
    square.classList.add('grid');
    innerContainer.appendChild(square);
}

function gridSquareSize(height, width){
    let totalSquareFoot = 640000; //440k pixels
    let totalSquares = height * width;
    let pixelsInsideSquare = totalSquareFoot / totalSquares;
    let squareHeightandWidth = Math.sqrt(pixelsInsideSquare);
    return squareHeightandWidth;
}

function gridReset(){
    askForGridSize();
    removeAllSquares();
    createGrid(HEIGHT, WIDTH);
    asignGridSize();
    hoverEffect();
}

function asignGridSize(){
    let heightAndWidth = gridSquareSize(HEIGHT, WIDTH);
    let sizeWidth = 'width: ' + heightAndWidth + 'px';

    const squares = document.querySelectorAll('.grid');

    squares.forEach((grid) => {
        grid.setAttribute('style', sizeWidth);
    });
}

function removeAllSquares(){
    const squares = document.querySelectorAll('.grid');
    squares.forEach((grid) => {
        grid.remove();
    })
}

function askForGridSize(){
    while (true){
        let gridSize = prompt('Enter grid size max 100');
        if (gridSize < 101 && gridSize > 0){
            HEIGHT = gridSize;
            WIDTH = gridSize;
            return gridSize;
            break;
        }else continue;
    }
}

function createInitialGrid(){
    createGrid(HEIGHT, WIDTH);
    let heightAndWidth = gridSquareSize(HEIGHT, WIDTH);
    let sizeWidth = 'width: ' + heightAndWidth + 'px';
    const squares = document.querySelectorAll('.grid');
    squares.forEach((grid) => {
        grid.setAttribute('style', sizeWidth);
    });
}

function hoverEffect(){
    const squares = document.querySelectorAll('.grid');
    squares.forEach((grid) => {
        grid.addEventListener('mouseover', (e) => {
            grid.classList.add('grids');
        })
    })
    
}

function reset(){
    const reset = document.querySelector('.reset-button');
    reset.addEventListener('click', gridReset);
}

createInitialGrid();
hoverEffect();
reset();

$('#hey').find('button').on('click', function(){
    console.log('hey');
})


