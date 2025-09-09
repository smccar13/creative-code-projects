function setup() {
  createCanvas(400, 400)
  background(255)
  
  let i = width*20
  
  for(x2 = -i; x2 < i; x2 += 20){
    line(width/2, -height/8, x2, height)
  }
}