var fix , move;


function setup() {
  createCanvas(1600,800);
 fix= createSprite(400, 200, 70, 50);
 move = createSprite(200,200,70,50)
fix.shapeColor="green";
move.shapeColor="green";
fix.debug=true;
move.debug=true;

}

function draw() {
  background(0);  
move.x=mouseX
move.y=mouseY
 if(move.x-fix.x<fix.width/2+move.width/2 && fix.x-move.x<fix.width/2+move.width/2 
  &&  
  move.y-fix.y<fix.height/2+move.height/2 && fix.y-move.y<fix.height/2+move.height/2 )
 { 
   
  fix.shapeColor="red";
 move.shapeColor="red";


 } else { 
   fix.shapeColor="green";
 move.shapeColor="green";}



  drawSprites();
}