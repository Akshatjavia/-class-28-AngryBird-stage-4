class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

        this.pointB = pointB;
    }

    display(){
       if(this.chain.pointB) {
           var pointA = this.chain.bodyA.position;
        //var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
       }
    }

    fly(){
        this.chain.pointB = null;
    }
    
}