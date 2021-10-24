let HEIGHT = 17;
let WIDTH = 17;

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

let heightAndWidth = gridSquareSize(HEIGHT, WIDTH);
let sizeWidth = 'width: ' + heightAndWidth + 'px';

const squares = document.querySelectorAll('.grid');

squares.forEach((grid) => {
    grid.setAttribute('style', sizeWidth);
});

squares.forEach((grid) => {
    grid.addEventListener('mouseover', (e) => {
        grid.classList.add('grids');
    })
})
