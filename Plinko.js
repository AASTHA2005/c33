class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
       // this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};
function mousePressed()
{
    if(gameState!=="end")
{
        count++;
    particle=new Particle(mouseX,10,10,10);
  }
}

if(particle!=null)
{
particle.display();

if(particle.body.position.y>760)
{
    if(particle.body.position.x < 300)
    {
        score=score+500;
        particle=null;
        if(count>=5) gameState ="end";
      }
   }
}