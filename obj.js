class Obj{
  constructor (name, x, y, vX, vY, img, t){
    this.isDraw = true
    this.name = name
    this.pos = createVector(x,y)
    this.vel = createVector(vX,vY)
    this.cT = t
    this.img = img
    this.velYAmount = random(7,10)
  }

  update (){
    if(time>this.cT){
      this.vel.y = sin(frameCount/this.velYAmount)
      this.pos.x += this.vel.x
      this.pos.y -= this.vel.y
    }

    if(this.pos.x < - 100){
      this.isDraw = false
    }
  }

  draw (){
    if(this.isDraw){

      image(this.img, this.pos.x, this.pos.y,this.img.width*rScale,this.img.height*rScale)

      textSize(20)
      fill(255)

      text(this.name, this.pos.x,this.pos.y+this.img.height/2*rScale+rScale*2)

    }
  }

}
