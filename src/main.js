//tps (tick per second) is the tickrate for your game
tps = 30;

entities = [];

function init(){
    Canvas.create();
        
    Render.start();
	Update.start();
}

function render(){
    Canvas.ctx.clear();
    //Do all rendering below here
}

function update(){
	//Run what needs to be calculated for each entity on each tick
	for(entity in entities){
		entity.update();
	}
}

$(document).ready(init());
