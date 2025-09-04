function setup() {
  createCanvas(400, 400);
  background(220)
  
  let stepSize = width/7
  for(let x = 0; x < width; x+=stepSize) {
    ellipse(x+stepSize/2, 150, stepSize/2)
  }
}