const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;

  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon);
  slingshot = new Slingshot(polygon,{x : 100, y : 200});

  //blocks

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);


  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();
}

function mouseDragged(){
  // if (gameState!=="launched"){
       Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
   //}
 }
 
 
 function mouseReleased(){
   slingshot.fly();
   //gameState = "launched";
 }
 