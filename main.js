song1 = '';
song2 = '';

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;


function setup() {
    canvas = createCanvas(600, 500);
canvas.center();
canvas.position(700, 220)

    video = createCapture(VIDEO);
    video.hide();


}

function draw() {
image(video, 0, 0, 600, 500);

}


function preload() {
song1 = loadSound("robbery.mp3");
song2 = loadSound("come.mp3");
}

function play() {
    song.play();
}
