let modo = "perspective"; // "ortho" o "perspective"
let fov = 60;

function setup(){
  createCanvas(900,600,WEBGL);
}

function draw(){
  background(150);
  orbitControl();

  // Ejercicio 1: Comparacion Basica
  if (modo === "ortho") {
    ortho(-width/2, width/2, -height/2, height/2, -2000, 2000);
  } else {
    perspective(radians(fov), width/height, 1, 5000);
  }

  // Cubo izquierdo
  push();
  translate(-200, -200, 0);
  fill(255, 100, 100);
  box(100);
  pop();

  // Cubo derecho
  push();
  translate(200, -200, 0);
  fill(100, 100, 255);
  box(100);
  pop();

  // Ejercicio 2: Profundidad Real
  // Objeto lejos
  push();
  translate(0, 0, -300);
  fill(255, 0, 0);
  box(80);
  pop();

  // Objeto medio
  push();
  translate(0, 0, 0);
  fill(0, 255, 0);
  box(80);
  pop();

  // Objeto cerca
  push();
  translate(0, 0, 300);
  fill(0, 0, 255);
  box(80);
  pop();

  // Ejercicio 3: Mini Simulador
  push();
  translate(0, 250, 0);
  rotateY(frameCount * 0.01);
  fill(255, 200, 0);
  cone(80, 120);
  pop();
}

function keyPressed() {
  if (key === '1') modo = "ortho";
  if (key === '2') modo = "perspective";

  if (key === 'f' || key === 'F') {
    fov += 5;
  }

  if (key === 'v' || key === 'V') {
    fov -= 5;
  }

  fov = constrain(fov, 10, 150);
}

/*
  1. ¿Por qué necesitamos proyectar?
    Porque los objetos están definidos en 3D y la pantalla es 2D. 
    La proyección permite transformar las coordenadas tridimensionales a un plano bidimensional para poder visualizarlas.
  2. ¿Qué pasa si ignoramos z?
    Se pierde la profundidad. Todos los objetos se representarían como si estuvieran en el mismo plano, 
    sin distinguir cuál está delante o detrás.
  3. ¿Por qué la perspectiva es más realista?
    Porque imita la visión humana, osea que los objetos lejanos se ven más pequeños y las líneas tienden a converger. 
    Esto genera una sensación natural de profundidad.
  4. ¿Qué controla el FOV?
    Controla qué tan amplia es la vista de la cámara. Un FOV grande muestra más escena con efecto de distorsión; 
    uno pequeño muestra menos pero con apariencia más acercada.
  5. ¿Qué pasaría sin cámara?
    No habría un punto de vista definido. No se podría determinar cómo ni desde dónde observar la escena, 
    por lo que no sería posible proyectar correctamente los objetos en pantalla.
*/