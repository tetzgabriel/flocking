# Flocking Simulation
This is a small flocking simulation example using *p5.js*.

I made this inspired on the Boids algorithm created by Craig Reynolds and by *Coding Challenge #124: Flocking Simulation* video of The Coding Train.

Basicaly the dots in your screen follow <strong>3 simple rules</strong>:
<ul>
  <li>The <strong>Alignment</strong> Rule (https://i.imgur.com/z73JhEf.gif)</li>
  <ul>
    <li>
      That causes the boids points towards the average heading of other next boids<br>
    </li>
  </ul>
  <li>The <strong>Cohesion</strong> Rule (https://i.imgur.com/uanlXSl.gif)</li>
  <ul>
    <li>
      That makes the boid to steer towards the center of mass of the flock<br>
    </li>
  </ul>
  <li>The <strong>Separation</strong> Rule (https://i.imgur.com/eaSkcU7.gif)</li>
  <ul>    
    <li>
      This rule makes the boid to avoid crowding
    </li>
  </ul>
</ul>

You can read more about these rules [here](https://en.wikipedia.org/wiki/Boids), and you can watch The Coding Challenge video [here](https://www.youtube.com/watch?v=mhjuuHl6qHM&t=2135s) for more details of the math involved.

# Some Changes and Addons
In this version of *flocking simulation* I made some changes and added new functions to the base algorithm:
<ul>
  <li>Proportion between the <strong>perception</strong> <strong>maxSpeed</strong> and <strong>max force</strong></li>
  <ul>
    <li>Set the <strong>perception</strong> -> <strong>maxSpeed</strong> = perception/10 and <strong>maxForce</strong> = maxSpeed/10</li>
  </ul>
  <li>Obstacles</li>
  <ul>
    <li>By clicking or dragging the mouse, you can create <strong>obstacles</strong> in the canvas, so the boids will avoid them</li>
  </ul>
</ul>

# Improvements, Bugs and New Features
I'm working on this project in my spare time, so it can take a while for me to launch any improvement, bugfix ou new feature. So feel free to open a Pull Request or, if you prefer, send me an e-mail on: tetz.gabriel@gmail.com!
