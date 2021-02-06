var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,500);

    //create 4 different surfaces
    block1 = createSprite(70,490,95,20);
    block1.shapeColor="green";
    block2 = createSprite(170,490,95,20);
    block2.shapeColor="red";
    block3 = createSprite(270,490,95,20);
    block3.shapeColor="blue";
    block4 = createSprite(370,490,95,20);
    block4.shapeColor="yellow";
    
    //create box sprite and give velocity
    box = createSprite(random(20,750),50,15,15);
    box.shapeColor="white";
    box.velocityX=6;
    box.velocityY=6;

}

function draw() {
    background("grey");
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor="green";
    }

    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor="red";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor="blue";
    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor="yellow";
    }

    drawSprites();
}