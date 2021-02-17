
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObj1 = new Bob(900,450,70);
	bobObj2 = new Bob(900,450,70);
	bobObj3 = new Bob(900,450,70);
	bobObj4 = new Bob(900,450,70);
	bobObj5 = new Bob(900,450,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
display();
{

	bobObj1.display();
	bobObj2.display();
	bobObj3.display();
	bobObj4.display();
	bobObj5.display();


}












  drawSprites();
 
}



