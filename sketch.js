
var rScale
var mW
var mH

var myFont


var stars = []

let ship
let earth
let panty
let gtr

let shipImg
let earthImg
let sojuImg
let pantyImg
let gtrImg


let starAmount

var score
var time


let bg
var logo

var skipFrames

function preload(){
  myFont = loadFont('assets/pixel.ttf')
  bg = loadSound('assets/bg.mp3')

  logo = loadImage('assets/logo.png')

  shipImg = loadImage('assets/ship.png')
  earthImg = loadImage('assets/earth.png')
  sojuImg = loadImage('assets/soju.png')
  pantyImg = loadImage('assets/panty.png')
  gtrImg = loadImage('assets/gtr.png')
}


function setup() {

  isDrink = false

  skipFrames = 3
  starAmount = 30
  score = 0
  time = 0

  mW = 1200
  mH = 800

  ship = new Ship("soon2", 100, mH/2, 1, 0, shipImg, 0)
  panty = new Obj("CK",mW + 50, mH/4, -3, 0, pantyImg, 2)
  soju = new Soju("soju", mW + 50, mH/2, -1, 0, sojuImg, 7)
  // soju = new Soju("soju", 300, mH/2, -1, 0, sojuImg, 0)
  gtr = new Obj("SangMyeon",mW + 50, 600,-1,0,gtrImg,0)
  earth = new Obj("EARTH", 100, mH/2, 0, 0, earthImg, 0)
  for (var i = 0; i<starAmount; i++){
    stars[i] = new Stars()
  }

  rScale = 8
  // createCanvas(mW,mH)

  let canvasElement = createCanvas(mW,mH).elt
  let context = canvasElement.getContext('2d')
  context.mozImageSmoothingEnabled = false
  context.webkitImageSmoothingEnabled = false
  context.msImageSmoothingEnabled = false
  context.imageSmoothingEnabled = false

  noStroke()
  imageMode(CENTER)

  fill(255)
  frameRate(30)

  textAlign(CENTER)
  textFont(myFont)
  textSize(30)

  bg.loop()

  bg.play()

}



function draw() {

  background(0)

  for (var i = 0; i < starAmount; i++){
    stars[i].draw()
    stars[i].update()
  }

  earth.draw()

  ship.draw()
  ship.update()
  ship.move()

  panty.draw()
  panty.update()

  soju.draw()
  soju.update()
  soju.drinkSoju(ship)

  gtr.draw()
  gtr.update()




  fill(255)

  text('ALCOHOL     ' + score,120,30)
  text('TIME     ' + time,300,30)

  if(frameCount%30 == 0) {
    time++

  }

}



function Stars(){
  // this.pos = createVector(0,0)

  this.pos = createVector(random(mW),random(mH))
  this.random = random(120)
  this.color = color(0)
  this.update = function(){
    if(this.pos.x < 0){
      this.pos = createVector(mW,random(mH))
    }

    this.color = color(this.random+(sin(frameCount/6))*60)
    // console.log((sin(frameCount/6)+1)*60)

    if(frameCount%skipFrames == 0){

      this.pos.x -= 3

    }

  }
  this.draw = function(){
    // this.pos = createVector(random(mW),random(mH))

    fill(this.color)
    rect(this.pos.x, this.pos.y, rScale/2, rScale/2)
  }
}

class Obj{
  constructor (name, x, y, vX, vY, img, t){
    this.isDraw = true
    this.name = name
    this.pos = createVector(x,y)
    this.vel = createVector(vX,vY)
    this.cT = t
    this.img = img
  }

  update (){
    if(time>this.cT){
      this.vel.y = sin(frameCount/10)
      this.pos.x += this.vel.x
      this.pos.y -= this.vel.y

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
/*
class Stars{
  constructor (name, x, y, vX, vY, img, t){
    this.random = random(120)
    this.color = random(120)
  }
  update(){
    if(this.pos.x < 0){
      this.pos = createVector(mW,random(mH))
    }

    this.color = color(this.random+(sin(frameCount/6))*60)
    // console.log((sin(frameCount/6)+1)*60)

    if(frameCount%skipFrames == 0){

      this.pos.x -= 3

    }
  }
  draw(){
    fill(this.color)
    rect(this.pos.x, this.pos.y, rScale/2, rScale/2)
  }
}*/


class Ship extends Obj{
  constructor (name, x, y, vX, vY, img, t){
    super(name, x, y, vX, vY, img, t)
    this.isDrink = false
  }

  draw(){
    if(!this.isDrink){
      super.draw()
    } else {
      push()
      // translate(this.pos.x + this.img.width*rScale/2,this.pos.y + this.img.height*rScale/2)
      translate(this.pos.x,this.pos.y)
      rotate(frameCount/10)
      tint(random(255),random(255),random(255),200)
      image(this.img,0,0,this.img.width*rScale,this.img.height*rScale)
      textSize(20)
      fill(255)
      text(this.name, 0,this.img.height*rScale/2 + rScale*2)

      pop()
    }
  }

  move(){
    this.vel.y = sin(frameCount/10)
    if(this.pos.x>mW/2){
      this.vel.x = 0
    }
  }

}

class Soju extends Obj{
  constructor (name, x, y, vX, vY, img, t){
    super(name, x, y, vX, vY, img, t)
  }

  drinkSoju(a){
    // console.log(this.pos.x + " , " + a.pos.x+this.img.width)
    console.log(a.img.width)
    if((this.pos.x - a.pos.x - a.img.width*rScale)<=0){
      this.isDraw = false
      a.isDrink = true
      score = 10000
    }
  }

}
