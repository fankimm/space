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
  this.update = function(){
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
