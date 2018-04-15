# turtle-engine

This is a two dimensional game engine that utilizes matter.js (liabru/matter-js), HTML5 canvas, and the Electron npm library.

In order to use this game engine, clone the repository, and run

    sudo npm install
    sudo npm install --save-dev electron
    npm start
    
If all was successful, you should see a window appear that is roughly 2/3 the dimensions of your screen.
This window should display some sort of standard examples of the capabilities of this engine.

Note that the 'main.js' file in the root directory of the engine is used to create the window and is not meant to be used to edit content.
You can control the engine using the javascript found in the /src folder.
