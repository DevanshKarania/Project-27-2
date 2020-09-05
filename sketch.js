
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,100,20);
	
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	b1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	b2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	b3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	b4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	b5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	

	rope1=new Rope(b1.body,roof.body,-bobDiameter*2, 0)

	rope2=new Rope(b2.body,roof.body,-bobDiameter*1, 0)
	rope3=new Rope(b3.body,roof.body,0, 0)
	rope4=new Rope(b4.body,roof.body,bobDiameter*1, 0)
	rope5=new Rope(b5.body,roof.body,bobDiameter*2, 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roof.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();



  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
  
	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});
	
	}
  }
