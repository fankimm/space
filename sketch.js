
var rScale
var mW
var mH

var wM
var hM;
var instrumentMargin
var hp

var myFont
var fontSize

var stars = []

let ship
let earth
let panty
let gtr
let bullet

var mouse
var smi

let backImg
let backImg0
let shipImg
let earthImg
let sojuImg
let pantyImg
let gtrImg
let heartImg
let emptyHeartImg
let rainbowHeartImg
let bulletImg
let boomSpriteImg
let smiImg
let mouseImg

let starAmount

var score
var time
var myFrameCount

var isGameStart
var isOpeningStart

let bgm
var logo

var skipFrames

function preload(){
  myFont = loadFont('assets/ChiKareGo2.ttf')
  bgm = loadSound('assets/bgm.wav')

  logo = loadImage('assets/logo.png')
  smiImg = loadImage('assets/smi.png')
  //background
  backImg0 = loadImage('assets/back0.png')
  backImg = loadImage('assets/back.png')

  shipImg = loadImage('assets/ship.png')
  earthImg = loadImage('assets/earth.png')
  sojuImg = loadImage('assets/soju.png')
  pantyImg = loadImage('assets/panty.png')

  heartImg = loadImage('assets/heart.png')
  emptyHeartImg = loadImage('assets/emptyHeart.png')
  rainbowHeartImg = loadImage('assets/rainbowHeart.png')

  //member
  gtrImg = loadImage('assets/gtr.png')
  bassImg = loadImage('assets/bass.png')
  keyboardImg = loadImage('assets/keyboard.png')
  vocalImg = loadImage('assets/vocal.png')
  drumImg = loadImage('assets/drum.png')

  bulletImg = loadImage('assets/bullet.png')
  mouseImg = loadImage('assets/mouse.png')
  boomSpriteImg = loadImage('assets/boomSprite.png')

}


function setup() {
  mW = 1664
  mH = 690
  wM = 13*3
  hM = 78*3

  skipFrames = 3
  starAmount = 100
  score = 0
  time = 0
  hp = 5
  fontSize = 30
  instrumentMargin = 20
  myFrameCount = 0

  isGameStart = false
  isOpeningStart = false



  ship = new Ship("SUNI", 100, mH/2+hM, 2, 0, shipImg, 0)
  panty = new Panty("CK",mW + 50+wM, mH/4+hM, -4, 0, pantyImg, 55)
  soju = new Soju("SOJU", mW+wM + 50, mH/2+hM, -2, 0, sojuImg, 44)
  gtr = new Obj("GTR",200+mW + 50+wM, 300+instrumentMargin,-2,0,gtrImg,17)
  bass = new Obj("BAS",100+mW + 50+wM, 415+instrumentMargin,-2,0,bassImg,17)
  vocal = new Obj("VOX",mW + 50+wM, 540+instrumentMargin,-2,0,vocalImg,17)
  keyboard = new Obj("KBD",100+mW + 50+wM, 650+instrumentMargin,-2,0,keyboardImg,17)
  drum = new Obj("DR",200+mW + 50+wM, 750+instrumentMargin,-2,0,drumImg,17)
  earth = new Earth("EARTH", 100, mH/2+hM, 0, 0, earthImg, 0)

  smi = new Smi()
  mouse = new Mouse()

  bulletToShip = new BulletToShip(gtr)
  bulletToShip1 = new BulletToShip(bass)
  bulletToShip2 = new BulletToShip(vocal)
  bulletToShip3 = new BulletToShip(drum)
  bulletToShip4 = new BulletToShip(keyboard)


  bulletToMember = new BulletToMember(gtr)
  bulletToMember1 = new BulletToMember(bass)
  bulletToMember2 = new BulletToMember(vocal)
  bulletToMember3 = new BulletToMember(keyboard)
  bulletToMember4 = new BulletToMember(drum)



  for (var i = 0; i<starAmount; i++){
    stars[i] = new Stars()
  }

  rScale = 8
  // createCanvas(mW,mH)

  let canvasElement = createCanvas(1920-5,1080-5).elt
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
  textSize(60)

  bgm.loop()

}



function draw() {

  if(!isGameStart && !isOpeningStart){
    push()
    imageMode(CORNER)
    image(backImg0,0,0,backImg0.width*3,backImg0.height*3)
    pop()


  } else if(isOpeningStart && !isGameStart){
    background(0)
    for (var i = 0; i < starAmount; i++){
      stars[i].draw()
      stars[i].update()
    }

    image(backImg,width/2,height/2,backImg.width*3,backImg.height*3)
    image(logo,(mW+wM)/2,(mH+hM)/2 +56)
    push()
    textSize(80)
    fill((sin(frameCount/6.5)+1.08)*255)

    text("PRESS START",(mW+wM)/2,(mH+hM)/2+384)
    pop()
  }else if(isGameStart){
    myFrameCount++
    background(0)

    for (var i = 0; i < starAmount; i++){
      stars[i].draw()
      stars[i].update()
    }

    earth.draw()
    earth.update()
    earth.move(ship)
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
    drum.draw()
    drum.update()
    vocal.draw()
    vocal.update()
    bass.draw()
    bass.update()
    keyboard.draw()
    keyboard.update()

    bulletToMember.update()
    bulletToMember.draw()
    bulletToMember.drawBoom()

    bulletToMember1.update()
    bulletToMember1.draw()
    bulletToMember1.drawBoom()

    bulletToMember2.update()
    bulletToMember2.draw()
    bulletToMember2.drawBoom()

    bulletToMember3.update()
    bulletToMember3.draw()
    bulletToMember3.drawBoom()

    bulletToMember4.update()
    bulletToMember4.draw()
    bulletToMember4.drawBoom()

    bulletToShip.update()
    bulletToShip.draw()
    bulletToShip.drawBoom()

    bulletToShip1.update()
    bulletToShip1.draw()
    bulletToShip1.drawBoom()

    bulletToShip2.update()
    bulletToShip2.draw()
    bulletToShip2.drawBoom()

    bulletToShip3.update()
    bulletToShip3.draw()
    bulletToShip3.drawBoom()

    bulletToShip4.update()
    bulletToShip4.draw()
    bulletToShip4.drawBoom()





    push()
    imageMode(CORNER)
    image(backImg,0,0,backImg.width*3,backImg.height*3)

    for(var h=0;h<5;h++){
      if(!ship.isDrink){
        image(emptyHeartImg,1350+h*58,245,emptyHeartImg.width*rScale,emptyHeartImg.height*rScale)
      }

    }

    for(var i=0;i<ship.hp;i++){
      if(!ship.isDrink){
        image(heartImg,1350+i*58,245,heartImg.width*rScale,heartImg.height*rScale)


      }else if(ship.isDrink){
        tint(random(255),random(255),random(255))
        image(rainbowHeartImg,1350+i*58,245,heartImg.width*rScale,heartImg.height*rScale)
      }
    }


    pop()
    /*
    for(var j=0; i<5; j++){
      image(emptyHeartImg,1350+j*58,245,emptyHeartImg.width*rScale,emptyHeartImg.height*rScale)
    }*/

    smi.draw("TO SPACE!!!",ship,1,5)
    smi.draw("???",ship,21,25)

    smi.draw("HA HA HA",vocal,23,27)
    smi.draw("BYE BYE",bass,35,39)

    smi.draw("I JUST...",ship,29,33)
    smi.draw("HANJAN?",soju,55,59)
    smi.draw("WOW",panty,60,64)
    smi.draw("REVENGE!",ship,67,71)
    /*
    smi.draw("AK!",vocal,69,71)
    smi.draw("OMG!",gtr,72,73)

    smi.draw("UK!",bass,73,74)
    smi.draw("!@#$!",drum,73,74)
    smi.draw("D**N!",keyboard,75,76)
    */


    fill(255)
    textSize(50)
    text('ALCOHOL    ' + score,190+wM,50+hM)
    text('TIME    ' + time,800+wM,50+hM)

    if(myFrameCount%30 == 0) {
      time++

    }

  }
  if(time>85){

    textSize(200)
    fill((sin(frameCount/6.5)+1.08)*255)
    text("GAME OVER",(mW+wM)/2,(mH+hM)/2)
  }
  mouse.draw()
}



function keyPressed(){
  console.log(keyCode)
  if(keyCode == 77){
    bgm.play()
  }
  if(keyCode===83 && isOpeningStart){
    isGameStart = true
  }
  else if(keyCode===80){
    bgm.stop()
    noLoop()
  }
}

function mouseClicked(){
  console.log(mouseX + ", " + mouseY)
  if(mouseX>1756 && mouseX<1838 && mouseY>90 && mouseY < 172){
    isOpeningStart = true
    bgm.play()
    // noCursor()

  }
  /*var mouseCord = []
  mouseCord.push(mouseX)
  mouseCord.push(mouseY)
  for (var i = 0;i<mouseCord.length;i++){
    fill(255,0,0)
    console.log("x : " + mouseCord[i], + "    y : " + mouseCord[i+1], mouseCord[i],mouseCord[i+1])
    text("x : " + mouseCord[i], + "    y : " + mouseCord[i+1], mouseCord[i],mouseCord[i+1])
  }*/
}
