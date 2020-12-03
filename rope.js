class Rope{
    constructor(b1,b2,offsetX,offsetY){
       this.offsetY=offsetY
       this.offsetX=offsetX
       
       
        var options= {
            bodyA : b1,
            bodyB : b2,
            pointB:{x:this.offsetX,y:this.offsetY}
            
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        
    }

    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;

        var Anchor1x=posA.x;
        var Anchor1y=posA.x;

        var Anchor2x=posB.x+this.offsetX;
        var Anchor2y=posB.y+this.offsetY;
        strokeWeight(6);
        stroke("black");
        line(Anchor1x, Anchor1y, Anchor2x,Anchor2y);
    }
}