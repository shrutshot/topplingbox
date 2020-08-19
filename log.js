class log{
    constructor(x,y,height,angle){
        var options={
            'friction':0.8
        }
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        this.body=Bodies.rectangle(x,y,height,width,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
    }
}