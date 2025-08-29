//define angle and radius
let angle = 0;
let rad = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(195, 247, 148);
}
 
// Draw flower each time mouse is clicked
function mousePressed() {
//set flower size and number of petals
  let petalAngle = TWO_PI/7;
  let flowerSize = random(80, 200)
//random location
  let x = random(0, width);
  let y = random(0, height);

  push();
  translate(x, y);
  
  fill(255, random(0, 255), random(0, 255), 99);
  for (let i = 0; i < 7; i++) {
    ellipse(0, 0, flowerSize, flowerSize/4);
    rotate(petalAngle);
  }

  // flower center
  fill(255, random(0, 255), random(0, 60));
  circle(0, 0, flowerSize/3.5);

  pop();
}

function draw() {
  noStroke();
  //red value
  let r = map(mouseX, 0, width, 70, 123);
  //blue value
  let b = map(mouseY, 150, height, 0, 111);
  push();
  translate(width/2, height/2);
  fill(r, 128, b, 50);
  let x = rad * cos(angle);
  let y = rad * sin(angle);
  circle(x, y, 20);

  angle += 0.05;
  rad += 0.2;

  //clear screen when spiral fills window
    let maxRad = dist(0, 0, width/2, height/2);
  if (rad > maxRad) {
    background(195, 247, 148);
    rad = 0;
    angle = 0;
  }
  pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}