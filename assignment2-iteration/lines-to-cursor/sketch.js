function setup() {
  createCanvas(400, 400);
  }

  function draw(){
  background(220)
  for(i = 0; i < 10; i++){
  let lineSpacing = width/10
  let margin = width/20
  strokeWeight(2)
  line(mouseX, mouseY, (lineSpacing * i) + margin, margin)}
}
