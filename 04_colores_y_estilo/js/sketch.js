function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(255);
  noStroke();

  let stripeHeight = height / 5;

  //Bandera
  // Celeste
  fill(91, 206, 250);
  rect(0, 0, width, stripeHeight);
  // Rosa
  fill(245, 169, 184);
  rect(0, stripeHeight, width, stripeHeight);
  // Blanca
  fill(255);
  rect(0, 2 * stripeHeight, width, stripeHeight);
  // Rosa
  fill(245, 169, 184);
  rect(0, 3 * stripeHeight, width, stripeHeight);
  // Celeste
  fill(91, 206, 250);
  rect(0, 4 * stripeHeight, width, stripeHeight);

  // Circulos
  fill(255, 0, 0);
  circle(100, 150, 50);

  fill(0, 255, 0);
  circle(200, 150, 50);

  fill(0, 0, 255);
  circle(300, 150, 50);

  // Borde
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(50, 50, 200, 100);

  // Figura
  noFill();
  stroke(150);
  strokeWeight(2);
  ellipse(400, 150, 80, 80);

  // Degradado
  noStroke();
  for (let i = 0; i < width; i++) {
    let c = map(i, 0, width, 0, 255);
    fill(c, 0, 255 - c);
    rect(i, 250, 1, 50);
  }

  // Arcoiris HSB
  colorMode(HSB);
  for (let i = 0; i < width; i++) {
    stroke(i % 360, 100, 100);
    line(i, 0, i, height);
  }
  
}
