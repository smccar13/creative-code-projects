//console.log("hello")

let y = 0;
let speed = 4;

function setup(){
createCanvas(windowWidth,windowHeight)
background (255, 246, 161)
}

function draw(){
  let diameter = 40;
  for(let i = diameter/2; i < width; i+=diameter) {
//red value
  let r = map(mouseX, 0, width, 0, 255)
  
  //green value
  let g = map(mouseY, 0, height, 0, 255)
  
  let size = map(mouseX*mouseY, 0, width*height, 2, 40)
  
  fill(r, g, 150)
  noStroke()    
    ellipse(i, y, 20);
  }
  
  if(y > height + diameter){
    y = 0;
  }
  y+=speed;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}