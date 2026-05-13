let tipoLuz = 1;

function setup() {
  createCanvas(1000, 600, WEBGL);
}

function draw() {
  background(15);
  orbitControl();

  // Cambiar tipo de luz
  if (keyIsPressed) {

    if (key == '1') {
      tipoLuz = 1;
    }

    if (key == '2') {
      tipoLuz = 2;
    }

    if (key == '3') {
      tipoLuz = 3;
    }
  }

  // Tipos de iluminación
  if (tipoLuz == 1) {
    ambientLight(120);
  }

  if (tipoLuz == 2) {
    directionalLight(255, 255, 255, 1, 1, -1);
  }

  if (tipoLuz == 3) {
    pointLight(
      255,
      255,
      255,
      mouseX - width / 2,
      mouseY - height / 2,
      200
    );
  }

  // Luz ambiental general
  ambientLight(60);
  noStroke();
  rotateY(frameCount * 0.01);

  // Ejercicio 1. Objeto con relleno homogéneo

  push();
  translate(-350, -120, 0);
  fill(0, 0, 255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(120);
  pop();

  // Ejercicio 2. Esfera con iluminación

  push();
  translate(0, -120, 0);
  ambientMaterial(200);
  sphere(90);
  pop();

  // Ejercicio 3. Comparación de materiales

  // Cubo fill()
  push();
  translate(350, -120, 0);
  fill(255, 0, 0);
  box(110);
  pop();

  // Esfera ambientMaterial()
  push();
  translate(-180, 170, 0);
  ambientMaterial(0, 255, 0);
  sphere(75);
  pop();

  // Toroide specularMaterial()
  push();
  translate(180, 170, 0);
  specularMaterial(0, 0, 255);
  torus(70, 25);
  pop();

}

/*
  1. ¿Qué diferencia hay entre relleno e iluminación?
    El relleno (fill()) únicamente aplica un color uniforme al objeto, mientras que la iluminación modifica cómo se observa el objeto según las luces presentes en la escena y la orientación de su superficie.
  2. ¿Por qué un objeto con solo color puede verse plano?
    Porque no existen efectos de luz y sombra que permitan percibir profundidad, volumen y relieve en la superficie del objeto.
  3. ¿Qué función cumple la normal de una superficie?
    La normal indica la dirección perpendicular de una superficie y se utiliza para calcular cómo incide la luz sobre el objeto.
  4. ¿Qué representa el producto punto en iluminación?
    Representa el ángulo entre la dirección de la luz y la normal de la superficie, permitiendo calcular la intensidad de iluminación que recibe el objeto.
  5. ¿Qué diferencia visual existe entre ambientMaterial() y specularMaterial()?
    ambientMaterial() produce una apariencia mate y uniforme, mientras que specularMaterial() genera reflejos brillantes y efectos similares a superficies pulidas o metálicas.
*/