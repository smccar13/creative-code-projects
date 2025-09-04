let speed = 6;
let diameter = 50;
let x = diameter/2;
// flower coordinates
let fx;
let fy;

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(195, 247, 148);

}

function draw() {
  noStroke();
  //red value
  let r = map(mouseX, 0, width, 0, 255);
  //blue value
  let b = map(mouseY, 150, height, 0, 255);
  fill(r, 128, b, 10);
  circle(x, height/8, 20);

  if (x >= width - diameter/2 || x < diameter/2) {
    speed = -speed;
  //random location
  fx = random(0, width);
  fy = random(height/8 + diameter, height)
    drawFlower(random(60, 200), TWO_PI/7)
  }
  x += speed;
}

//draw flower when mouse pressed
function mousePressed() {
  fx = mouseX;
  fy = mouseY;
  drawFlower(random(80, 200), TWO_PI/7);
}

//draw flower in random location
 function drawFlower(flowerSize, petalNumber) {
  push();
  translate(fx, fy);
  
  fill(255, random(0, 255), random(0, 255), 99);
  for (let i = 0; i < 7; i++) {
    ellipse(0, 0, flowerSize, flowerSize/4);
    rotate(petalNumber);
  }

  // flower center
  fill(255, random(0, 255), random(0, 60));
  circle(0, 0, flowerSize/3.5);

  pop();
  }
  //clear screen when key is pressed
  function keyPressed() {
    background(195, 247, 148)
  }