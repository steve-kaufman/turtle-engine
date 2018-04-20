//tps (tick per second) is the tickrate for your game
tps = 30;

entities = [];

function init(){
    Canvas.create();
        
    Render.start();
	
	running = true;
	
	//Run a tick based on tps
	mainLoop = setInterval(tick,tps * 1000);
}

function render(){
    Canvas.ctx.clear();
    //Do all rendering below here
}

function tick(){
	//If game has stopped stop the ticks
	if(!running) {
		clearInterval(mainLoop);
		Render.stop();
	}
	
	//Run what needs to be calculated for each entity on each tick
	for(entity in entities){
		entity.run();
	}
}

$(document).ready(init());
