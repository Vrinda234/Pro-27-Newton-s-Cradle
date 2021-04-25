class ground{
    constructor(x,y,width,height){
      var options={
          isStatic:true
      }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    World.add(world,this.body)
    }
    display(){
      var p1 = this.body.position
      push()
      translate(p1.x,p1.y)
      rectMode(CENTER)
      rect(0,0,this.width,this.height)
      pop()


    }
}