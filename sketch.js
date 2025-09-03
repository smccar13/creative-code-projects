let speed = 10;
let diameter = 50;
let x = diameter/2;

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(195, 247, 148);

}

function draw() {
  noStroke();
  //red value
  let r = map(mouseX, 0, width, 70, 123);
  //blue value
  let b = map(mouseY, 150, height, 0, 111);
  fill(r, 128, b, 10);
  circle(x, height/8, 20);

  if (x >= width - diameter/2 || x < diameter/2) {
    speed = -speed;
    drawFlower()
  }
  x += speed;
}

function mousePressed() {
  drawFlower();
}

//draw flower in random location
 function drawFlower() {
    //set flower size and number of petals
  let petalAngle = TWO_PI/7;
  let flowerSize = random(80, 200)
  //random location
  let x = random(0, width);
  let y = random(height/8 + diameter, height)
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
  //clear screen when key is pressed
  function keyPressed() {
    background(195, 247, 148)
  }