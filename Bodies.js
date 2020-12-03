class Umbrella{
    constructor(x,y,r) {
        this.body=Bodies.circle(x,y,r,{isStatic:true});
        World.add(world,this.body);
        this.r=r;
    }
    debug() {
        var pos =  this.body.position;
        ellipseMode(RADIUS);noFill();stroke("green");strokeWeight(1);
        ellipse(pos.x,pos.y,this.r,this.r);fill("green");
        line(pos.x-20,pos.y,pos.x+20,pos.y);line(pos.x,pos.y-20,pos.x,pos.y+20);
    }
}