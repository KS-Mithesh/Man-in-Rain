const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var engine, world;

var umbrella;
var man, walking;
var thunderBolt1, thunderBolt2, thunder1, thunder2, thunder3, thunder4;
var rainDrops=[];

function preload(){
    walking = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");
    
    thunder1 = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png");
    thunder2 = loadAnimation("images/thunderbolt/4.png","images/thunderbolt/3.png","images/thunderbolt/2.png","images/thunderbolt/1.png");
}

function setup(){
   createCanvas(700,700);

   engine = Engine.create();
   world = engine.world;

   man = createSprite(350,560);
   man.addAnimation("walking",walking);
   man.scale=0.4;

   thunderBolt1 = createSprite(man.x-150,0);
   thunderBolt1.addAnimation("thunder1",thunder1);
   thunderBolt1.scale=0.8;

   thunderBolt2 = createSprite(man.x+150,0);
   thunderBolt2.addAnimation("thunder2",thunder2);
   thunderBolt2.scale=0.8;

   umbrella = new Umbrella(man.x+5,man.y-67 ,60);
    
}

function draw(){
    background(0,0,0);
    Engine.update(engine);

    //umbrella.debug();

    if(frameCount%5===0) {
      rainDrops.push(new rain(random(0,700),0));
    }

    for(var i=0;i<rainDrops.length;i++){
      rainDrops[i].display();
    }

    drawSprites();
}