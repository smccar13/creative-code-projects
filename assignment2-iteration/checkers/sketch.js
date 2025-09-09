function setup() {
  createCanvas(400, 400);
  let rows = 8
  let columns = 8
  let stepSize = width / columns

  for (let i = 0; i < rows; i++) {
    for (let x = 0; x < columns; x++) {
      if ((i + x) % 2 == 0) {
        fill(255)
      } else {
        fill(0)
      }
      rect(x * stepSize, i * stepSize, stepSize, stepSize);
    }
  }
}
