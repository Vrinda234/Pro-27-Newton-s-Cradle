
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint



function setup() {
	createCanvas(1600,800);
  //rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

  //Create teh roof here.
  roof1 = new roof(800,height/4, width/7, 20)

	//Create the Paper here.
   paperDiameter = 40;
   paper1 = new paper(width/2-paperDiameter*2,height/540,paperDiameter)
	 paper2 = new paper(width/2-paperDiameter,height/540,paperDiameter)
	 paper3 = new paper(width/2,height/540,paperDiameter)
	 paper5 = new paper(width/2+paperDiameter*2,height/540,paperDiameter)
	 paper4 = new paper(width/2+paperDiameter,height/540,paperDiameter)
   
   //Create the Ground here.
   

   //Create the Rope here.
   rope1 = new rope(paper1.body,roof1.body,paperDiameter*2,0)
   rope2 = new rope(paper2.body,roof1.body,paperDiameter*1,0)
   rope3 = new rope(paper3.body,roof1.body,0,0)
   rope4 = new rope(paper4.body,roof1.body,paperDiameter*1,0)
   rope5 = new rope(paper5.body,rope1.body,paperDiameter*2,0)

   
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  Text(mouseX+","+mouseY,mouseX,mouseY)

  roof1.display();
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-50, y:-45})
  }
}



