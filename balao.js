class balao{
    constructor(x,y){
        var config = {
            restitution: 1,
            stiffnesss: 0.5
        }
        this.body.x = this.body.x;
        this.body.y = this.body.y;

        this.imageB = loadImage("blue_balloon0.png");
        this.imageG = loadImage("green_balloon0.png");
        this.imageP = loadImage("pink_balloon0.png");
        this.imageR = loadImage("red_balloon0.png");
    }
    display(){
        imageMode(CENTER);
        
    }
}