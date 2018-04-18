var Camera = function(){
	this.x = 0;
	this.y = 0;
	this.z = 0;
	
	this.vectorX = 0;
	this.vectorY = 0;
	
	this.speed = 5;
	
	this.tick = function(){
		this.x += this.vectorX * this.speed;
		this.y += this.vectorY * this.speed;
	}
  
  this.getX = function(){
    return this.x;
  }
  
  this.getY = function(){
    return this.y;
  }
  
  this.getZ = function(){
    return this.z;
  }
  
  this.setX = function(x){
    this.x = x;
  }
  
  this.setY = function(y){
    this.y = y;
  }
  
  this.setZ = function(z){
    this.z = z;
  }
  
  this.setVelX = function(vel){
    this.vectorX = vel;
  }
  
  this.setVelY = function(vel){
    this.vectorY = vel;
  }
}
