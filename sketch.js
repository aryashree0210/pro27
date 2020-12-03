var roofObject,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope,rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY);
	bobObject3=new Bob(startBobPositionX,startBobPositionY);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY);


	
	//bobDiam = 40;

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});
	}
}



