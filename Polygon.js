class Polygon{
    constructor(x,y,r){
        this.body=Bodies.circle(x,y,r);
        this.r=r;
        World.add(world,this.body);
        this.poly=loadImage("polygon.png");
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y,this.r);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}