const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16
var grond

function setup(){
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

g1 = new Box(600,300,50,50);
g2 = new Box(650,300,50,50);
g3 = new Box(700,300,50,50);
g4 = new Box(750,300,50,50);
g5 = new Box(600,300,50,50);
g6 = new Box(650,300,50,50);
g7 = new Box(700,300,50,50);
g8 = new Box(750,300,50,50);
g9 = new Box(600,300,50,50);
g10 = new Box(650,300,50,50);
g11 = new Box(700,300,50,50);
g12 = new Box(750,300,50,50);
g13 = new Box(600,300,50,50);
g14 = new Box(650,300,50,50);
g15 = new Box(700,300,50,50)
g16 = new Box(750,300,50,50)
grond = new Groond(400,700,800,30);
}
function draw(){
background('red')
Engine.update(engine);
grond.display();
g1.display();
g2.display();
g3.display();
g4.display();
g5.display();
g6.display();
g7.display();
g8.display();
g9.display();
g10.display();
g11.display();
g12.display();
g13.display();
g14.display();
g15.display();
g16.display();
}