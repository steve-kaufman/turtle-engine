var images = [
    'test_images/grass.png'
    ];

function init(){
    engine.world.gravity.y = 0;
    
    Canvas.create();
    
    for(var i in images){
        images[i] = new Sprite(images[i]);
    }
    
    ground = new Entity(0,0,64,64);//, {isStatic : true});
    ground.sprite = images[0];
    ground.rotates = true;
    
    
    Render.start();
    Update.start();
}

function render(){
    Canvas.ctx.clear();

    ground.render(true);

}

var angle = 0;
function update(){
    //Run what needs to be calculated for each entity on each tick
    
    angle = (angle + 1) % 360;
    Matter.Body.setAngle(ground.physical, angle * (Math.PI / 180))
    
    for(var i in Entities){
        Entities[i].update();
    }
}

$(document).ready(init());
