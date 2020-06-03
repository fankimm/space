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
    this.hp = 10
    this.once = true
    this.index = 0
  }

  update (){

      if(time>this.cT && this.isDraw){
        this.vel.y = sin(frameCount/this.velYAmount)
        this.pos.x += this.vel.x
        this.pos.y -= this.vel.y
      }

      if(time == 51){
        this.isDraw = false
        this.vel.x = this.newVel

      }

      if(time == 63){

        this.isDraw = true
      }

      if(this.hp == 0){
        if(this.index>6 && time < 80) this.index = 0
        push()
        tint(random(255),random(255),random(255))
        image(boomSpriteImg,this.pos.x,this.pos.y,30,30,this.index*5,0,5,5)
        pop()

        if(frameCount%2){
            this.index +=1
        }


        if(this.once){
            this.tempTime = time
            this.once = false




        }

        this.vel.x = 0
      }


  }

  draw (){
    if(this.isDraw){

      image(this.img, this.pos.x, this.pos.y,this.img.width*rScale,this.img.height*rScale)

      textSize(fontSize)
      fill(255)

      text(this.name, this.pos.x,this.pos.y+this.img.height/2*rScale+rScale*2 + fontSize)
      if(this.tempTime >= time-2){

                image(smiImg,this.pos.x + 16,this.pos.y -72,smiImg.width*rScale,smiImg.height*rScale)
                push()
                fill(0)
                textSize(fontSize)
                switch(this.name){
                  case 'GTR':
                    text("!@#$",this.pos.x + 16,this.pos.y - 72)
                    break;
                  case 'VOX':
                    text("AK",this.pos.x + 16,this.pos.y - 72)
                    break;
                  case 'DR':
                    text("OMG!",this.pos.x + 16,this.pos.y - 72)
                    break;
                  case 'BAS':
                    text("UK!",this.pos.x + 16,this.pos.y - 72)
                    break;
                  case 'KBD':
                    text("D**N",this.pos.x + 16,this.pos.y - 72)
                    break;
                }

                pop()
      } else if(this.tempTime < time -2){
        this.isDraw = false

      }
    }
  }

}
