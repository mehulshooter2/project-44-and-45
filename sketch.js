var gameState = 0;
var playButton,upgrade,characterButton,backGround;
var golem,golemAni,r1wImg;
var ch1,ch2,ch3,ch4,ch5,ch6,ch7;
var character,backimg,back;
var ch1s,ch2s,ch3s,ch4s,ch5s,ch6s,ch7s;

var pb,sb,a1b,a2b,a3b;

var ObstaclesGroup;

function preload(){
    golemAni = loadAnimation("images/golems/walk/rock1.png","images/golems/walk/rock2.png",
    "images/golems/walk/rock3.png","images/golems/walk/rock4.png","images/golems/walk/rock5.png",
    "images/golems/walk/rock6.png","images/golems/walk/rock7.png","images/golems/walk/rock8.png",
    "images/golems/walk/rock9.png","images/golems/walk/rock10.png","images/golems/walk/rock11.png");

    // gameState 2 images
    r1wImg = loadAnimation("images/robots/r1.png","images/robots/r2.png","images/robots/r3.png",
    "images/robots/r4.png","images/robots/r5.png","images/robots/r6.png","images/robots/r7.png"
    ,"images/robots/r8.png","images/robots/r9.png");

    ch1 = loadImage("images/archers/archer1.jpg");
    ch2 = loadImage("images/golems/golem2.jpg");
    ch3 = loadImage("images/Knights/Knight1.jpg")
    ch4 = loadImage("images/Knights/armourman1.jpg");
    ch5 = loadImage("images/wolf/wolf1.jpg");
    ch6 = loadImage("images/golems/golem1.jpg");
    ch7 = loadImage("images/dino/dino.jpg");

    //button images
    pb = loadImage("images/py b.png");
    sb = loadImage("images/sl b.png");
    backimg = loadImage("images/back.png")

}

function setup(){
    createCanvas(1300,620);

    ObstaclesGroup = createGroup();

    back = createSprite(100,100,20,20);
    back.addImage(backimg);
    back.scale = 0.5;

    playButton = createSprite(500,310,50,30);
    playButton.addImage(pb);

    characterButton = createSprite(900,310,50,30);
    characterButton.addImage(sb);

    character = createSprite(200,550,20,20);
    character.addAnimation('running',golemAni);

    ch1s = createSprite(100,100,30,30);
        ch1s.addImage(ch1);
        ch1s.scale = 0.1;
        ch2s = createSprite(100,200,30,30);
        ch2s.addImage(ch2);
        ch2s.scale = 0.1;
        ch3s = createSprite(100,300,30,30);
        ch3s.addImage(ch3);
        ch3s.scale = 0.1;
        ch4s = createSprite(100,400,30,30);
        ch4s.addImage(ch4);
        ch4s.scale = 0.1;
        ch5s = createSprite(100,500,30,30);
        ch5s.addImage(ch5);
        ch5s.scale = 0.1;
        ch6s = createSprite(100,600,30,30);
        ch6s.addImage(ch6);
        ch6s.scale = 0.1;
        ch7s = createSprite(100,700,30,30);
        ch7s.addImage(ch7);
        ch7s.scale = 0.1;

        ch1s.visible = false;
        ch2s.visible = false;
        ch3s.visible = false;
        ch4s.visible = false;
        ch5s.visible = false;
        ch6s.visible = false;
        ch7s.visible = false;

}


function draw(){
    playButton.visible = false;
        characterButton.visible = false;
    background(0);

    if(mousePressedOver(back)){
        gameState =0;
    }

    if(gameState === 0){
        textSize(30)
        fill("white");
        noStroke();
        text("MYSTERIOUS WARRIORS 2",450,30);
        character.visible = false;
        playButton.visible = true;
        characterButton.visible = true;
        if(mousePressedOver(playButton)){
            gameState =1;
        }
        if(mousePressedOver(characterButton)){
            gameState = 2;
        }

    }
//character.velocityY
    if(gameState === 1){
        clear()
        character.visible = true;
        ch1s.visible = false;
        ch2s.visible = false;
        ch3s.visible = false;
        ch4s.visible = false;
        ch5s.visible = false;
        ch6s.visible = false;
        ch7s.visible = false;
        spawnObstacles();
        if(ObstaclesGroup.isTouching(character)){
            character.destroy();
        }
        if(keyIsDown(UP_ARROW)){
            character.velocityY = -2;
        }
    }

    if(gameState === 2){
        clear();
        ch1s.visible = true;
        ch2s.visible = true;
        ch3s.visible = true;
        ch4s.visible = true;
        ch5s.visible = true;
        ch6s.visible = true;
        ch7s.visible = true;
        if(mousePressedOver(ch1s)){
            gameState = 1;
            character.changeImage(ch1);
        }

    }
   

    drawSprites();
}

function spawnObstacles() {
    if(World.frameCount % 100 === 0) {
      var obstacle = createSprite(900,550,20,20);
      obstacle.shapeColor = "red";
      obstacle.velocityX = -7;
      obstacle.addAnimation("killing",r1wImg);
    //   obstacle.addAnimation(r1wImg);
    //   var rand = random(1,6);
    //   obstacle.addAnimation("obstacle" + rand);
    //   obstacle.scale = 0.5;
    //   obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
    }
  }
