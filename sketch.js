
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse = Matter.Mouse;
	 const MouseConstraint = Matter.MouseConstraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	

	pendulum1 = new Pendulum(340, 450, "#00b0ff");

	
	pendulum2 = new Pendulum(370,450,"red");
	pendulum3 = new Pendulum(400,450,"red");
	pendulum4 = new Pendulum(430,450, "red");
	pendulum5 = new Pendulum(460,450, "red");

	 sling1 = new Sling(pendulum1.body, { x: 340, y: 200 });
	 sling2 = new Sling(pendulum2.body,{x:370,y:200});
	 sling3 = new Sling(pendulum3.body,{ x:400, y:200});
	 sling4 = new Sling(pendulum4.body,{ x:430, y: 200});
	 sling5 = new Sling(pendulum5.body,{x:460,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
}



function mouseDragged() { 
	Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
 }

