function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  let cx = width / 2;
  let cy = height / 2;
  let r = 150;

  // Caratula
  stroke(0);
  strokeWeight(3);
  noFill();
  circle(cx, cy, r * 2);

  // Arco de 0 a HALF_PI
  stroke(255, 0, 0);
  strokeWeight(6);
  arc(cx, cy, r * 2.2, r * 2.2, 0, HALF_PI);

  // Arco de PI a TWO_PI
  stroke(0, 0, 255);
  arc(cx, cy, r * 2.4, r * 2.4, PI, TWO_PI);

  // 12 marcas del reloj
  stroke(0);
  strokeWeight(2);
  for (let i = 0; i < 12; i++) {
    let ang = TWO_PI / 12 * i;
    let x1 = cx + (r - 10) * cos(ang);
    let y1 = cy + (r - 10) * sin(ang);
    let x2 = cx + r * cos(ang);
    let y2 = cy + r * sin(ang);
    line(x1, y1, x2, y2);
  }

  // Tiempo real
  let s = second();
  let m = minute();
  let h = hour() % 12;

  // Conversion a angulos
  let angS = map(s, 0, 60, 0, TWO_PI);
  let angM = map(m, 0, 60, 0, TWO_PI);
  let angH = map(h, 0, 12, 0, TWO_PI);

  // Manecilla de segundos
  stroke(255, 0, 0);
  strokeWeight(2);
  line(cx, cy, cx + r * 0.9 * cos(angS - HALF_PI), cy + r * 0.9 * sin(angS - HALF_PI));

  // Manecilla de minutos
  stroke(0);
  strokeWeight(4);
  line(cx, cy, cx + r * 0.7 * cos(angM - HALF_PI), cy + r * 0.7 * sin(angM - HALF_PI));

  // Manecilla de horas
  stroke(0);
  strokeWeight(6);
  line(cx, cy, cx + r * 0.5 * cos(angH - HALF_PI), cy + r * 0.5 * sin(angH - HALF_PI));
}

