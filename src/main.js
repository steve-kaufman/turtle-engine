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
