//function to create a 2d array for the grid

function Create2DArray(rows, cols) {
  let arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

//global variables
let grid;
let rows = 10;
let cols = 10;
let cellWidht = 50;
var canvasSizeX = cols * cellWidht + 10;
var canvasSizeY = rows * cellWidht + 10;



function setup() {
  grid = Create2DArray(rows, cols);
  createCanvas(canvasSizeX, canvasSizeY);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, cellWidht);

    }
  }
}


function draw() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      //grid[i][j].ActiveCell();
      grid[i][j].Show();
    }
  }


}


