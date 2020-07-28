var rectangle1,rectangle2
function setup() {
  createCanvas(800,400);
 rectangle1=createSprite(100,100,80,30)
 rectangle2=createSprite(200,200,100,80)
}

function draw() {
  background(0,0,0);
  rectangle1.x=mouseX
  rectangle1.y=mouseY
  if(rectangle1.x-rectangle2.x<rectangle1.width/2+rectangle2.width/2&&
    rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2&&
    rectangle1.y-rectangle2.y<rectangle1.height/2+rectangle2.height/2&&
    rectangle2.y-rectangle1.y<rectangle1.height/2+rectangle2.height/2) {
  rectangle1.shapeColor="red"
  rectangle2.shapeColor="blue"
  } 
  else{
  rectangle1.shapeColor="green"
  rectangle2.shapeColor="white"
  } 
  drawSprites();
}