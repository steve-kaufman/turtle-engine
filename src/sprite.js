function Sprite(filepath){
    this.loaded = false;
    
    this.image = document.createElement('canvas');
    
    this.load = function(){
        this.image.width = this.img.width;
        this.image.height = this.img.height;
        this.image.getContext('2d').drawImage(this.img, 0, 0);
        this.loaded = true;
    };
    
    this.img = new Image();
    this.img.onload = this.load;
    this.img.src = filepath;
    
    //drawing methods
    this.draw = function(x, y, width, height, canvas){
        x = x || 0;
        y = y || 0;
        width = width || undefined;
        height = height || undefined;
        canvas = canvas || Canvas.canvas;
        
        canvas.ctx.save();
        canvas.ctx.translate(x, y);
        canvas.ctx.drawImage(this.image, 0, 0, width, height);
        canvas.ctx.restore();
    }
    
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
    }
    
    this.drawAngled = function(angle, x, y, width, height, canvas, isPattern){
        angle = angle || 0;
        x = x || 0;
        y = y || 0;
        width = width || this.img.width;
        height = height || this.img.width;
        
        canvas.ctx.save();
        canvas.ctx.translate(x + width / 2, y + height / 2);
        canvas.ctx.rotate(angle / (Math.PI * 180));
        var args = [x - width / 2, y - height / 2, width, height, canvas];
        if(isPattern) this.drawPattern.apply(this, args);
        else this.draw.apply(this, args);
        canvas.ctx.restore();
    }
}