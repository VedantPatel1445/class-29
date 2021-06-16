class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 16, 0);
            if(pointA.x<200){
                strokeWeight(4);
                line(pointA.x-20, pointA.y+10, pointB.x-10, pointB.y-30);
                line(pointA.x-20,pointA.y+10,pointB.x+30,pointB.y-30);
                image(this.sling3,pointA.x-20,pointA.y-10,15,30);
            }
            else{
                strokeWeight(7);
                line(pointA.x+20, pointA.y+10, pointB.x-10, pointB.y-30);
                line(pointA.x+20,pointA.y+10,pointB.x+30,pointB.y-30);
                image(this.sling3,pointA.x+20,pointA.y-10,15,30);  
            }
        }
        image(this.sling1,200,25);
         image(this.sling2,170,20);

    }
    
}