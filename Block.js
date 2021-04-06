class Block{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;

    }
    display(){

        var pos2 = this.body.position;
        push();
        translate(pos2.x, pos2.y);
        rectMode(RADIUS);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();

    }
}