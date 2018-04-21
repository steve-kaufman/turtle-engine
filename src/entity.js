var Entities = [];
function Entity(x, y, width, height, options){

    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 32;
    this.height = height || 32;
    options = options || {};

    var centerX = this.x + this.width / 2;
    var centerY = this.y + this.height / 2;
    this.physical = Matter.Bodies.rectangle(centerX, centerY, 
                                            this.width, this.height, 
                                            options);
    Matter.World.add(engine.world, this.physical);

    this.sprite = null;
    this.canvas = Canvas.canvas;
    this.render = function(isPattern){
        this.sprite.drawAngled(
            this.physical.angle / (Math.PI / 180), this.x, this.y, 
            this.width, this.height, this.canvas, isPattern
            );
    };

    this.rotates = false;
    this.update = function(){
        if(!this.rotates) Matter.Body.setAngle(this.physical, 0);
        this.x = Math.round(this.physical.position.x - this.width / 2);
        this.y = Math.round(this.physical.position.y - this.height / 2);
    };
    
    Entities.push(this);
}