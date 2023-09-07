let elevation = 0;
let x = 0;
let y = 0;
let waveY = [];
const canvasWidth = 700;
const canvasHeight = 700;

let backgroundColor = color(255);
backgroundColor.setAlpha(100);

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(255, 255, 255);
}

function draw() {
    fill(backgroundColor);
    noStroke();
    rect(0, 0, canvasWidth, canvasHeight);
    fill(0);

    for (let x = 0; x < canvasWidth - 200; x++) {

        for (let y = 0; y < 1; y++) {
            fill(156, 64, 58);
            rect(100 + x, 100 + y * 20 + elevation, 1, 1);
        }

        for (let i = 0; i < canvasWidth - 200; i++) {
            waveY = sin(x) * elevation;
        }
        elevation = Math.random() * 20;
    }
}

