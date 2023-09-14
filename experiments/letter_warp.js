let font;
let fontSize = 500;
let canvasWidth = 500;
let canvasHeight = 500;
let x, y;
let acceleration;

let firstLetter = [];
let secondLetter = [];

let oscillator;
let synth;

window.addEventListener("load", () => {
    oscillator = new Tone.Oscillator(440, "sawtooth").toDestination();
    synth = new Tone.MonoSynth().toDestination();
})
function preload() {
    font = loadFont('assets/fonts/Signifier-MediumItalic.otf');
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
    background("#fff");
    stroke(0, 98, 224);
    noFill();


    beginShape();
    for (i = 0; i < firstLetter.length; i++) {
        vertex(firstLetter[i].x, firstLetter[i].y);
        oscillator.frequency.value = frameCount;

        if (firstLetter[i].x <= secondLetter[i].x) {
            firstLetter[i].x++;
            // oscillator.frequency.value = Math.round(firstLetter[i].x * 0.1);
            oscillator.volume.value = frameCount;
        }

        if (firstLetter[i].x >= secondLetter[i].x) {
            firstLetter[i].x--;
            // oscillator.volume.value = firstLetter[i].x;
        }

        if (firstLetter[i].y <= secondLetter[i].y) {
            firstLetter[i].y++;
            // oscillator.volume.value = firstLetter[i].y;
        }

        if (firstLetter[i].y >= secondLetter[i].y) {
            firstLetter[i].y--;
            // oscillator.volume.value = firstLetter[i].y;
        }
    }
    endShape();
}

window.addEventListener("click", () => {
    Tone.start();
    oscillator.start();
});

setTimeout(() => {
    oscillator.stop()

    synth.triggerAttackRelease("C4", "4n");
}, 4000);
