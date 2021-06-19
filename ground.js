class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            'restitution': 0,
            'friction': 0,
            'density': 1
        }
        this.body = Bodies.rectangle(700,670,2000,15, options)
        this.width = 2000;
        this.height = 15;

        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);

        fill("yellow");

    
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }


};