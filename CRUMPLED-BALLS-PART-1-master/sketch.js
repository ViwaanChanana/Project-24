
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;


	
	dustbin = new DustBin(720, 390, 100, 10);
	paper = new Paper(100, 300, 10);
	ground = Bodies.rectangle(width / 2, 400, width, 10,
	{
	  isStatic: true
	});
	World.add(world, ground);

	rectMode(CENTER);
    background(0);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  
  drawSprites();
 
  dustbin.display();
  paper.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW ) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x: 10 , y: -10
	  });
	}
  }
  

