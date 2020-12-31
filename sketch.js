
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var ground, side1, side2;
var rock;
var tree;
var m1,m2,m3,m4,m5,m6,m7; 
var chain;
var gameState = "1";

function preload(){
	backgroundImg = loadImage("bg.jpg");
	boy = loadImage("boy.png");
	tree = loadImage("tree.png")
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650, 610, 1300, 20);
	side1 = new Ground(75, 350, 20, 1300);
	side2 = new Ground(1200, 350, 20, 1300);
	rock = new stone(240,470);
	chain = new SlingShot(rock.body,{x:240 , y:470});
	m1 = new Mango(715,275,8);
	m2 = new Mango(780,215,10);
	m3 = new Mango(810,280,7);
	m4 = new Mango(880,250,9);
	m5 = new Mango(850,170,10);
	m6 = new Mango(965,245,10);
	
	Engine.run(engine);	  
}

function draw() {
	background(backgroundImg);
	Engine.update(engine);

	if(gameState = "1"){
		textFont("Arial Black");
		textSize(24);
		fill(0);
		text("Press Space For The Second Chance", 400, 50);
	}

    imageMode(CENTER);
    image(boy,300,525,200,250);
	image(tree,825,335,400,500);
	chain.display();
	rock.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	collision(rock,m1);
	collision(rock,m2);
	collision(rock,m3);
	collision(rock,m4);
	collision(rock,m5);
	collision(rock,m6);

	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Matter.Body.setStatic(b.body,false);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	chain.fly();
	gameState = "2";
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(rock.body, {x: 240, y:495});
		chain.attach();
	}
}
