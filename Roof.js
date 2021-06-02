class Roof {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(400,100,400,30,options);
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown")
      rect(pos.x, pos.y, 400,30);
      pop(); 
    }
  }
