class Bob{

    constructor(x,y,radius){
      var options={
         restitution:1,
         friction:0,
         density:1.8
      }
 
      this.body= Bodies.circle(x,y,radius, options);
      World.add(world, this.body);

      this.radius=radius;
     }
     
     display(){
       push ()
       fill ("pink")
       ellipseMode(CENTER);
       ellipse (this.body.position.x, this.body.position.y, this.radius*2);
       pop ();
     }
 }    