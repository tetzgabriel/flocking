const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup(){
    createCanvas(windowWidth-200,windowHeight-300);

    alignSlider = createSlider(0, 5 , 1, 0.1);
    cohesionSlider = createSlider(0, 5 , 1, 0.1);
    separationSlider = createSlider(0, 5 , 1, 0.1);
    
    
    // for (let i = 0; i < 220; i++){
    //     flock.push(new Boid());
    // }
}

function draw(){
    background(51);
    
    if (flock.length<=10){
        flock.push(new Boid());
    }

    for (let boid of flock){
        boid.edges();
        boid.flock(flock);
        boid.show();
        boid.update();
    }
}

function mouseClicked() {
    if(flock.length<145){
        for(let i = 0; i < 5; i++){
            flock.push(new Boid());
        }
    }
}
