function BulletToShip(obj){
  this.pos = createVector(obj.pos.x,obj.pos.y)
  this.vel = createVector(0,0)
  this.ammo = 5
  this.speed = 1
  this.index = 0
  this.boomPos = createVector(0,0)
  this.cT = 22
  this.isDraw = false
  this.once = true

  this.update = function(){


      if(time<this.cT){

        this.pos.x = obj.pos.x
        this.pos.y = obj.pos.y
        this.once = false
      }

      this.vel.x = this.speed*(obj.pos.x-ship.pos.x)/sqrt(obj.pos.x-ship.pos.x + obj.pos.y - ship.pos.y)
      this.vel.y = this.speed*(obj.pos.y-ship.pos.y)/sqrt(obj.pos.x-ship.pos.x + obj.pos.y - ship.pos.y)

      if(time>this.cT){
        this.isDraw = true
      }

      if(this.isDraw){
        if(frameCount%2 == 0){
            this.index += 1
        }


        this.pos.x -= this.vel.x
        this.pos.y -= this.vel.y
      }



  }


  this.draw = function(){
    if(this.isDraw){

          if(this.ammo>0){
            push()
            tint(255,0,0)
            image(bulletImg,this.pos.x,this.pos.y,bulletImg.width*rScale/2,bulletImg.height*rScale/2)
            pop()

            if((this.pos.x - ship.pos.x)<10){

              this.index=0
              this.boomPos.x = this.pos.x
              this.boomPos.y = this.pos.y

              this.ammo--
              ship.hp-=0.2
              this.pos.x= obj.pos.x
              this.pos.y= obj.pos.y
            }

          } else if(this.ammo<=0){
            this.isDraw = false
          }
    }
  }


  this.drawBoom = function(){
    push()
    tint(255,66,0)
    image(boomSpriteImg,this.boomPos.x,this.boomPos.y,30,30,this.index*5,0,5,5)
    pop()
    }


}
