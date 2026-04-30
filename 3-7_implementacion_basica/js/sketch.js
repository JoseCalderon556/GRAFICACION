
function setup(){
  createCanvas(900,600,WEBGL);
}

function draw(){
  background(150);
  
  lights();
  orbitControl();

  let t = frameCount * 0.02;

  // Ejercicio 1: Cubo Animado
  push();
  translate(-250, -200, 0);
  fill(155, 210, 80);
  rotateX(t);
  rotateY(t);
  box(100);
  pop();


  // Ejercicio 2: Escena Con 3 Objetos
  
  // Cubo
  push();
  translate(-250, 100, 0);
  fill(255, 100, 100);
  rotateY(t);
  rotateZ(t);
  box(80);
  pop();

  // Esfera
  push();
  translate(0, 100, 0);
  fill(100, 255, 100);
  rotateX(t);
  rotateY(t);
  sphere(60);
  pop();

  // Cono
  push();
  translate(250, 100, 0);
  fill(100, 100, 255);
  rotateX(t);
  rotateY(t);
  rotateZ(t);
  cone(50, 100);
  pop();


  // Ejercicio 3: Escena Interactiva
  
  // Objeto 1
  push();
  translate(-200, 300, 0);
  rotateY(t);
  fill(255, 200, 0);
  box(70);
  pop();

  // Objeto 2
  push();
  translate(0, 300, 0);
  rotateX(t);
  fill(0, 200, 255);
  sphere(50);
  pop();

  // Objeto 3
  push();
  translate(200, 300, 0);
  rotateZ(t);
  fill(255, 0, 200);
  cone(50, 90);
  pop();
}

/*
  1. ¿Qué hace draw()?
    Es la función que se ejecuta continuamente en bucle. Se encarga de actualizar y renderizar la escena en cada cuadro, permitiendo animaciones y cambios dinámicos.
  2. ¿Por qué se usa frameCount?
    Porque proporciona un contador de cuadros que aumenta automáticamente. 
    Se usa para generar animaciones en función del tiempo, por ejemplo, controlar rotaciones o cambios de color.
  3. ¿Qué pasa si no usamos push()?
    Las transformaciones se acumulan. Esto provoca que los objetos siguientes se vean afectados por las transformaciones anteriores, generando resultados incorrectos.
  4. ¿Qué controla orbitControl()?
    Permite controlar la cámara con el mouse. Se puede rotar, acercar o alejar la vista de la escena de manera interactiva.
  5. ¿Qué diferencia hay entre mover objeto y cámara?
    Mover objeto: cambia la posición del objeto dentro de la escena.
    Mover cámara: cambia el punto de vista desde el cual se observa la escena, sin alterar la posición real de los objetos.
*/