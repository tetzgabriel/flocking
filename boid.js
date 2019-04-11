class Boid {
    constructor(){
        let x = random(width)
        let y = random(height);
        this.position = createVector(x, y);

        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 6));
        
        this.acceleration = createVector();

        this.maxForce = 0.4;
        this.maxSpeed = 6;
        this.perception = 50;
    }

    edges(){
        if(this.position.x > width){
            this.velocity = this.velocity.mult(-1);
        }else if (this.position.x < 0){
            this.velocity = this.velocity.mult(-1);
        }

        if(this.position.y > height){
            this.velocity = this.velocity.mult(-1);
        }else if (this.position.y < 0){
            this.velocity = this.velocity.mult(-1);
        }
    }

    align(boids){
        let steering = createVector();
        let total = 0;
        
        for(let other of boids){
            let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y); 
            if( other != this && distance <= this.perception){
                steering.add(other.velocity);
                total++;
            }   
        }
        if (total > 0){
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    cohesion(boids){
        let steering = createVector();
        let total = 0;
        
        for(let other of boids){
            let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y); 
            
            if( other != this && distance <= this.perception){
                steering.add(other.position);
                total++;
            }   
        }
        if (total > 0){
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }

        return steering;
    }

    separation(boids){
        let steering = createVector();
        let total = 0;
        
        for(let other of boids){
            let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y); 
            
            if( other != this && distance <= this.perception){
                let diff = p5.Vector.sub(this.position, other.position);
                diff.div(distance);
                steering.add(diff);
                total++;
            }   
        }
        if (total > 0){
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }

        return steering;
    }


    flock(boids){
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        alignment.mult(alignSlider.value());
        cohesion.mult(cohesionSlider.value());
        separation.mult(separationSlider.value());

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    addBoid(b){
        this.boids.push(b);
    }

    show(){
        strokeWeight(4);
        stroke(255);
        point(this.position.x, this.position.y)
    }
}