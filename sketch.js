
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var box1
 var options = {
	 isStatic : false,
	 restitution:0.3,
	 friction:0.5,
	 density:1.2,
 }
 function preload()
{


}

function setup() {
	createCanvas(800, 700);
	box2 = new Box(500,650,20,100,"red");
	box3 = new Box(295,650,20,100,"red");
	box1 = new Box(400,690,200,20,"red");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);       

}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}



