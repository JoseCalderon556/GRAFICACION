let pos, escala = 1, ang = 0, sh = 0;
let dragging = false;

// curva (rayo)
let pts = [];
let selected = -1;

// edificios
let edificios = [];

function setup(){
  createCanvas(900,500);
  pos = createVector(200,350);

  pts = [
    createVector(250,300),
    createVector(350,200),
    createVector(500,250),
    createVector(700,200)
  ];

  for(let i=0;i<width;i+=80){
    edificios.push({
      x: i,
      h: random(80,150),
      caido: false,
      offset: 0
    });
  }
}

function draw(){
  background(200,220,255);

  interaccion();

  dibujarTexto();
  dibujarCiudad();

  push();
  aplicarTransformaciones();

  dibujarGodzilla();
  dibujarCurva();

  pop();
}

// INTERACCIÓN
// Lee teclas presionadas cada frame y modifica los valores de ángulo y shear acumulativamente.
// A/D rotan a Godzilla, Q/E aplican deformación horizontal.
function interaccion(){
  if(keyIsDown(65)) ang -= 0.05;
  if(keyIsDown(68)) ang += 0.05;

  if(keyIsDown(81)) sh -= 0.02;
  if(keyIsDown(69)) sh += 0.02;
}

// TRANSFORMACIONES
// Aplica al sistema de coordenadas de p5 una cadena de transformaciones afines en este orden:
//  translate: mueve el origen al cuerpo de Godzilla
//  rotate: gira todo alrededor de ese origen
//  shearX: inclina horizontalmente
//  scale: cambia el tamaño uniforme
// Todo lo que se dibuje después de esta función queda afectado por todas estas transformaciones a la vez.
function aplicarTransformaciones(){
  translate(pos.x, pos.y);
  rotate(ang);
  shearX(sh);
  scale(escala);
}

// CONVIERTE punto global en local
// Invierte exactamente el mismo orden de aplicarTransformaciones pero al revés, para saber en qué coordenada local cae un punto que está en coordenadas globales.
// Se usa para que los puntos rojos del rayo, que el mouse mueve en pantalla, se puedan dibujar y calcular dentro del espacio transformado del Godzilla.
// Pasos: restar traslación - invertir escala - invertir shear - invertir rotación.
function globalALocal(gx, gy){
  // restar traslación
  let dx = gx - pos.x;
  let dy = gy - pos.y;

  // invertir escala
  dx /= escala;
  dy /= escala;

  // invertir shearX
  dx -= dy * sh;

  // invertir rotación
  let lx =  dx * cos(-ang) - dy * sin(-ang);
  let ly =  dx * sin(-ang) + dy * cos(-ang);

  return createVector(lx, ly);
}

// GODZILLA
// Dibuja el cuerpo de Godzilla usando figuras primitivas en coordenadas locales (origen en el centro del cuerpo).
// Usa elipses para cuerpo y cabeza, círculos para ojos, líneas para brazos, piernas y cola, y triángulos para las púas de la espalda.
function dibujarGodzilla(){
  fill(60,140,80);

  ellipse(0,0,80,120);
  ellipse(0,-80,60,50);

  fill(0);
  circle(-10,-85,5);
  circle(10,-85,5);

  stroke(0);
  line(-30,-20,-60,-10);
  line(30,-20,60,-10);

  line(-15,60,-15,100);
  line(15,60,15,100);

  line(-40,40,-120,80);

  for(let i=-30;i<=30;i+=15){
    triangle(i,-20, i+5,-50, i+10,-20);
  }
}

// BOCA (LOCAL)
// Retorna la posición de la boca de Godzilla en coordenadas locales. 
// Es el punto de origen del rayo: siempre sale
// desde aquí sin importar las transformaciones aplicadas,
// porque todo está dentro del mismo push/pop.
function getBoca(){
  return createVector(0, -80);
}

// RAYO - FRACTAL - COLISIÓN
// Dibuja el rayo como una curva Bezier cúbica que sale de la boca y pasa por 3 puntos de control.
// Como los pts están en coordenadas globales y esta funcióncorre dentro del push/pop transformado, se convierten a locales con globalALocal() antes de usarlos.
// A lo largo de la curva se dibuja un fractal orientado según la tangente de la curva en ese punto, dando efecto de ramificación eléctrica.
// También llama a destruirEdificios() con la posición global de cada punto de la curva para detectar colisiones.
// Finalmente dibuja los puntos rojos de control (también convertidos a local para que se vean sobre la curva).
function dibujarCurva(){
  stroke(0,255,255);
  strokeWeight(2);
  noFill();

  let boca = getBoca();

  // convertir puntos globales - locales
  let p1 = globalALocal(pts[1].x, pts[1].y);
  let p2 = globalALocal(pts[2].x, pts[2].y);
  let p3 = globalALocal(pts[3].x, pts[3].y);

  bezier(
    boca.x, boca.y,
    p1.x, p1.y,
    p2.x, p2.y,
    p3.x, p3.y
  );

  for(let t=0; t<=1; t+=0.08){
    let x = bezierPoint(boca.x, p1.x, p2.x, p3.x, t);
    let y = bezierPoint(boca.y, p1.y, p2.y, p3.y, t);

    push();
    translate(x,y);

    let dx = bezierTangent(boca.x, p1.x, p2.x, p3.x, t);
    let dy = bezierTangent(boca.y, p1.y, p2.y, p3.y, t);
    rotate(atan2(dy, dx));

    dibujarFractal(20, 3);
    pop();

    destruirEdificios(x * escala + pos.x, y * escala + pos.y);
  }

  fill(255,0,0);
  noStroke();
  for(let i=1;i<pts.length;i++){
    let lp = globalALocal(pts[i].x, pts[i].y);
    circle(lp.x, lp.y, 10);
  }
}

// FRACTAL
// Dibuja recursivamente una rama que se bifurca en dos sub-ramas giradas +0.5 y -0.5 radianes, cada una con longitud reducida al 60% de la anterior.
// El parámetro 'nivel' controla la profundidad: a 0 solo dibuja la línea base sin más bifurcaciones.
// Se llama desde dibujarCurva() en cada punto del rayo, rotado según la tangente, dando el efecto de electricidad.
function dibujarFractal(len, nivel){
  stroke(0,255,255,150);
  strokeWeight(2);

  line(0,0,len,0);

  if(nivel > 0){
    push();
    translate(len,0);
    rotate(0.5);
    dibujarFractal(len*0.6, nivel-1);
    pop();

    push();
    translate(len,0);
    rotate(-0.5);
    dibujarFractal(len*0.6, nivel-1);
    pop();
  }
}

// DESTRUCCIÓN
// Recorre todos los edificios y comprueba si el punto (x,y) del rayo (en coordenadas globales) está dentro del área de un edificio: horizontalmente entre su x y x+50, y verticalmente por encima de su base (y > 350 - altura).
// Si colisiona y el edificio no estaba caído, lo marca como caído para que empiece a bajar en dibujarCiudad().
function destruirEdificios(x,y){
  for(let e of edificios){
    if(!e.caido){
      if(x > e.x && x < e.x+50 && y > 350 - e.h){
        e.caido = true;
      }
    }
  }
}

// CIUDAD
// Dibuja todos los edificios con sus ventanas y el suelo.
// Si un edificio está marcado como caído, incrementa su offset cada frame para que se hunda hacia abajo.
// Cada edificio se dibuja dentro de un push/translate para que las ventanas usen coordenadas relativas al edificio.
// Las ventanas tienen color amarillo (luz encendida) o gris oscuro (apagada) asignado aleatoriamente cada frame.
// Al final se dibuja el rectángulo del suelo que cubre toda la parte inferior del canvas desde y=350.
function dibujarCiudad(){
  fill(100);
  noStroke();

  for(let e of edificios){
    if(e.caido){
      e.offset += 2;
    }

    push();
    translate(e.x, e.offset);

    // edificio
    rect(0, 350 - e.h, 50, e.h);

    // ventanas
    for(let wy = 350 - e.h + 8; wy < 345; wy += 18){
      for(let wx = 6; wx < 44; wx += 14){
        fill(random() > 0.3 ? color(255, 240, 100) : color(50));
        rect(wx, wy, 8, 10);
      }
    }

    fill(100);

    pop();
    
  }
  // suelo
  fill(80);
  noStroke();
  rect(0, 350, width, height - 350);
}

// TEXTO
// Muestra en pantalla el título del proyecto, los controles disponibles y mi nombre. 
// Se dibuja antes de Godzilla para que quede por debajo de él visualmente.
function dibujarTexto(){
  fill(0);
  textSize(18);
  text("GODZILLA CIUDAD DESTRUIR JUEGO EPICO ACCION 2067",20,25);

  textSize(12);
  text(
  "Arrastrar: mover\nRueda: escala\nA/D: rotar\nQ/E: shear\nMover puntos rojos: rayo",
  20,50);

  text("Autor: Jose Amado Calderon Herrera",20,130);
}

// MOUSE
// Al hacer clic comprueba primero si el cursor está cerca del cuerpo de Godzilla (radio 80) para activar el arrastre.
// Luego revisa si el clic fue sobre alguno de los puntos rojos de control del rayo (radio 10) y guarda su índice en 'selected' para moverlo en mouseDragged().
function mousePressed(){
  if(dist(mouseX, mouseY, pos.x, pos.y) < 80){
    dragging = true;
  }

  for(let i=1;i<pts.length;i++){
    if(dist(mouseX, mouseY, pts[i].x, pts[i].y) < 10){
      selected = i;
    }
  }
}

// Si dragging está activo, mueve la posición de Godzilla siguiendo al cursor. Si hay un punto de control seleccionado, actualiza sus coordenadas globales con la posición del mouse.
// El rayo se actualiza automáticamente al siguiente frame porque dibujarCurva() convierte esos puntos a local.
function mouseDragged(){
  if(dragging){
    pos.x = mouseX;
    pos.y = mouseY;
  }

  if(selected != -1){
    pts[selected].x = mouseX;
    pts[selected].y = mouseY;
  }
}

// Desactiva el arrastre de Godzilla y deselecciona cualquier punto de control al soltar el botón del mouse.
function mouseReleased(){
  dragging = false;
  selected = -1;
}

// Ajusta la escala de Godzilla según la dirección de la rueda del mouse. Se limita entre 0.5 y 3 para evitar que quede demasiado pequeño o salga del canvas.
function mouseWheel(event){
  escala += event.delta * -0.001;
  escala = constrain(escala, 0.5, 3);
}

/*
  1. ¿Qué representa el ángulo en radianes?
  Es la medida de cuánto gira un objeto.
  0 = sin rotación
  π = media vuelta
  2π = vuelta completa
  Se usa porque es más preciso para cálculos matemáticos.

  2. ¿Por qué importa el orden de transformaciones?
  Porque cambia el resultado final.
  Ejemplo: Primero mover y luego rotar ≠ primero rotar y luego mover

  3. ¿Qué es recursión?
  Es cuando una función se llama a sí misma. Se usa para crear patrones como fractales Siempre necesita una condición para detenerse

  4. ¿Qué son los puntos de control en Bézier?
  Son puntos que no están en la curva, pero la “jalan” o moldean.
  Definen la forma del rayo (curva)
  Al moverlos, cambia la trayectoria 
*/