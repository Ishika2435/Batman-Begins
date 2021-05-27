class Drop{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.2,
            friction:0.1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.rain=Bodies.circle(x, y, r/2, options);
        World.add(world, this.rain)
    }

    update(){
       if(this.rain.position.y > height){
           Matter.Body.setPosition(this.rain, {x:random(0.400), y:random(400)})
       }
     }
     
     display(){
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x, this.rain.position.y, 20,20);    
     }
    }