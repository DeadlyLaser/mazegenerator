class Cell {
    constructor(i, j, w) {
        this.mined = false;
        this.revealed = false;
        this.i = i;
        this.j = j;
        this.cellWidht = w;
        this.x = this.i * this.cellWidht;
        this.y = this.j * this.cellWidht;
        this.activeCell = false;
        //walls
        this.top = true
        this.right = true
        this.bot = true
        this.left = true
    }

    // draw the cell on the screen
    Show() {
        if (this.activeCell) {
            noStroke();
            fill(128);
            rect(this.x, this.y, this.cellWidht, this.cellWidht);
            stroke(0);
        }
        
        this.DrawWalls();
        
    }

    //set the current sell as actuve

    ActiveCell() {
        this.activeCell = true;
    }
    
    DrawWalls(){
        if(this.top)
            line(this.x, this.y, this.x + this.cellWidht, this.y);
        if (this.right)
            line(this.x + this.cellWidht, this.y, this.x + this.cellWidht, this.y + this.cellWidht);
        if (this.bot)
            line(this.x + this.cellWidht, this.y + this.cellWidht, this.x, this.y + this.cellWidht);
        if (this.left)
            line(this.x, this.y + this.cellWidht, this.x, this.y);
    }
}