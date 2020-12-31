class stone {
    constructor(x,y){
        var opt = {
            density : 1.2,
            friction : 1.5,
            stiffness: 0.0002
        }
        this.body = Bodies.circle(x,y,15,opt);
        World.add(world,this.body)
        this.image = loadImage("stone.png");
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        
    }
}