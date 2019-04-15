const flock = [];
const obsts = [];
let total = 0; 

let alignSlider, cohesionSlider, separationSlider;

function setup(){
    createCanvas(windowWidth-200,windowHeight-300);

    alignSlider = createSlider(0, 2 , 1, 0.5);
    cohesionSlider = createSlider(0, 2 , 1, 0.5);
    separationSlider = createSlider(0, 2 , 1, 0.5);
    
    for (let i = 0; i < 120; i++){
        flock.push(new Boid());
    }
}

function draw(){
    background(51);

    for (let boid of flock){
        boid.avoidEdges();
        boid.applyRules(flock);
        boid.updateBoids();
        boid.showBoid();
        if(obsts.length>0){
            boid.avoidObsts(obsts);
        }
    }

    for(let obst of obsts){
        obst.showObst();
    }
}

function mouseClicked() {
    for (let boid of flock){
        let distance = dist(mouseX, mouseY, boid.position.x, boid.position.y)

        if (distance < (boid.perception)){
            total = 1;
        }
    }    

    if(total == 0){
        obsts.push(new Obstacle(mouseX, mouseY, flock));
    }else{
        total = 0;
    }
    
}

function mouseDragged() {
    for (let boid of flock){
        let distance = dist(mouseX, mouseY, boid.position.x, boid.position.y)
        if (distance < (boid.perception)){
            total = 1;
        }
    }    

    if(total == 0){
        obsts.push(new Obstacle(mouseX, mouseY, flock));
    }else{
        total = 0;
    }
}
