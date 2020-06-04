function Ship(name, x, y, vX, vY, img, t){
  this.isDraw = true
  this.isDrink = false
  this.isCentered = false
  this.name = name
  this.pos = createVector(x,y)
  this.vel = createVector(vX,vY)
  this.cT = t
  this.img = img
  this.hp = 5
  this.index = 0
  this.update = function(){
    if(frameCount % 2 ==0 ) {
      this.index+=1
    }
    if(this.hp<=0){
      if(this.index >7){
        this.index = 0
      }
      image(boomSpriteImg,this.pos.x,this.pos.y-32,40,40,this.index*5,0,5,5)
      image(boomSpriteImg,this.pos.x-32,this.pos.y,40,40,this.index*5,0,5,5)
      image(boomSpriteImg,this.pos.x+32,this.pos.y+32,40,40,this.index*5,0,5,5)
    }

    if(time>this.cT){

        this.vel.y = sin(frameCount/10)
        this.pos.x += this.vel.x
        this.pos.y -= this.vel.y

    }
  }


  this.draw = function(){
    if(this.isDraw){
      if(!this.isDrink){
        image(this.img, this.pos.x, this.pos.y,this.img.width*rScale,this.img.height*rScale)

        textSize(fontSize)
        fill(255)

        text(this.name, this.pos.x,this.pos.y+this.img.height/2*rScale+rScale*2 + fontSize)
      } else if (this.isDrink){
        push()
      // translate(this.pos.x + this.img.width*rScale/2,this.pos.y + this.img.height*rScale/2)
        this.hp=5
        translate(this.pos.x,this.pos.y)
        rotate(frameCount/10)
        tint(random(255),random(255),random(255),200)
        image(this.img,0,0,this.img.width*rScale,this.img.height*rScale)
        textSize(fontSize)
        fill(255)
        text(this.name, 0,this.img.height*rScale/2 + rScale*2 + fontSize)

        pop()
      }

  }
  this.move = function(){
    this.vel.y = sin(frameCount/10)
    if(this.pos.x>mW/2){
      this.vel.x = 0
      this.isCentered = true

    }
  }
}
}
