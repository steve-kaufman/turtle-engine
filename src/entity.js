function Entity(x,y,width,height){
    
	// CollisonBox = ?;
	
	this.x = x || 0;
	this.y = y || 0;
	
	this.velocityX = 0;
	this.velocityY = 0;
	
	this.width = width || 32;
	this.height = height || 64;
	
	// this.sprite = ?;
	
	this.draw = function(ctx){
		
	}
	
	this.run = function(){
		var newX = this.x + this.velocityX;
		var newY = this.y + this.velocityY;
		
		//Test collations here on the new point and only move to them if the space is open
		
		this.x = newX;
		this.y = newY;
	}
}
