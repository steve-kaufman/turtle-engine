var Render = {
    framerate : 30,
    running : false,
    start : function(){
        this.run();
    },
    stop : function(){
        this.running = false;
    },
    
    run : function(){
        if(window.render) window.render();
        if(Render.running) setTimeout(Render.run, 1000 / Render.framerate);
    }
};

var Update = {
    framerate : 30,
    running : true,
    start : function(){
        this.run();
    },
    stop : function(){
        this.running = false;
    },
    
    run : function(){
        if(window.update) window.update();
        if(Update.running) setTimeout(Update.run, 1000 / Update.framerate);
    }
};
