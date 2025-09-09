let c1;
let c2;

function setup() {
  createCanvas(400, 400);

  c1 = color(random(255), random(255), random(255));
  c2 = color(random(255), random(255), random(255));
  drawRectangles();
}

function drawRectangles(){
   let stepSize = width/19
   for(i = 0; i < 17; i++){
     let gradiation = i/17
     let colors = lerpColor(c1, c2, gradiation)
     stroke(255)
     fill(colors)
     rect(i*stepSize+stepSize, stepSize, stepSize, 400-(stepSize*2))
  }}


function randomizeColors(){
  c1 = color(random(255), random(255), random(255));
  c2 = color(random(255), random(255), random(255));
  drawRectangles()
}
  function mousePressed(){
    randomizeColors();
  }