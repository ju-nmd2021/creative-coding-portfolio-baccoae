let font;
let fontSize = 500;
let canvasWidth = 500;
let canvasHeight = 500;
let x, y;
let acceleration;

let firstLetter = [];
let secondLetter = [];

function preload() {
    font = loadFont('Signifier-MediumItalic.otf');
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    textFont(font);
    textSize(fontSize);

    x = canvasWidth / 4;
    y = canvasHeight - 150;

    firstLetter = font.textToPoints("a", x, y, fontSize, {
        sampleFactor: 0.1
    });

    secondLetter = font.textToPoints("e", x + 30, y, fontSize, {
        sampleFactor: 0.138
    });
}

function draw() {
    background(0, 98, 224);
    stroke("#fff");
    noFill();

    beginShape();
    for (i = 0; i < firstLetter.length; i++) {
        vertex(firstLetter[i].x, firstLetter[i].y);

        if (firstLetter[i].x <= secondLetter[i].x) {
            firstLetter[i].x++;
        }

        if (firstLetter[i].x >= secondLetter[i].x) {
            firstLetter[i].x--;
        }

        if (firstLetter[i].y <= secondLetter[i].y) {
            firstLetter[i].y++;
        }

        if (firstLetter[i].y >= secondLetter[i].y) {
            firstLetter[i].y--;
        }
    }
    endShape();
}