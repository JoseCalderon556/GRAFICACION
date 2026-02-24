function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(255);
  noStroke();

  let stripeHeight = height / 5;

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
}
