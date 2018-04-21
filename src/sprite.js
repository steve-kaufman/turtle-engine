function Sprite(filepath){
    this.loaded = false;
    
    this.image = document.createElement('canvas');
    
    var self = this;
    
    function load(){
        self.image.width = self.img.width;
        self.image.height = self.img.height;
        self.image.getContext('2d').drawImage(self.img, 0, 0);
        self.loaded = true;
    }
    this.img = new Image();
    this.img.onload = load;
    this.img.src = filepath;
    
    
    
    //drawing methods
    this.draw = function(x, y, width, height, canvas){
        x = x || 0;
        y = y || 0;
        width = width || this.image.width;
        height = height || this.image.height;
        canvas = canvas || Canvas.canvas;
        
        canvas.ctx.save();
        canvas.ctx.translate(x, y);
        canvas.ctx.drawImage(this.image, 0, 0, width, height);
        canvas.ctx.restore();
    };
    
    this.drawPattern = function(x, y, width, height, canvas){
        if(!this.pattern) 
            this.pattern = Canvas.ctx.createPattern(this.img, 'repeat');
        x = x || 0;
        y = y || 0;
        width = width || this.img.width;
        height = height || this.img.height;
        canvas = canvas || Canvas.canvas;
        
        canvas.ctx.save();
        canvas.ctx.translate(x, y);
        canvas.ctx.fillStyle = this.pattern;
        canvas.ctx.fillRect(0, 0, width, height);
        canvas.ctx.restore();
    };
    
    this.drawAngled = function(angle, x, y, width, height, canvas, isPattern){
        angle = angle || 0;
        x = x || 0;
        y = y || 0;
        width = width || this.img.width;
        height = height || this.img.width;
        canvas = canvas || Canvas.canvas;
        
        canvas.ctx.save();
        canvas.ctx.translate(x + width / 2, y + height / 2);
        canvas.ctx.rotate(angle * (Math.PI / 180));
        var args = [-(width / 2), -(height / 2), width, height, canvas];
        if(isPattern) this.drawPattern.apply(this, args);
        else this.draw.apply(this, args);
        canvas.ctx.restore();
    };
}