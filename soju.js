function Soju(name, x, y, vX, vY, img, t){
  this.isDraw = true
  this.name = name
  this.pos = createVector(x,y)
  this.vel = createVector(vX,vY)
  this.cT = t
  this.img = img
  this.update = function(){
    if(time>this.cT){
      this.vel.y = sin(frameCount/15)
      this.pos.x += this.vel.x
      this.pos.y -= this.vel.y

    }
  }
  this.draw = function(){
    if(this.isDraw){

      image(this.img, this.pos.x, this.pos.y,this.img.width*rScale,this.img.height*rScale)

      textSize(20)
      fill(255)

      text(this.name, this.pos.x,this.pos.y+this.img.height/2*rScale+rScale*2)
    }
  }

  this.drinkSoju = function(a){
    if((this.pos.x - a.pos.x - a.img.width*rScale)<=0){
      this.isDraw = false
      a.isDrink = true
      score = 10000
    }
  }
}
