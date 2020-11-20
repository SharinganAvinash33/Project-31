const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;

  for(var k=0;k<=width;k=k+80){
  	divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var l=40;l<=width;l=l+50){
  	plinkos.push(new Plinko(l,75))
  }
  for(var m=15;m<=width;m=m+50){
  	plinkos.push(new Plinko(m,175))
  }
  for(var n=40;n<=width;n=n+50){
  	plinkos.push(new Plinko(n,275))
  }
  for(var o=15;o<=width;o=o+50){
  	plinkos.push(new Plinko(o,375))
  }
  ground=new Ground(width/2,height-5,width,10);
  console.log(divisions.length);
  Engine.run(engine);
}

function draw() {	
  Engine.update(engine);
  background(0);  
  ground.display();
  if (frameCount%90===0){
  	particles.push(new Particle(random(width/2-20,width/2+20),10))

  }
  for (var j=0;j<particles.length;j++){
  	particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
  	divisions[k].display();
  }
  for(var l=0;l<plinkos.length;l++){
  	plinkos[l].display();
  }
}