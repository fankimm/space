var myWidth = 500;
var myHeight = 500;
var d
function setup(){
  d = displayDensity()
  createCanvas(myWidth / d * 2,myHeight / d * 2 )
  background(255,0,0)
}
function draw(){
  fill(255)
  text(d,width / 2, height / 2)
}
