function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  frameRate(5);
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(100);
  line(random(0,width), random(0,height), random(0,width), random(0,height));
}