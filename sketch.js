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
let rows = 100;
let cols = 100;
let cellWidht = 50;
var canvasSizeX = cols * cellWidht + 10;
var canvasSizeY = rows * cellWidht + 10;
var currentCell;
var stack = [];



function setup() {
  frameRate(60);
  grid = Create2DArray(rows, cols);
  createCanvas(canvasSizeX, canvasSizeY);
  background(153);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new Cell(i, j, cellWidht);
    }
  }
  currentCell = grid[0][0];
}


function draw() {
  //draw the grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].Show();
    }
  }

  // generate maze
  currentCell.visited = true;
  currentCell.LightUp();

  nextCell = currentCell.NearCells();

  if (nextCell) {
    stack.push(currentCell)
    currentCell.RemoveWalls(currentCell, nextCell);
    currentCell = nextCell;
  }
  else if (stack.length > 0) {
    currentCell = stack.pop();
  }


}


