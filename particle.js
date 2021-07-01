class Particle {

    constructor(x, y, size) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.position = createVector(x, y);
        this.mass = 1;
        this.radius = size;
        this.locked = false;
    }

    applyForce(force) {
        if(!this.locked) {
            let f = force.copy();
            f.div(this.mass);
            this.acceleration.add(f);
        }
    }

    update() {
        this.velocity.mult(0.99);

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    } 

    show() {
        stroke(200);
        strokeWeight(2);
        fill(127);
        ellipse(this.position.x,this.position.y, this.radius, this.radius)
    }

}