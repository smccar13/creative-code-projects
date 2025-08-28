//define angle and radius
let angle = 0;
let rad = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240, 218, 224);
}

function draw() {
  //green value
  let g = map(mouseX, 0, width, 100, 255)
  //blue value
  let b = map(mouseY, 150, height, 0, 200)
  translate(width/2, height/2);
  noStroke();
  fill(255, g, b);
  let x = rad * cos(angle);
  let y = rad * sin(angle);
  circle(x, y, 20);

  angle += 0.05;
  rad += 0.2;

  //clear screen when spiral fills window
    let maxRad = dist(0, 0, width/2, height/2);
  if (rad > maxRad) {
    background(240, 218, 224);
    rad = 0;
    angle = 0;
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}