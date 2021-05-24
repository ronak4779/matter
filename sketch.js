
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

var paper, world;
 //var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;


	
	//Create the Bodies Here.
  
	paper = new Paper(300,300,50);
	  
	//groundSprite=createSprite(width/2, height-35, width,10);

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition+470,boxY-10, 20,100);
 	boxleftSprite.shapeColor=color("white");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+600, boxY+40, 270,15);
 	boxBase.shapeColor=color("white");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+730 , boxY-10, 20,100);
 	boxleftSprite.shapeColor=color("white");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	
	 Engine.run(engine);
	 
	
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  
  
 drawSprites();
paper.display();
}

function keyIsPressed() {
	if (keyCode === UP_ARROW) {
  
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
  
	}
	}