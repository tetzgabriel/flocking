# Flocking Simulation
This is a small flocking simulation example using *p5.js*.

I made this inspired on the Boids algorithm created by Craig Reynolds and by *Coding Challenge #124: Flocking Simulation* video of The Coding Train.

Basicaly the dots in your screen follow 3 simple rules:
<ul>
  <li>The Alignment Rule Image (https://i.imgur.com/z73JhEf.gif)</li>
  <ul>
    <li>
      That causes the boids points towards the average heading of other next boids<br>
    </li>
  </ul>
  <li>The Cohesion Rule Image (https://i.imgur.com/uanlXSl.gif)</li>
  <ul>
    <li>
      That makes the boid to steer towards the center of mass of the flock<br>
    </li>
  </ul>
  <li>The Separation Rule Image (https://i.imgur.com/eaSkcU7.gif)</li>
  <ul>    
    <li>
      This rule makes the boid to avoid crowding
    </li>
  </ul>
</ul>

You can read more about these rules [here](https://en.wikipedia.org/wiki/Boids), and you can watch The Coding Challenge video [here](https://www.youtube.com/watch?v=mhjuuHl6qHM&t=2135s) for more details of the math involved.

# Some Changes and Addons
In this version of *flocking simulation* I made some changes e added new functions to the algorithm:
<ul>
  <li>Proportion between the <bold>perception</bold> *maxSpeed* and *max force*</li>
  <ul>
    <li>Set the *perception* -> *maxSpeed* = *perception/10* and *maxForce* = *maxSpeed/10*</li>
  </ul>
  <li>Obstacles</li>
  <ul>
    <li>By clicking or dragging the mouse, you can create obstacles in the canvas, so the boids will avoid them</li>
  </ul>
</ul>
