function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(240);

  // Lineas
  // Con suavizado
  smooth();
  strokeWeight(8);
  stroke(0);
  line(50, 150, 150, 50);

  // Sin suavizado
  noSmooth();
  line(250, 150, 350, 50);

  //Circulos
  // Con suavizado
  smooth();
  fill(0, 150, 255);
  noStroke();
  circle(100, 170, 20);

  // Sin suavizado
  noSmooth();
  circle(300, 170, 20);

  //Pixel art
  noSmooth();
  let size = 10;

  for (let x = 150; x < 250; x += size) {
    for (let y = 20; y < 120; y += size) {

      if ((x + y) % 20 === 0) {
        fill(0);
      } else {
        fill(255, 100, 100);
      }

      rect(x, y, size, size);
    }
  }
}

