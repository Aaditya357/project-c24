class Stone{
	constructor(x,y)
	{
	// assign options to the rubber ball
		
	var options = {
		density: 12,
		friction: 0.8,
		restitution: 0.9
	}

		this.body=Bodies.rectangle(x,y,60,60, options)
		World.add(world, this.body);
        this.width = 200;
        this.height = 50;
	}
	display()
	{
        var pos = this.body.position;
			push()
			translate(pos.x,pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
            rect(0,0,this.width,this.height)
			pop()
	}

}