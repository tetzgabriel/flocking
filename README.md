# Flocking Simulation
This is a small flocking simulation example using *p5.js*.

I made this inspired on the Boids algorithm created by Craig Reynolds and by *Coding Challenge #124: Flocking Simulation* video of The Coding Train.

Basicaly the dots in your screen follow 3 simple rules:
<ul>
  <li>The Alignment Rule Image (https://i.imgur.com/z73JhEf.gif)</li>
  <ul>
    <li>That causes the boids points towards the average heading of other next boids</li>
  </ul>
  <li>The Cohesion Rule Image (https://i.imgur.com/uanlXSl.gif)</li>
  <ul>
    <li>That makes the boid to steer towards the center of mass of the flock</li>
  </ul>
  <li>The Separation Rule Image (https://i.imgur.com/eaSkcU7.gif)</li>
  <ul>    
    <li>This rule makes the boid to avoid crowding</li>
  </ul>
</ul>

You can read more about these rules [here](https://en.wikipedia.org/wiki/Boids), and you can watch The Coding Challenge video [here](https://www.youtube.com/watch?v=mhjuuHl6qHM&t=2135s) for more details of the math involved.
