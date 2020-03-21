// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var backgroundImage
function preload(){
    backgroundImage= loadImage("Background.png");

}
var tanker
var ground

function setup() {
    var canvas= createCanvas(1000,600)
    engine = Engine.create();
    world = engine.world;
ground= new Ground(500,500,1000,10)

    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
tanker =new Tanker(100,10,100,100)

}

function draw() {
     background(backgroundImage);
    Engine.update(engine);
  tanker.display();
    ground.display();
    
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
        // Call the shoot method for the cannon.
}