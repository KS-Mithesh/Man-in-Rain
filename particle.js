class rain{
    constructor(x,y){
        this.body = Bodies.circle(x,y,5,{restitution:0.4});
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("blue");noStroke();
        ellipse(pos.x,pos.y,5,10);
    }
}