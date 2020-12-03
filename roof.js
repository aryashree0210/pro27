class Roof{

    constructor(x,y,width,Height){

       
       this.body = Bodies.rectangle(x,y,width,Height,{isStatic:true});
       this.w = width;
       this.h = Height;
       World.add(world,this.body);
}

display(){
   push();
   rectMode(CENTER);
   fill(128,128,128);
   rect(this.body.position.x,this.body.position.y,this.w,this.h);
   pop();
}

}
