let font;
let fontSize = 300;
let canvasWidth = 500;
let canvasHeight = 500;
let x, y;
let acceleration = 0;
let easing = 0.005;

let firstLetter = [];

function preload() {
    font = loadFont('assets/fonts/Signifier-MediumItalic.otf');
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    textFont(font);
    textSize(fontSize);

    x = canvasWidth / 4;
    y = canvasHeight - 150;


    firstLetter = font.textToPoints("13", x - 30, y, fontSize, {
        sampleFactor: 0.10
    });
}

function draw() {
    background(20, 20, 20);
    noStroke();

    beginShape();
    for (i = 0; i < firstLetter.length; i++) {
        // vertex(firstLetter[i].x, firstLetter[i].y);
        fill(255, 255, 255);
        ellipse(firstLetter[i].x, firstLetter[i].y, mouseX - firstLetter[i].x, 2 * (mouseY * 0.003));
    }
    endShape();
}