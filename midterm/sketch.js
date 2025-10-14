let rightFish, leftFish;
function preload() {
  rightFish = loadImage('rightFish.png');
  leftFish = loadImage('leftFish.png');
}

let fishies = [];
let bubbleGroups = [];
let minScale = 1;
let maxScale = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB)
  imageMode(CENTER);
  let numFish = height/22;
  for (let i = 0; i < numFish; i++) {
    let f = new Fish();
    fishies.push(f);
  }
}
function draw() {
  let brightness = map(sin(frameCount * 0.002), -1, 1, 20, 100);
  background(190, 50, brightness);

  for (let i = fishies.length - 1; i >= 0; i--) {
    let f = fishies[i];
    f.update(brightness);
    if (!f.onScreen) {
      fishies.splice(i, 1);
      fishies.push(new Fish());
    }
    f.draw();
  }
  
  //console.log("Number of fish: " + fishies.length)

  for (let i = 0; i < fishies.length; i++) {
    for (let j = i + 1; j < fishies.length; j++) {
      let f1 = fishies[i];
      let f2 = fishies[j];
      let newColor;
      let d = dist(f1.pos.x, f1.pos.y, f2.pos.x, f2.pos.y);
      let minDistX = (f1.size.x + f2.size.x) / 2;
      let minDistY = (f1.size.y + f2.size.y) / 2;
      if ((d < minDistX || d < minDistY) && f1.size.x < f2.size.x && !f1.collided) {
        newColor = lerpColor(f1.color, f2.color, 0.75);
        f1.color = newColor;
        bubbleGroups.push(new bubbleGroup(f1.pos.x, f1.pos.y));
        f1.collided = true;
      } else if ((d < minDistX || d < minDistY) && f2.size.x < f1.size.x && !f2.collided) {
        newColor = lerpColor(f2.color, f1.color, 0.75);
        f2.color = newColor;
        bubbleGroups.push(new bubbleGroup(f2.pos.x, f2.pos.y));
        f2.collided = true;
      }
    }
  }

  for (let i = 0; i < bubbleGroups.length; i++) {
    let bg = bubbleGroups[i];
    bg.update();
    if (!bg.alive) {
      bubbleGroups.splice(i, 1);
      i--;
    }
    bg.draw();
  }
}


class Fish {
  constructor() {
    minScale = height/400
    maxScale = height/80;
    this.dimensions = createVector(14,9);
    this.scale = random(minScale, maxScale);
    this.size = createVector(this.dimensions.x*this.scale,             this.dimensions.y*this.scale) 
    this.maxWidth = this.dimensions.x * maxScale 
    this.maxHeight = this.dimensions.y * maxScale 
    this.color = color(random(360), random(80,100), 100);
    this.vel = random(0.5, 4); 
    this.goRight = random([true, false]);

    if (this.goRight) {
    this.pos = createVector(-this.size.x, random(35, height -     this.maxHeight/2));
} else {
  this.pos = createVector(width + this.size.x, random(35, height - this.maxHeight/2));
}
    this.onScreen = true;
    this.collided = false;
  }

update(brightness) {
  let energy = map(brightness, 20, 100, 0.75, 2);
  let step = this.vel * energy;
  if (this.goRight) {
    this.pos.x += step;
  } else {
    this.pos.x -= step;
  }
  this.pos.y += sin(this.pos.x * 0.05) * 0.3; // bob
  this.checkBoundaries();
}


  draw() {
    tint(this.color);
    if (this.goRight == true){
      image(rightFish, this.pos.x, this.pos.y, this.size.x, this.size.y);} 
    else{
      image(leftFish, this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
    
  }

  checkBoundaries() {
if (this.goRight && this.pos.x > width + this.size.x / 2) {
  this.onScreen = false;
} else if (!this.goRight && this.pos.x < -this.size.x / 2) {
  this.onScreen = false;
}
  }
  
}



class bubbleGroup {
  constructor(xPos, yPos) {
    this.numBubbles = floor(random(3, 7))
    this.pos = createVector(xPos, yPos)
    this.bubbles = [];
    this.alive = true;
    
    for(let i = 0; i < this.numBubbles; i++) {
      this.bubbles.push(new Bubble(this.pos.x, this.pos.y))
    }
  }
  
  update() {
    for(let i = 0; i < this.bubbles.length; i++) {
      let b = this.bubbles[i]
      b.update();
      if(b.alive == false) {
        this.bubbles.splice(i, 1)
      }
    }
    
    if(this.bubbles.length == 0) {
      this.alive = false;
    }
  }
  
  draw(){
    for(let i = 0; i < this.bubbles.length; i++) {
      let b = this.bubbles[i]
      b.draw();
    }
  }
}

class Bubble {
  constructor(xPos, yPos) {
    this.pos = createVector(xPos, yPos)
    this.vel = createVector(random(-0.2, 0.2), random(-1, 0))
    this.size = random(height/1000, height/20)
    this.growthRate = random(0.1, 0.5)
    this.alive = true;
    this.opacity = random(0.01, 1)
  }
  
  update() {
    this.pos.add(this.vel)
    this.size += this.growthRate
    
    if(this.size > height/20){
      this.alive = false;
    }
  }
  
  draw() {
    if(this.alive) {
      noStroke()
      fill(187, 25, 100, this.opacity)
      circle(this.pos.x, this.pos.y, this.size)
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}