function setup() {
  createCanvas(400, 400)
  background(255)
  
  let multiplier = 1.3
  let diameter = 20
  let circles = height
  
  for (let i = 0; i < circles; i++) {
    noFill()
    strokeWeight(i*1.5)
    circle(width / 2, height, diameter);
    diameter *= multiplier;
  }
}
