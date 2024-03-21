class Mover { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-2,2), random(-2,2)) 
    this.acceleration = createVector(0,0); 
  }
  
  display(){ 
    noStroke(); 
    fill('white')
    ellipse(this.location.x+50/2, this.location.y+50/2, 100/2, 100/2);
    fill('green'); 
    let r = random(25,50);
    ellipse(this.location.x+50/2, this.location.y+75/2, 30/2, 15/2);
    fill('purple')
    ellipse(this.location.x+75/2, this.location.y+45/2, 30/2, 30/2);
    ellipse(this.location.x+25/2, this.location.y+45/2, 30/2, 30/2);
    fill('white')
    ellipse(this.location.x+25/2, this.location.y+45/2, 10/2, 10/2);
  } 
  
  update(){ 
    var mouse = createVector(mouseX, mouseY); 
    var dir = mouse.sub(this.location); 
    var topSpeed = 10
    dir.normalize(); 
    dir.mult(0.5); 
    this.velocity.add(this.acceleration); 
    this.velocity.add(dir); 
    this.velocity.limit(topSpeed) 
    this.location.add(this.velocity);
  } 
  
   cekUjung(){ 
    if ( this.location.x > windowWidth ) { 
      this.location.x = 0; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = windowWidth; 
    } 
   
    if ( this.location.y > windowHeight ) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = windowHeight; 
    } 
  } 
}

let movers = [];
let mouse;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i<10;i++){
    movers[i] = new Mover(random(windowWidth), random(windowHeight));   
  }
 
}

function draw() {
  background(220);
      
  fill('black')
      ellipse(mouseX, mouseY, 20,20)
    for (let i=0; i<5;i++){
      movers[i].cekUjung(); 
      movers[i].display(); 
      movers[i].update();    
  }
}