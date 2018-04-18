/*
TicksPerMillisecond = 30;
StartupFunction() {
	CreateCanvace();
	DrawLoadingScreen()
	LoadAllSpreadsheetsIntoRam();
	DrawMainMenu();
	LastTime = getTime();
	while (gameRunning) {
		switch (GameMode) {
			case 0:
				break;
			case 1:
				NewTime = getTime();
				delta += NewTime - LastTime;
				if (delta > 1 / TicksPerMillisecond) {
					delta = 0;
					tick();
				}
				keyPressFunctions();
				DrawScreen();
				break;
      default:
        gameRunning = false;
        break;
		}
	}
}
LoadAllSpreadsheetsIntoRam() {
	for each thing to load update the loading screen with what it is loading
	create a object
	for each spreadsheet with the size of each image and the size of the sheet
}
tick() {
	run your code
	for each tick here
}
draw() {
	clearScreen();
	run all of your drawing here
}
*/


const {app, BrowserWindow} = require('electron');

const tickPerSecond = 30;

GameMode = 1;
gameRunning = true;

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		height: 600,
		width: 800
	});

	mainWindow.loadURL('file://' + __dirname + '/canvas.html');
	
	startup()
	lastTime = getTime();
	while (gameRunning) {
		switch (GameMode) {
		case 0:
			//menu
			break;
		case 1:
			var newTime = getTime();
			var delta += newTime - lastTime;
			lastTime = newTime;
			if (delta > 1 / TicksPerMillisecond) {
				delta = 0;
				tick();
			}
			keyPressFunctions();
			DrawScreen();
			break;
		default:
			gameRunning = false;
			break;
		}
	}
});

function getTime(){
	return new Date().getTime();
}

function startup(){
	camera = new Camera();
	
	entitys = [];
	
	addKeyListener();
	
	var anchor = document.getElementById('canvasAnchor');
	
	canvas = document.createElement('canvas');
	document.body.insertBefore(canvas, anchor);
	
	ctx = canvas.getContext('2d');
	
	function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
  	}
	resizeCanvas();
	window.addEventListener('resize', resizeCanvas, false);
}

function tick(){
	
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
