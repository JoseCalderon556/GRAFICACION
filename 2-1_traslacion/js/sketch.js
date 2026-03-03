let x = 50, y = 120;
let vx = 2, vy = 1;
function setup() {
 createCanvas(600, 300);
}
function draw() {
 background(240);
 x += vx; // traslación acumulada
 y += vy;
 rect(x, y, 80, 50);
 if(x > width || x < 0){
    vx = -vx;
  }
  if(y > height || y < 0){
    vy = -vy;
  }
}