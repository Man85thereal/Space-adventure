var END =0;
var PLAY =1;
var START =2;
var gameState=START
var gameover;


var blasting;
var meteorgroup;
var galaxy;
var meteor;
var rocket;
var blast;
var meteorImg;
var meteor2;
var score=0;


function preload(){
 rocketImg=loadAnimation("rocket.png");


 meteorImg=loadImage("meteor.png");



 galaxyImg=loadImage("galaxy.png")



 gameoverImg=loadImage("gameover.png")



 blast=loadImage("blast.png");


 meteor2Img=loadImage("meteor2.png");

}










function setup() 
{
 createCanvas(700,570);

 galaxy=createSprite(0,0,500,400);
 galaxy.addImage(galaxyImg)
 galaxy.scale=7
 meteorgroup=new Group()


 
rocket = createSprite(512,500,20,50);
rocket.addAnimation("flying",rocketImg);
rocket.scale=0.2

}
 




function draw() 
{
background("white");


if (gameState===START){
  fill("black")
  textSize(16)
  text("welcome voyager you have been assigned a misson to reach a planet millennium away good luck you are going to need it",10,50)
  text("click on your space bar to begin this journey",10,70)
  if (keyDown("SPACE")) {
      gameState=PLAY
  }

  
}

if (gameState===PLAY){
    if (meteorgroup.isTouching(rocket)){
        meteorgroup.destroyEach();
        rocket.destroy();
        blasting=createSprite(300,300,20,20);
        blasting.addImage(blast)
        gameState=END
        }
       //console.log(mouseX)
       rocket.x=mouseX
       spawmMeteor()
       drawSprites();
}
fill("white")
textSize(30)
 score=score+1
 text("score:"+score,50,20)

if(gameState===END){
gameover=createSprite(300,300,20,20);
gameover.addImage(gameoverImg)
gameover.scale=0.2
drawSprites()
}
}

function spawmMeteor() {
if(frameCount%60===0){
    meteor = createSprite(200,200,20,20)
    meteor.x=Math.round(random(1,600))
    var rand=Math.round(random(1,2))
    switch(rand){
        case 1:meteor.addImage(meteorImg)
        meteor.velocityY=2
        meteor.velocityX=2
        break
        case 2:meteor.addImage(meteor2Img)
        meteor.velocityY= 2
        meteor.velocityX=-2
        break
        default:break
        
    }
    
   
    meteor.scale=0.7
meteorgroup.add(meteor)
}

}

   
