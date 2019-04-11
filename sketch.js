const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup(){
    createCanvas(windowWidth-200,windowHeight-300);

    alignSlider = createSlider(0, 2 , 1, 0.5);
    cohesionSlider = createSlider(0, 2 , 1, 0.5);
    separationSlider = createSlider(0, 2 , 1, 0.5);
    
    for (let i = 0; i < 100; i++){
        flock.push(new Boid());
    }
}

function draw(){
    background(51);

    for (let boid of flock){
        boid.setEdges();
        boid.applyRules(flock);
        boid.updateBoids();
        boid.showBoid();
    }
}

function mouseClicked() {
    if(flock.length<145){
        for(let i = 0; i < 5; i++){
            flock.push(new Boid());
        }
    }
}
