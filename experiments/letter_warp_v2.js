let font;
let fontSize = 500;
let canvasWidth = 500;
let canvasHeight = 500;
let x, y;
let acceleration = 0;
let easing = 0.005;


// SINE WAVE STUFF
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x

let firstLetter = [];
let secondLetter = [];

function preload() {
    font = loadFont('assets/fonts/Signifier-MediumItalic.otf');
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    textFont(font);
    textSize(fontSize);

    x = canvasWidth / 4;
    y = canvasHeight - 150;

    dx = (TWO_PI / period) * 2;
    yvalues = new Array(floor(canvasWidth / 2));

    firstLetter = font.textToPoints("a", x, y, fontSize, {
        sampleFactor: 0.10
    });

    secondLetter = font.textToPoints("e", x + 20, y + 10, fontSize, {
        sampleFactor: 0.14
    });
}

function draw() {
    background(20, 20, 20);
    noStroke();

    beginShape();
    for (i = 0; i < firstLetter.length; i++) {
        // vertex(firstLetter[i].x, firstLetter[i].y);

        fill(50, 50, 255);
        ellipse(firstLetter[i].x - acceleration * 1.5, firstLetter[i].y - 1, 1, 1);

        fill(255, 255, 255);
        ellipse(firstLetter[i].x, firstLetter[i].y, 1, 1);

        fill(255, 0, 0);
        ellipse(firstLetter[i].x - acceleration * 1.1, firstLetter[i].y - 1, 1, 1);
        //theta += 0.0002;
        //firstLetter[i].x = theta;

        let targetX = secondLetter[i].x;
        let targetY = secondLetter[i].y;
        let dx = targetX - x;
        let dy = targetY - y;

        if (firstLetter[i].x < secondLetter[i].x) {
            firstLetter[i].x += dx * easing;
            // firstLetter[i].x = sin(firstLetter[i].x) * amplitude;
        }

        if (firstLetter[i].x > secondLetter[i].x) {
            firstLetter[i].x += -dx * easing;
            // firstLetter[i].x = sin(firstLetter[i].x) * amplitude;
        }

        if (firstLetter[i].y < secondLetter[i].y) {
            //firstLetter[i].y += -dy * easing;
            firstLetter[i].y++;
        }

        if (firstLetter[i].y > secondLetter[i].y) {
            firstLetter[i].y += dy * easing;
            // firstLetter[i].y--;
        }
    }
    endShape();

    acceleration += 0.01;
}