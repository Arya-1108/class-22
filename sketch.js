const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;


function setup() {
  createCanvas(400,400);
  
  engine = Engine.create(); 
  world = engine.world; 
  var static_ground = { isStatic : true} 
  var ball_bouncing = { restitution: 1.2 }
   ground = Bodies.rectangle(200, 380 , 200, 20 , static_ground )
    World.add(world,ground) 
    ball = Bodies.circle(200 , 200 , 60 , ball_bouncing)
     World.add(world, ball)
}

function draw() {
  background("lightblue"); 
  rectMode(CENTER);
   Engine.update(engine)
    //rect(200, 200 , 40, 40)
     rect(ground.position.x , ground.position.y , 400, 20)
      ellipseMode(RADIUS);
    ellipse (ball.position.x, ball.position.y , 30 , 30)
}