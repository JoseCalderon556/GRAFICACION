
function setup(){
  createCanvas(900,600,WEBGL);
}

function draw(){
  background(150);
  orbitControl();

  let t = frameCount * 0.01;

  // Ejercicio 1: Figuras Basicas
  push();
  translate(-250, -200, 0);
  fill(255, 0, 0);
  box(100);
  pop();

  push();
  translate(250, -200, 0);
  fill(0, 0, 255);
  sphere(70);
  pop();


  // Ejercicio 2: Comparacion Geometrica
  // Cubo
  push();
  translate(-250, 50, 0);
  rotateX(t);
  fill(255, 150, 0);
  box(80);
  pop();

  // Cilindro
  push();
  translate(0, 50, 0);
  rotateY(t);
  fill(0, 255, 150);
  cylinder(40, 100);
  pop();

  // Cono
  push();
  translate(250, 50, 0);
  rotateZ(t);
  fill(150, 0, 255);
  cone(50, 100);
  pop();


  // Ejercicio 3: Esfera parametrica
  
  push();
  translate(0, 250, 0);
  rotateY(t);
  fill(255, 255, 0);

  let r = 80;
  let total = 20;

  for (let i = 0; i < total; i++) {
    let theta1 = map(i, 0, total, 0, PI);
    let theta2 = map(i + 1, 0, total, 0, PI);

    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j <= total; j++) {
      let phi = map(j, 0, total, 0, TWO_PI);

      let x1 = r * sin(theta1) * cos(phi);
      let y1 = r * cos(theta1);
      let z1 = r * sin(theta1) * sin(phi);

      let x2 = r * sin(theta2) * cos(phi);
      let y2 = r * cos(theta2);
      let z2 = r * sin(theta2) * sin(phi);

      vertex(x1, y1, z1);
      vertex(x2, y2, z2);
    }
    endShape();
  }
  pop();
}

/*
  1. ¿Qué diferencia hay entre ecuación y forma paramétrica?
    La ecuación expresa una relación directa entre variables.
    La forma paramétrica describe la figura mediante parámetros, generando puntos paso a paso. Es más útil en gráficos porque permite recorrer y construir la superficie.
  2. ¿Por qué la esfera usa dos ángulos?
    Porque es una superficie en 3D. Se necesitan dos parámetros para cubrirla completamente:
    θ: controla la altura
    ϕ: controla la rotación alrededor del eje
    Con ambos se puede generar cualquier punto de la esfera.
  3. ¿Qué figura es más compleja matemáticamente?
    La esfera paramétrica es más compleja que un cubo o cilindro, porque requiere funciones trigonométricas y el manejo de dos variables para definir su superficie.
  4. ¿Cómo se construye una malla?
    Se genera un conjunto de vértices organizados en filas y columnas y luego se conectan mediante primitivas como TRIANGLE_STRIP o triángulos individuales para formar superficies.
  5. ¿Qué pasaría sin normales?
    Sin normales no hay cálculo correcto de iluminación. El objeto se vería plano o mal sombreado, sin distinguir bien la profundidad ni la orientación de las superficies.
*/