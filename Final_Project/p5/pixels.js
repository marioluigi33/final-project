function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("#pixels");
  pixelDensity(1);
}

function draw() {
	loadPixels();

	for(var y = 0; y < height; y++){
		for(var x = 0; x < width; x++){
			var ind = (x + y * width) * 4;

			pixels[ind] = random(255);
			pixels[ind + 1] = (x / width) * 255;
			pixels[ind + 2] = (y / height) * 255;
			pixels[ind + 3] = 200;
		}
	}

	updatePixels();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}