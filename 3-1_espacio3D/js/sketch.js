
function setup(){
  createCanvas(900,600,WEBGL);
}

function draw(){
  background(210);
  orbitControl();

  // Ejes de referencia
  strokeWeight(2);
  stroke(255, 0, 0);
  line(0, 0, 0, 200, 0, 0);
  stroke(0, 255, 0);
  line(0, 0, 0, 0, 200, 0);
  stroke(0, 0, 255);
  line(0, 0, 0, 0, 0, 200);

  // Cubo en el centro rotando
  push();
  rotateX(frameCount*0.02);
  rotateY(frameCount*0.02);
  box(100);
  fill(120,89,210);
  pop();

  // Esfera debajo del cubo y cerca
  push();
  translate(0,150,150);
  rotateX(frameCount*0.01);
  sphere(50);
  pop();

  // Toroide
  push();
  translate(150,120,-170);
  rotateY(frameCount*0.02);
  torus(50,25);
  pop();
  
}

/*
  1. ¿Por qué una pantalla 2D puede mostrar objetos que parecen 3D? 
    Porque se aplican técnicas de proyección y representación que simulan la profundidad sobre un plano bidimensional. 
    Mediante sombras, tamaños relativos, perspectiva y superposición de objetos, interpretamos una tercera dimensión aunque físicamente solo existan dos.
  2. ¿Qué papel juega la coordenada z?
    Representa la profundidad. Indica qué tan lejos o cerca está un objeto respecto a la cámara.
  3. ¿Qué diferencia hay entre posición y proyección?
    La posición es la ubicación real de un objeto en el espacio 3D (x,y,z).
    La proyección es la transformación de esa posición tridimensional a coordenadas 2D (x,y) para poder mostrarla en la pantalla.
  4. ¿Por qué la perspectiva mejora la sensación de profundidad?
    Porque simula cómo el ojo humano percibe la realidad, osea que los objetos lejanos se ven más pequeños y las líneas paralelas parecen converger.
  5. ¿Qué función cumple la cámara en una escena 3D?
    Define el punto de vista desde el cual se observa la escena. 
    Determina qué objetos son visibles, su tamaño aparente, su posición en la pantalla y cómo se aplica la proyección
*/