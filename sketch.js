const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ball;
var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    
   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);
   var ball_options={
       restitution: 2
   }
   ball=Bodies.rectangle(200,100,50,50,ball_options);

   World.add(world,ball);
    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    rect(ball.position.x,ball.position.y,50,50);
}
