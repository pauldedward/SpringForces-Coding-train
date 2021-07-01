
let particles = [];
let springs = [];
let spacing = 10;
let k = .1;
let velocity;
let gravity;
let head;

function setup() {
    createCanvas(500,500);
    
    for(let i = 0; i < 10; i++) {
        particles.push(new Particle(200, i * spacing, 1));

        if( i > 0 ) {
            let a = particles[i];
            let b = particles[i - 1];

            springs.push(new Spring(k, spacing, a, b));
        }

    }

    head = particles[0];
    head.locked = true;
    gravity = createVector(0,0.2);

}

function draw() {
    background(112,50,126);
    noFill();
    stroke(255);
    strokeWeight(3);
    beginShape();
    curveVertex(head.position.x, head.position.y);
    for(spring of springs) {
        spring.update();
        // spring.show();
    }
    for(particle of particles) {
        particle.applyForce(gravity);
        particle.update();
        // particle.show();
        curveVertex(particle.position.x, particle.position.y);
    } 

    let tail = particles[particles.length - 1];
    curveVertex(tail.position.x, tail.position.y);
    endShape();
   
    
    if(mouseIsPressed) {
        tail.position.x = mouseX;
        tail.position.y = mouseY; 
    }

}
