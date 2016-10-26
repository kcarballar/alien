function setup() {
  createCanvas (480, 270);
}

function draw() {
  background (100,0,200);
  ellipseMode (CENTER);
  rectMode (CENTER);
  
  //Body
  fill(255,0,255);
  rect(240,160,40,70);
  
  //head
  fill(0,255,0,180);
  ellipse(240,115, 60,60);
  
  //eyes
  fill (0,0,255)
  ellipse(225, 115, 20, 9);
  ellipse(256, 115, 16,25);
  
  //legs
  line(230,195,220,205);
  line(250,195,260,205);
  
}