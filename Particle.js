class Particle{
	constructor(x,y){
	var options={
	restitution:0.4,
	isStatic:false
	}
	this.r=10
	this.body=Bodies.circle(x,y,this.r,options);
	this.color=color(random(0,255),random(0,255),random(0,255));
	World.add(world,this.body);
	}
	display(){
		/*var pos=this.body.position;
		var angle=this.body.angle;*/
		push();
		
		rotate(this.body.angle);
		translate(this.body.position.x,this.body.position.y)
		ellipseMode(RADIUS);
		fill(this.color);
		ellipse(0,0,this.r,this.r);
		pop();
	}
}