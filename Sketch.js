function setup() {
    let canvas = createCanvas(320, 320);
    canvas.parent('cookie'); // attaches canvas to your HTML div
    background(255, 240, 230);

    // Cookie base
    fill(222, 184, 135);
    stroke(180, 120, 50);
    strokeWeight(2);
    ellipse(width/2, height/2, 200, 200);

    // Chocolate chips
    fill(80, 40, 0);
    noStroke();
    for (let i = 0; i < 12; i++) {
        let x = width/2 + random(-70, 70);
        let y = height/2 + random(-70, 70);
        ellipse(x, y, 20, 12);
    }
}