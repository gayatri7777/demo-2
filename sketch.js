    var hero,oponent1,oponent2,oponent3,oponent4,path;
    var heroImg,oponent1Img,oponent2Img,oponent3Img,oponent4Img,pathImg;
    var oponent1G,oponent2G,oponent3G,oponent4G;
    var gameOver,restart;
    var gameOverImg,restartImg;
    var creshImg,cresh;
    var distance = 0;
    var PLAY=1;
    var gameState = 1;
    var END=0;




    function preload (){
    heroImg = loadImage("hero.png");
    oponent1Img = loadImage("oponent1.png");
    oponent2Img = loadImage("oponent2.png");
    oponent3Img = loadImage("oponent3.png");
    oponent4Img = loadImage("oponent4.png");
    gameOverImg = loadImage("gameOver.png");
    restartImg = loadImage("restart.png");
    pathImg = loadAnimation("Road.png");
    creshImg = loadImage("cresh1.png");
 }

  function setup (){
    hero.addImage("a",heroImg);
    hero = createSprite(102,320,10,10);
    hero.scale= 0.5;
    hero.velocityY = -2;
    hero.lifetime = 200;
    restart.addImage(restartImg);
    restart = createSprite(300,200,20,20);
    restart.scale = 1.3;
    gameOver.addImage(gameOverImg);
    gameOver = createSprite(250,250,20,20);
    gameOver.scale = 1.3;
    

     distance=0;
     hero.setCollider("rectangle",0,0,10,10);
     hero.debug = true;
      path = createSprite(width/2,200);
       path.scale=2.5;
      path.velocityY=8;
       

      if (mousePressedOver(restart)){
      reset ();
       }
        oponent1 = createGroup();
        oponent2 = createGroup();
        oponent3 = createGroup();
        oponent4 = createGroup();
   }

 function draw (){
  if(gameState === PLAY){
    background(0);
   createCanvas(600,400);
   fill (224);
   textSize(20);
    text("distance:",+distance,50,10);
    gameOver.visible=false;
   restart.visible=false;
   path.velocityY=(8+3* distance/100);
   distance =  distance+ Math.round(getFrameRate()/60);
    
   if(path.y < 0){
    path.y = path.height/2;
   }
     if (keyDown("right")){
        hero.velocityX = 2;
     }
      if (keyDown("left")){
        hero.velocityX = -2;
      }


  
     createoponent1();
     createoponent2();
     createoponent3();
     createoponent4();

     if (oponent1G.isTouching(hero)){
      hero.addImage(cresh);
      path.velocityY = 0;
      hero.setVelocityEach(0);
      oponent1G.velocityY = 0;
      gameState = END;
     }
     if (oponent2G.isTouching(hero)){
      hero.addImage(cresh);
      path.velocityY = 0;
      hero.setVelocityEach(0);
      oponent2G.velocityY = 0;
      gameState = END;
     }
     if (oponent3G.isTouching(hero)){
      hero.addImage(cresh);
      path.velocityY = 0;
      hero.setVelocityEach(0);
      oponent3G.velocityY = 0;
      gameState = END;
     }
     if (oponent4G.isTouching(hero)){
      hero.addImage(cresh);
      path.velocityY = 0;
      hero.setVelocityEach(0);
      oponent4G.velocityY = 0;
      gameState = END;
     }
    }
    drawSprite();
 }
if (gameState === END){
  gameOver.visible = true;
  restart.visible = true;
oponent1G.setlifetimeEach(-1);
oponent2G.setlifetimeEach(-1);
oponent3G.setlifetimeEach(-1);
oponent4G.setlifetimeEach(-1);
}

 function createoponent1(){
  if (WorldframeCount % 200 == 0){
    var oponent1 = createSprite(Math.round(random(50,350),40,10,10));
    oponent1.addImage(oponent1Img);
    oponent1.scale = 0.5;
    oponent1.velocityY = -2;
    oponent1.lifetime = 200;
    oponent1G.add(oponent1);
  }
 }
function createoponent2(){
  if (WorldframeCount % 320 == 0){
    var oponent2 = createSprite(Math.round(random(50,350),40,10,10));
    oponent2.addImage(oponent2Img);
    oponent2.scale = 0.5;
    oponent2.velocityY = -2;
    oponent2.lifetime = 200;
    oponent2G.add(oponent2);
  }
}
function createoponent3(){
  if (WorldframeCount % 410 == 0){
    var oponent3 = createSprite(Math.round(random(50,350),40,10,10));
    oponent3.addImage(oponent3Img);
    oponent3.scale = 0.5;
    oponent3.velocityY = -2;
    oponent3.lifetime = 200;
    oponent3G.add(oponent3);
  }
  
}
function createoponent4(){
  if (WorldframeCount % 530 == 0){
    var oponent4 = createSprite(Math.round(random(50,350),40,10,10));
    oponent4.addImage(oponent4Img);
    oponent4.scale = 0.5;
    oponent4.velocityY = -2;
    oponent4.lifetime = 200;
    oponent4G.add(oponent4);
  }
}










