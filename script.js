function createGrid(height, width){
    let squareSideSize = (gridSquareSize(height, width));
    if (height && width){
        for (let i = 0; i < height; i++){
            //create layer of squares for each row of height
            for (let k = 0; k < width; k++){
                createAndAddSquareToInnerContainer(5, 5, squareSideSize);
            }
        }
    }
}

function createAndAddSquareToInnerContainer(height, width, squareSideSize){
    const innerContainer = document.querySelector('.inner-container');
    const square = document.createElement('div');
    square.setAttribute('id', 'grid');
    
    innerContainer.appendChild(square);
}

function gridSquareSize(height, width){
    let totalSquareFoot = 440000; //440k pixels
    let totalSquares = height * width;
    let pixelsInsideSquare = totalSquareFoot / totalSquares;
    let squareHeightandWidth = Math.sqrt(pixelsInsideSquare);
    return squareHeightandWidth;
}

createGrid(5, 5);
