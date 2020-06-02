class Obj{
  constructor (name, x, y, vX, vY, img, t){
    this.isDraw = true
    this.name = name
    this.pos = createVector(x,y)
    this.vel = createVector(vX,vY)
    this.newVel = this.vel.x * -1
    this.cT = t
    this.img = img
    this.velYAmount = random(7,10)
  }

  update (){

      if(time>this.cT && this.isDraw){
        this.vel.y = sin(frameCount/this.velYAmount)
        this.pos.x += this.vel.x
        this.pos.y -= this.vel.y
      }

      if(time == 47){
        this.isDraw = false
        this.vel.x = this.newVel

      }

      if(time == 55){

        this.isDraw = true
      }

      if(time == 65){
        this.vel.x = 0
      }


  }

  draw (){
    if(this.isDraw){

      image(this.img, this.pos.x, this.pos.y,this.img.width*rScale,this.img.height*rScale)

      textSize(fontSize)
      fill(255)

      text(this.name, this.pos.x,this.pos.y+this.img.height/2*rScale+rScale*2 + fontSize)

    }
  }

}
