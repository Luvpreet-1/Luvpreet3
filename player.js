class Player {
    constructor(x,y,width,height) {
              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;
              this.sprite = createSprite(this.x,this.y,this.width,this.height);

    }
    display (){
        this.sprite.shapeColor = "green";

        if(keyDown(UP_ARROW)){
            this.sprite.velocityY = -5;
          }
          this.sprite.velocityY += 0.5;
          if(keyDown(DOWN_ARROW)){
            this.sprite.y += 5;
          }
          if(keyDown(RIGHT_ARROW)){
            this.sprite.x += 5;
          }
          if(keyDown(LEFT_ARROW)){
            this.sprite.x -= 5;
          }
        
          camera.position.x = this.sprite.x;
          camera.position.y = height/2;
    }
}