function Stars(){

  this.pos = createVector(random(40,1681),random(237,923))
  this.random = random(120)
  this.color = color(0)
  this.update = function(){
    if(this.pos.x < 0){
      this.pos = createVector(mW+wM,random(mH)+hM)
    }

    this.color = color(this.random+(sin(frameCount/6))*60)


    if(true){

      this.pos.x -= 0.5

    }

  }
  this.draw = function(){
    // this.pos = createVector(random(mW),random(mH))

    fill(this.color)
    rect(this.pos.x, this.pos.y,rScale/4*3,rScale/4*3)
  }
}
