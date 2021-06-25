var ground,player;
var monster,monsterImage,monsterGroup;
var obs,obsImage,obsGroup;
var ghost,ghostImage,ghostGroup;
var PLAY = 1;
var END= 0;
var gameState = "PLAY";

function preload () {





}

function setup(){
    createCanvas(windowWidth,windowHeight/2);


    ground = createSprite(width,height-20,width*4,10);
    player = new Player(400,200,20,50);
     
    obsGroup = new Group();
    monsterGroup = new Group();
    ghostGroup = new Group();
    spawnObs();

    KILLS =  0;

   

}

function draw() {
    background("skyblue")
    
    textSize(20);
    text("LIVES:" + lives,width-250,50);
   
    if(gameState === "play") {
        player.display();
        spawnMonsters();

        if(player.isTouching(obsGroup)) {
            gameState = "END";

        if(player.isTouching(monster)) {
            monster.destroyEach()
            KILLS = KILLS+1;

        if(player.isTouching(ghost))    {
            ghost.destroyEach()
            gameState  = "END";
            monster.destroyEach()
            ghost.setVelocityXEACH(0)
            monster.setVelocityXEACH(0)
            player.addImage(gameOverImage)
            player.scale = 2
            player.x=500
            player.y= 300
        }

        }

        }
        player.sprite.collide(ground);

        drawSrites();
        text("Score:" + score,500,100);
    }
      
}

   function spwanObs() {
      for(var i = 100; i< width*4; i+= random(600,1000)) {
          obs = new Obstacles(i,height-50,20,60);
          obs.display();
      }
   }
   function spawnMonsters() {
       if(frameCount%100 === 0) {
       for(var i = 100; i< width*4; i+= random(600,1000)) {
           monster = new monster(i,height-450,20,20);
           monster.display();
       }
       }
   }

   function spawnGhost() {
       if(frameCount%120 === 0) {
       for(var i = 100; i< width*4; i+=ramdom(600,1000))   {
           ghost = new Ghost(i,height-450,20,20);
           ghost.display();
       }
       }
   }

