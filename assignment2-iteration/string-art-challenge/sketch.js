function setup() {
  createCanvas(400, 400);
  background(255)
  let margin = width/20
  let lineSpacing = (width-margin)/7;
  
  for(i = 0; i < 8; i++){
  strokeWeight(4)
  line(margin, i*lineSpacing, margin+(i*lineSpacing), height-margin)
  }
}