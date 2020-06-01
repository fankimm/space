function Bullet(a,b,c){
  this.pos = createVector(a.pos.x,a.pos.y)
  this.vel = createVector(0,0)
  this.ammo = 20
  this.speed = 50
  this.index = 0
  this.boomPos = createVector(0,0)
  this.isShip = c
  this.isDraw = true
  this.update = function(){
    if(true) {
        this.index+=1
    }
    this.vel.x = (b.pos.x - a.pos.x)/this.speed
    this.vel.y = (b.pos.y - a.pos.y)/this.speed
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
  }


  this.draw = function(){
    if(this.isDraw){

          if(this.ammo>0){

            if(abs(b.pos.x-this.pos.x)<10){
              this.index=0
              this.boomPos.x = this.pos.x
              this.boomPos.y = this.pos.y

              this.ammo--
              this.pos.x= a.pos.x
              this.pos.y= a.pos.y

            }
            push()
            if(this.isShip){
              tint(random(255),random(255),random(255),200)
            } else tint(255,0,0)
            image(bulletImg,this.pos.x,this.pos.y,bulletImg.width*rScale/2,bulletImg.height*rScale/2)
            pop()
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
