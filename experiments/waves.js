function setup() {

    const canvasWidth = 700;
    const canvasHeight = 700;
    createCanvas(canvasWidth, canvasHeight);
    background(255, 255, 255);
}

function draw() {
    fill(50, 50, 255);
    noStroke();

    for (let x = 0; x < 700 - 200; x++) {
        // rect(100 + x, 100, 1, 1);

        for (let y = 0; y < 26; y++) {
            rect(100 + x, 100 + y * Math.random(y * 0.1, y * 2) * 20, 0.1, 0.1);
        }
    }
}
