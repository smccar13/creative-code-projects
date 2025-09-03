let speed = 4;
let diameter = 50;
let x = diameter/2;
// flowere coordinates
let fx
let fy

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
    drawFlower()
  }
  x += speed;
}

//draw flower when mouse pressed
function mousePressed() {
  fx = mouseX;
  fy = mouseY;
  drawFlower();
}

//draw flower in random location
 function drawFlower() {
    //set flower size and number of petals
  let petalAngle = TWO_PI/7;
  let flowerSize = random(80, 200)

  push();
  translate(fx, fy);
  
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
  //clear screen when key is pressed
  function keyPressed() {
    background(195, 247, 148)
  }