class Cell {
    constructor(i, j, w) {
        this.i = i;
        this.j = j;
        this.cellWidht = w;
        this.x = this.i * this.cellWidht;
        this.y = this.j * this.cellWidht;
        this.visited = false;

        //walls
        this.top = true
        this.right = true
        this.bot = true
        this.left = true
    }

    // draw the cell on the screen
    Show() {
        stroke(255);
        strokeWeight(4);
        this.DrawWalls();
        if (this.visited) {
            noStroke();
            fill(50);
            rect(this.x, this.y, this.cellWidht, this.cellWidht);
        }

    }
    
    //picks randomly between the unvisited near cells and return it

    NearCells() {
        let nc = [];
        let topC;
        let rightC;
        let botC;
        let leftC;

        if (this.j > 0)
            topC = grid[this.i][this.j - 1];

        if (this.i < cols-1)
            rightC = grid[this.i + 1][this.j];

        if (this.j < rows-1)
            botC = grid[this.i][this.j + 1];

        if (this.i > 0)
            leftC = grid[this.i - 1][this.j];


        if (topC && !topC.visited) {
            nc.push(topC);
        }
        if (rightC && !rightC.visited) {
            nc.push(rightC);
        }
        if (botC && !botC.visited) {
            nc.push(botC);
        }
        if (leftC && !leftC.visited) {
            nc.push(leftC);
        }

    let r = floor(random(0,nc.length));

    if(nc.length>0){
        return nc[r];
    }
    

    }



    DrawWalls() {
        if (this.top)
            line(this.x, this.y, this.x + this.cellWidht, this.y);
        if (this.right)
            line(this.x + this.cellWidht, this.y, this.x + this.cellWidht, this.y + this.cellWidht);
        if (this.bot)
            line(this.x + this.cellWidht, this.y + this.cellWidht, this.x, this.y + this.cellWidht);
        if (this.left)
            line(this.x, this.y + this.cellWidht, this.x, this.y);
    }

    RemoveWalls(a,b){
        let x = a.i-b.i;
        let y = a.j-b.j;
        
        // next cell is above
        if (y == 1){
            a.top = false;
            b.bot = false;
        }
        //next cell is below
        if (y == -1){
            a.bo=false;
            b.top=false;
        }
        //next cell is right
        if (x==-1){
            a.right=false;
            b.left=false;
        }
        //next cell is left
        if(x==1){
            a.left=false;
            b.right=false;
        }

    }

    LightUp(){
        noStroke();
        fill('rgba(0,255,0, 0.25)');
        rect(this.x, this.y, this.cellWidht, this.cellWidht);

    }
}

