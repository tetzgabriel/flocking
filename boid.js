class Boid {
    constructor(){
        let x = random(width)
        let y = random(height);

        this.perception = 100;
        this.maxSpeed = this.perception / 10;
        this.maxForce = this.maxSpeed / 10;

        this.boidSize = 10;
        this.position = createVector(x, y);

        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random((this.maxSpeed/2), this.maxSpeed));
        
        this.acceleration = createVector();    
    }

    setEdges(){
        if(this.position.x > width){
            this.position.x = this.boidSize;
        }else if (this.position.x < 0){
            this.position.x = width - this.boidSize;
        }
    
        if(this.position.y > height){
            this.position.y = this.boidSize;
        }else if (this.position.y < 0){
            this.position.y = height - this.boidSize;
        }
    }

    alignRule(boids){
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

    cohesionRule(boids){
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

    separationRule(boids){
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


    applyRules(boids){
        let alignment = this.alignRule(boids);
        let cohesion = this.cohesionRule(boids);
        let separation = this.separationRule(boids);

        alignment.mult(alignSlider.value());
        cohesion.mult(cohesionSlider.value());
        separation.mult(separationSlider.value());

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    updateBoids(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    addBoid(b){
        this.boids.push(b);
    }

    showBoid(){
        strokeWeight(this.boidSize);
        stroke(255);
        point(this.position.x, this.position.y)
    }
}