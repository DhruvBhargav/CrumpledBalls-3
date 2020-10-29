var ground ;
var log1,log2,log3 ;
var ball ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	binImage = loadImage("dustbingreen.png")
}
	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255) ;

	//Create the Bodies Here

	log1 = new Log(600,650,180,20,PI/2);
	log2 = new Log(520,600,20,100,PI);
	log3 = new Log(680,600,20,100,PI);
	ball = new Ball(100,550,20);
	bin = createSprite(600,550)
	bin.addImage(binImage)
	bin.scale = 0.7
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 launcher = new Launcher(ball.body,{x:200,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
  log1.display();
   log2.display();
   log3.display();
   ball.display();
   drawSprites();
}
/*function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-50})
	}
}*/
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    launcher.fly();

}
