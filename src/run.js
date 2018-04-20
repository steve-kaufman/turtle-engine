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
