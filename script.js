let HEIGHT = 16;
let WIDTH = 16;

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

createGrid(HEIGHT, WIDTH);

const squares = document.querySelectorAll('.grid');

let heightAndWidth = gridSquareSize(HEIGHT, WIDTH);
let size = 'width: ' + heightAndWidth + 'px';

squares.forEach((grid) => {
    grid.setAttribute('style', size);
});
