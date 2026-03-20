let posiciones = [];
let retraso = {x: 0, y: 0};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  // Tamanio del circulo segun movimiento vertical
  let tam = map(mouseY, 0, height, 10, 100);
  fill(100, 150, 255);
  circle(100, 100, tam);

  // Linea desde el centro al mouse
  stroke(0);
  line(width/2, height/2, mouseX, mouseY);

  // Cambiar color si el mouse esta dentro de un circulo
  let d = dist(mouseX, mouseY, 300, 100);
  if (d < 40) {
    fill(255, 0, 0);
  } else {
    fill(0, 255, 0);
  }
  noStroke();
  circle(300, 100, 80);

  // Cuadrado con retraso
  retraso.x += (mouseX - retraso.x) * 0.05;
  retraso.y += (mouseY - retraso.y) * 0.05;
  fill(0);
  rect(retraso.x, retraso.y, 30, 30);

  // Estrellas alrededor del mouse
  fill(255, 200, 0);
  for (let i = 0; i < 8; i++) {
    let ang = TWO_PI / 8 * i;
    let x = mouseX + cos(ang) * 50;
    let y = mouseY + sin(ang) * 50;
    circle(x, y, 10);
  }

  // Efecto de repulsion
  for (let i = 0; i < posiciones.length; i++) {
    let px = posiciones[i].x;
    let py = posiciones[i].y;

    let d = dist(mouseX, mouseY, px, py);

    if (d < 80) {
      let ang = atan2(py - mouseY, px - mouseX);
      px += cos(ang) * 2;
      py += sin(ang) * 2;
    }

    fill(50);
    circle(px, py, 30);

    // actualizar posicion
    posiciones[i].x = px;
    posiciones[i].y = py;
  }
}

function mousePressed(){
  posiciones.push({x: mouseX, y: mouseY})
}
