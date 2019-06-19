//function to create a 2d array for the grid

function Create2DArray(rows, cols) {
  let arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function generateMaze() {
  // generate maze
  do {
    var g = 0;
    g++;
    currentCell.visited = true;

    nextCell = currentCell.NearCells();

    if (nextCell) {
      stack.push(currentCell)
      currentCell.RemoveWalls(currentCell, nextCell);
      currentCell = nextCell;
    }
    else if (stack.length > 0) {
      currentCell = stack.pop();
    }
  } while (stack.length>0 || currentCell.NearCells());
}



//global variables
let grid;
let rows = 20;
let cols = 20;
let cellWidht = 20;
var canvasSizeX = cols * cellWidht + 10;
var canvasSizeY = rows * cellWidht + 10;
var currentCell;
var stack = [];



function setup() {
  frameRate(10);
  grid = Create2DArray(rows, cols);
  createCanvas(canvasSizeX, canvasSizeY);
  background(153);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new Cell(i, j, cellWidht);
    }
  }
  currentCell = grid[0][0];
  generateMaze();
}


function draw() {
  //draw the grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].Show();
    }
  }
}


