class Mango {
    constructor(x,y){
        var opt = {
            isStatic : true,
            friction : 2,
            restitution : 0
        }
        this.body = Bodies.circle(x,y,35,opt);
        this.radius = 9;
        this.image = loadImage("mango.png")
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*6.5, this.radius*6.5);
        pop();
    }
}