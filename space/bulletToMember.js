function BulletToMember(member){
  this.pos = createVector(ship.pos.x,ship.pos.y)
  this.vel = createVector(0,0)
  this.ammo = 10
  this.speed = 1
  this.index = 0
  this.boomPos = createVector(0,0)
  this.cT = 68
  this.isDraw = false
  this.once = true

  this.update = function(){


      if(time<this.cT){

        this.pos.x = ship.pos.x
        this.pos.y = ship.pos.y
        this.once = false
      }

      this.vel.x = this.speed*(ship.pos.x-member.pos.x)/sqrt(ship.pos.x-member.pos.x + ship.pos.y - member.pos.y)
      this.vel.y = this.speed*(ship.pos.y-member.pos.y)/sqrt(ship.pos.x-member.pos.x + ship.pos.y - member.pos.y)

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
            tint(random(255),random(255),random(255))
            image(bulletImg,this.pos.x,this.pos.y,bulletImg.width*rScale/2,bulletImg.height*rScale/2)
            pop()

            if((this.pos.x - member.pos.x)<10){

              this.index=0
              this.boomPos.x = this.pos.x
              this.boomPos.y = this.pos.y

              this.ammo--
              member.hp --
              this.pos.x= ship.pos.x
              this.pos.y= ship.pos.y
            }

          } else if(this.ammo<=0){
            this.isDraw = false
          }
    }
  }


  this.drawBoom = function(){
    push()
    tint(random(255),random(255),random(255))
    image(boomSpriteImg,this.boomPos.x,this.boomPos.y,30,30,this.index*5,0,5,5)
    pop()
    }


}
