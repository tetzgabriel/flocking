class Boid {
    constructor(){
        //Put boid in the center
        this.position = createVector(random(height), random(width));

        //Create velocity vector (length = 1)
        this.velocity = p5.Vector.random2D();
        //Set magnitude of velocity
        this.velocity.setMag(random(2, 4));
        
        this.acceleration = createVector();

        this.maxForce = 0.2;
        this.maxSpeed = 4;
    }

    //Infinity edges
    edges(){
        if(this.position.x > width){
            this.position.x = 0;
        }else if (this.position.x < 0){
            this.position.x = width;
        }

        if(this.position.y > width){
            this.position.y = 0;
        }else if (this.position.y < 0){
            this.position.y = width;
        }
    }


    //Align boid with the local friends
    align(boids){
        //Radius of perception
        let perception = 50;
        let steering = createVector();
        let total = 0;
        
        for(let other of boids){
            //Distance of this boid and other boids
            let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y); 
            
            //Add to average
            if( other != this && distance <= perception){
                steering.add(other.velocity);
                total++;
            }   
        }
        if (total > 0){
            //Avg of direction
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            //Limit the magntude of the vector
            steering.limit(this.maxForce);
        }

        //Vector direction
        return steering;
    }

    //Cohesion rule
    cohesion(boids){
        //Radius of perception
        let perception = 50;
        let steering = createVector();
        let total = 0;
        
        for(let other of boids){
            //Distance of this boid and other boids
            let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y); 
            
            //Add to average
            if( other != this && distance <= perception){
                steering.add(other.position);
                total++;
            }   
        }
        if (total > 0){
            //Avg of position
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            //Limit the magntude of the vector
            steering.limit(this.maxForce);
        }

        //Vector direction
        return steering;
    }

    //Separation rule
    separation(boids){
        //Radius of perception
        let perception = 50;
        let steering = createVector();
        let total = 0;
        
        for(let other of boids){
            //Distance of this boid and other boids
            let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y); 
            
            //Add to average
            if( other != this && distance <= perception){
                let diff = p5.Vector.sub(this.position, other.position);
                diff.div(distance);
                steering.add(diff);
                total++;
            }   
        }
        if (total > 0){
            //Avg of position
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            //Limit the magntude of the vector
            steering.limit(this.maxForce);
        }

        //Vector direction
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

    show(){
        strokeWeight(8);
        stroke(255);
        point(this.position.x, this.position.y)
    }
}