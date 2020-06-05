function Panty(name, x, y, vX, vY, img, t){
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


      if(time == 60) {
        this.vel.x = -3
      }


  }
  this.draw = function(){
    if(this.isDraw){

      image(this.img, this.pos.x, this.pos.y,this.img.width*rScale,this.img.height*rScale)

      textSize(fontSize)
      fill(255)

      text(this.name, this.pos.x,this.pos.y+this.img.height/2*rScale+rScale*2 + fontSize)
    }
  }


}
