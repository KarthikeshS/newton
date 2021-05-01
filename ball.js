class Ball{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
       // this.height = height;
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
       // rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}