function SpriteSheet(filepath,width,height){
	
	var sheet = new Image();
	sheet.src = filepath;
	
	var sprites = [0][0];
	
	for(int x; x < sheet.width/width; x++){
		for(int y; y < sheet.height/height; y++){
			
		}
	}
	
	var this.width = width;
	var this.height = height;
	
	this.getSprite = function(x,y){
		return sprites[x][y];
	}
}
