const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score = 0 ; 
var particle;
var count = 0; 

var gameState ='Play';

function setup(){
createCanvas(400,900);
engine = Engine.create();
    world = engine.world;
  ground = new Ground(200,890,400,20);
 // ground.shapeColor=(0,128,0);
 for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 for (var j = 25; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinkos(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinkos(j,175));
 }

  for (var j = 25; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinkos(j,275));
 }

  for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinkos(j,375));
 }
 for (var j = 25; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinkos(j,475));
 }
}

function draw(){
  background(0);
  ground.display();
  Engine.update(engine);
  textSize(24);
  fill('blue')
  text('100',355,600,30,30);
  text('200',275,600,30,30);
  text('500',195,600,30,30);
  text('200',115,600,30,30);
  text('100',35,600,30,30);
  text(mouseX + ',' + mouseY,200,500,30,30);
  text("score"+score,26,36,30,30);
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
   particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
    
}

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
  
 // mousePressed();
 if (particle!=null){
    particle.display();
   if(particle.body.position.y>600){
     if(particle.body.position.x>70){
      if(particle.body.position.x<10)
       score = score+100;
       particles=null;
     }
   }
  }
  if (particle!=null){
    particle.display();
   if(particle.body.position.y>600){
     if(particle.body.position.x>150){
      if(particle.body.position.x<85)
       score = score+200;
       particles=null;
     }
   }
  }
   if (particle!=null){
    particle.display();
   if(particle.body.position.y>600){
     if(particle.body.position.x>165){
      if(particle.body.position.x<130)
       score = score+500;
       particles=null;
     }
   }
  }
  if (particle!=null){
    particle.display();
   if(particle.body.position.y>600){
     if(particle.body.position.x>245){
      if(particle.body.position.x<310)
       score = score+200;
       particles=null;
     }
   }
  }
  if (particle!=null){
    particle.display();
   if(particle.body.position.y>600){
     if(particle.body.position.x>325){
      if(particle.body.position.x<390)
       score = score+100;
       particles=null;
     }
   } 
  }
  if(count>=5)gamestate='END'
  
}

function mousePressed(){
  if (gameState!=='END'){
    particle = new Particles(mouseX,10,10,10);
  }
}