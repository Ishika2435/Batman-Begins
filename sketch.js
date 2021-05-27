const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var raindrops, maxDrops;
var drops=[]

function preload(){
    
}

function setup(){

    engine=Engine.create();
    world=engine.World;

   createCanvas(800,800);
    
    var maxDrops=100;

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    background("black");

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
   
    drawSprites();
}   
