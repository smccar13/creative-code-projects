function setup() {
  createCanvas(400, 400);
  background(220)

  let stepSize = width/16;
  
  for(i = 0; i < 14; i++){
    let shade = map(i, 0, 14, 0, 255)
    fill(shade)
    rect(stepSize+stepSize*i, stepSize*14-stepSize*i, stepSize, stepSize+stepSize*i);
  }
}