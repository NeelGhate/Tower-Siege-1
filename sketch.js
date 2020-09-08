const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var g1,g2;
var b1,b2,b3,b4,b5,b6;
var b7,b8,b9,b10,b11,b12;
var block;


function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

  g1 = new Ground (310,400,200,10);
  g2 = new Ground (600,250,200,10);

  b1 = new Box (600,225,40,40);
  b2 = new Box (640,225,40,40);
  b3 = new Box (680,225,40,40);
  b4 = new Box (560,225,40,40);
  b5 = new Box (520,225,40,40);
  b6 = new Box (540,185,40,40);
  b7 = new Box (580,185,40,40);
  b8 = new Box (620,185,40,40);
  b9 = new Box (660,185,40,40);
  b10 = new Box (560,145,40,40);
  b11 = new Box (600,145,40,40);
  b12 = new Box (640,145,40,40);

  b13 = new Box (230,375,40,40);
  b14 = new Box (270,375,40,40);
  b15 = new Box (310,375,40,40);
  b16 = new Box (350,375,40,40)
  b17 = new Box (390,375,40,40)
  b18 = new Box (250,335,40,40);
  b19 = new Box (290,335,40,40);
  b20 = new Box (330,335,40,40);
  b21 = new Box (370,335,40,40);
  ball = new Ball (100,300,30);


    engine = Engine.create();
    world = engine.world;

}

function draw() {
  background(0);  
  Engine.update(engine);

g1.display();
g2.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
ball.display();
  drawSprites();
}

