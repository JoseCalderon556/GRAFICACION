let x = 50, y = 120;
let vx = 2, vy = 1;
let w = 80, h = 50;
let seguirMouse = false;
let a = 0.05;
let tx = 0, ty = 0;

function setup() {
 createCanvas(600, 300);
}

function draw() {
 background(240);

  // seguimiento suave
  if (seguirMouse) {
    x += a * (mouseX - x);
    y += a * (mouseY - y);
  } else {
    // movimiento normal
    x += vx;
    y += vy;
  }

  // rebote correcto
  if (x < 0 || x + w > width) {
    vx *= -1;
  }
  if (y < 0 || y + h > height) {
    vy *= -1;
  }

  // objeto compuesto
  push();
  translate(tx, ty);
  // cuerpo
  rect(x, y, w, h);
  // cabeza
  ellipse(x + w / 2, y - 20, 40, 40);
  // ojos
  ellipse(x + w / 2 - 8, y - 25, 5, 5);
  ellipse(x + w / 2 + 8, y - 25, 5, 5);

  pop();
}

// controles
function keyPressed() {
  if (key === 'm') {
    seguirMouse = !seguirMouse; // activar-desactivar seguimiento
  }
  // mover objeto compuesto
  if (keyCode === LEFT_ARROW) tx -= 10;
  if (keyCode === RIGHT_ARROW) tx += 10;
  if (keyCode === UP_ARROW) ty -= 10;
  if (keyCode === DOWN_ARROW) ty += 10;
}


/*1. ¿Cuál es la diferencia entre sumar tx a cada figura y usar translate(tx,0)?
    Sumar tx mueve cada figura individualmente; translate() mueve todo el sistema de coordenadas, manteniendo el objeto unido automáticamente.
  2. Si vy es positivo, ¿en qué dirección se mueve el objeto en p5.js y por qué?
    Hacia abajo, porque en p5.js el eje Y crece hacia abajo en la pantalla.
  3. ¿Qué ecuación describe la posición X del objeto si tx += 2?
    Es un movimiento lineal: 𝑥(𝑡)= 𝑥0 + 2𝑡
*/