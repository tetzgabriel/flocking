class Obstacle {
    constructor(coordX, coordY){
        let x = coordX;
        let y = coordY;

        this.obstSize = 10;
        this.position = createVector(x, y);    
    }

    showObst(){
        strokeWeight(this.obstSize);
        stroke(255);
        point(this.position.x, this.position.y)
    }
}