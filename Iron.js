class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
		
	var options = {
		density: 30,
		friction: 3,
		restitution: 0.8
	}

		this.body=Bodies.rectangle(x,y,60,60, options)
		World.add(world, this.body);
        this.width = 150;
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
			fill("silver");
            rect(0,0,this.width,this.height)
			pop()
	}

}