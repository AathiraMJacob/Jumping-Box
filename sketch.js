var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var topEdge,bottomEdge,rightEdge,leftEdge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    

    //create 4 different surfaces
box1=createSprite(80,580,180,20);
box1.shapeColor='red';

box2=createSprite(280,580,180,20);
box2.shapeColor='green';

box3=createSprite(480,580,180,20);
box3.shapeColor='purple';

box4=createSprite(680,580,180,20);
box4.shapeColor='blue';

topEdge=createSprite(400,0,800,5);
topEdge.shapeColor="gray";

bottomEdge=createSprite(400,600,800,5);
bottomEdge.shapeColor="gray";

rightEdge=createSprite(800,300,5,600);
rightEdge.shapeColor="gray";

leftEdge=createSprite(0,300,5,600);
leftEdge.shapeColor="gray";


    //create box sprite and give velocity
    ball=createSprite(random(20,270),300,20,20);
    ball.shapeColor='white';
    ball.velocityX=4;
    ball.velocityY=-4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   ball.bounceOff(topEdge);
   ball.bounceOff(bottomEdge);
   ball.bounceOff(leftEdge);
   ball.bounceOff(rightEdge);
   
   
   
  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ball.display();
    topEdge.display();
    bottomEdge.display();
    leftEdge.display();
    rightEdge.display();
    //add condition to check if box touching surface and make it box

    music.play();
    touching();
    drawSprites();
}

function touching(){
    if (ball.isTouching(box1)){
        ball.shapeColor=box1.shapeColor;
        ball.bounceOff(box1);
    }
    if (ball.isTouching(box2)){
        ball.shapeColor=box2.shapeColor;
        ball.bounceOff(box2);
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    } 
    if (ball.isTouching(box3)){
        ball.shapeColor=box3.shapeColor;
        ball.bounceOff(box3);
    }
    if (ball.isTouching(box4)){
        ball.shapeColor=box4.shapeColor;
        ball.bounceOff(box4);

    }
}