
var trex ,trex_running;

function preload(){
  

  trex_running = loadImage("trex1.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex = createSprite(60,100,20,20);
  trex.addImage("running", trex_running);
 
}

function draw(){
  background("grey")
  
 drawSprites();
}
