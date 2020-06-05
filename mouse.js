function Mouse(){
  this.pos = createVector(1000, 520)
  this.vel = createVector(9,-4)
  this.draw = function(){
    image(mouseImg,this.pos.x,this.pos.y,mouseImg.width*rScale,mouseImg.height*rScale)
    if(!isOpeningStart){

      if(this.pos.x>1756 && this.pos.x<1838 && this.pos.y>90 && this.pos.y < 172){
        isOpeningStart = true

      }
      this.pos.x += this.vel.x
      this.pos.y += this.vel.y

    }



  }
}
