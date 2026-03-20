let ang = 0;
let palabra = "GRAFICACION";

function setup(){
  createCanvas(600,300);
  textAlign(CENTER, CENTER);
}

function draw(){
  background(240);

  // texto rotando
  push();
  translate(width/2, height/2); // origen en el centro
  rotate(ang);

  textSize(32);
  fill(0);
  text("Graficacion 2D", 0, 0);

  pop();

  ang += 0.02;

  // Palabra interactiva
  let x = 50;

  for(let i = 0; i < palabra.length; i++){
    let d = dist(mouseX, mouseY, x, 250);

    // tamaño según distancia
    let s = map(d, 0, 200, 60, 15);

    textSize(s);
    text(palabra[i], x, 250);

    x += 25;
  }

  // Palabra HOLA geometrica
  push();
  translate(80, 150);
  stroke(0);
  strokeWeight(2);
  noFill();

  // H
  line(0,-20, 0,20);
  line(30,-20, 30,20);
  line(0,0, 30,0);
  // O
  ellipse(80,0,40,40);
  // L
  line(120,-20, 120,20);
  line(120,20, 150,20);
  // A
  line(180,20, 195,-20);
  line(195,-20, 210,20);
  line(188,0, 202,0);

  pop();
}

/*
  1. ¿Por qué el texto vectorial no pierde calidad?
  Porque está definido con ecuaciones matemáticas, no píxeles.

  2. ¿Qué función matemática usan las fuentes digitales?
  Usan curvas Bézier.

  3. ¿Diferencia entre raster y vector?
  Raster: píxeles (pierde calidad al escalar)
  Vector: matemático (no pierde calidad)
*/