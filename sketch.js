const flock = [];

let alignSlider, cohesionSlider, separationSlider;
let s = 'The quick brown fox jumped over the lazy dog.';

function setup(){
    createCanvas(windowWidth-200,windowHeight-300);

    alignSlider = createSlider(0, 5 , 1, 0.1);
    cohesionSlider = createSlider(0, 5 , 1, 0.1);
    separationSlider = createSlider(0, 5 , 1, 0.1);
    
    
    for (let i = 0; i < 220; i++){
        flock.push(new Boid());
    }
}

function draw(){
    background(51);
    for (let boid of flock){
        boid.edges();
        boid.flock(flock);
        boid.show();
        boid.update();
    }
}