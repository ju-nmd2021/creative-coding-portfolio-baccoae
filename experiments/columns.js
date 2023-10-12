let canvasWidth = 500;
let canvasHeight = 500;
let x, y;
let height = 0;
let acceleration = 0.00001;

let oscillator;
let synth;

window.addEventListener("load", () => {
    oscillator = new Tone.Oscillator(440, "sawtooth").toDestination();
    synth = new Tone.MonoSynth().toDestination();
});

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(random(255), random(255), random(255));

    x = canvasWidth / 4;
    y = canvasHeight - 150;
}

function draw() {
    // stroke(0, 98, 224);
    noStroke();

    window.addEventListener("keydown", (e) => {
        if (e.key == "r") {
            // rotate(random(PI / 10, PI / 8));
            rotate(PI / 5 + acceleration);
            fill(random(150, 255), random(50, 150), random(50, 150));
            rect(random(-20, canvasWidth), random(0, canvasHeight) - height / 2, 40, height);
            height += 0.0005 + acceleration;
        }

        else if (e.key == "g") {
            // rotate(random(PI / 10, PI / 8));
            rotate(PI / 5 + acceleration);
            fill(random(50, 150), random(150, 255), random(50, 150));
            rect(random(-20, canvasWidth), random(0, canvasHeight) - height / 2, 40, height);
            height += 0.0005 + acceleration;
        }
        else if (e.key == "b") {
            // rotate(random(PI / 10, PI / 8));
            rotate(PI / 5 + acceleration);
            fill(random(50, 150), random(50, 150), random(150, 255));
            rect(random(-20, canvasWidth), random(0, canvasHeight) - height / 2, 40, height);
            height += 0.0005 + acceleration;
        }

    });

    window.addEventListener("keyup", () => {
        acceleration = 0.00001;
        height = 0;
    });

    acceleration = acceleration + 0.0005;
}

window.addEventListener("click", () => {
    // Tone.start();
    // oscillator.start();
});
