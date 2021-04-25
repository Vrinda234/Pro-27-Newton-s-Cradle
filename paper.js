class paper {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body=Bodies.circle(this.x, this.y, (this.radius)/2, options)
        this.radius = radius;
        
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        strokeWeight(4)
        ellipse(0,0,this.radius,this.radius)
        fill(255,0,255)
        pop()
    }
}