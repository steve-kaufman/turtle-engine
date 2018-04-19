var Camera = {
	x : 0,
	y : 0,
    
	scale : 0,
	
	vectorX : 0,
	vectorY : 0,
	
	speed : 5,
	
	tick : function(){
		this.x += this.vectorX * this.speed;
		this.y += this.vectorY * this.speed;
	},
  
    getX : function(){
        return this.x;
    },

    getY : function(){
        return this.y;
    },

    getScale : function(){
        return this.scale;
    },

    setX : function(x){
        this.x = x;
    },

    setY : function(y){
        this.y = y;
    },

    setScale : function(scale){
        this.scale = scale;
    },

    setVelX : function(vel){
        this.vectorX = vel;
    },

    setVelY : function(vel){
        this.vectorY = vel;
    }
};