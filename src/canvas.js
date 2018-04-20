var Canvas = {
    canvas : null,
    ctx : null,
    create : function(x, y, width, height){
        x = x || 0;
        y = y || 0;
        width = width || window.innerWidth;
        height = height || window.innerHeight;
        
        this.canvas = document.createElement('canvas');
        this.canvas.left = x;
        this.canvas.top = y;
        this.canvas.width = width;
        this.canvas.height = height;
        document.body.insertBefore(this.canvas, null);
        
        this.ctx = this.canvas.getContext('2d');
        this.ctx.clear = function(){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        
        this.canvas.ctx = this.ctx;
        
        return this.canvas;
    }
};

var Render = {
    framerate : 30,
    flag : false,
    start : function(){
        this.run();
    },
    stop : function(){
        this.flag = true;
    },
    
    run : function(){
        if(window.render) window.render();
        if(!Render.flag) setTimeout(Render.run, 1000 / Render.framerate);
    }
};