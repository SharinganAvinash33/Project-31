class Plinko{
	constructor(x,y){
	var options={
		isStatic:true
	}
	this.r=10;
	this.body=Bodies.circle(x,y,this.r,options);
	this.color=color(random(0,255),random(0,255),random(0,255))
	World.add(world,this.body)
	}
	display(){
	var pos=this.body.position;
	push()
	ellipseMode(RADIUS);
	fill("white");
	ellipse(pos.x,pos.y,10,10);
	pop()
	}
}