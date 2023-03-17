const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var level =1;

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,800,20);
  right = new Ground(590,200,20,400);
  right2 = new Ground(400,330,20,100);
  left = new Ground(10,200,20,400);
  left2 = new Ground(280,330,20,100);
  top_wall = new Ground(200,10,800,20);

  var options = {
   isStatic:false,
   restitution:0.8,
   friction:1,
  }

  ball = Bodies.circle(100, 200, 20, options);
  World.add(world, ball);
  
 
  

  keyPressed()
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  left2.show();
  right.show();
  right2.show();
  Engine.update(engine);



  ellipse(ball.position.x, ball.position.y, 20, 20);
  win();
  

}



function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
  }

  if (keyCode === DOWN_ARROW){
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:0.05});
  }
  if (keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
  }
  if (keyCode === LEFT_ARROW){
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:-0.05, y:0});
  }
}

function win(){
  if(ball.position.x >280 && ball.position.x < 400 && ball.position.y >150){
    console.log("You Win!");
    text("YOU WIN!", 200, 200)
    textSize(50);
}}