function Smi(){
  this.str = "hello"
  this.pos = createVector(0,0)
  this.sT = 0
  this.eT = 0

  this.draw = function(str,obj,sT,eT){

      this.str = str
      this.obj = obj
      this.sT = sT
      this.eT = eT

      this.pos.x = obj.pos.x
      this.pos.y = obj.pos.y


    if(time>this.sT && time<this.eT){
      this.pos.x = obj.pos.x + 16
      this.pos.y = obj.pos.y - 72
      image(smiImg,this.pos.x,this.pos.y,smiImg.width*rScale,smiImg.height*rScale)
      push()
      fill(0)
      textSize(fontSize)
      text(this.str,this.pos.x,this.pos.y)
      pop()
    }
  }


}
