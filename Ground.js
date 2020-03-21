class Ground{
  constructor(x,y,width,height){

  var groundoptions = { 
      isStatic:'true'
  }

  this.groundbody= Bodies.rectangle(x,y,width,height,groundoptions)
  this.width=width;
  this.height=height;
  this.image=loadImage("Tank.png");
 

  World.add(world,this.groundbody);
}
display(){
  
  var pos =this.groundbody.position;
  push();
  translate(pos.x,pos.y);
 imageMode(CENTER);
  fill(249);
  image(this.image,0,0,this.width,this.height);
  pop();
}
}
