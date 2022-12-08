song1 = '';
song2 = '';

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

song1Status = "";
song2Status = "";

function setup() {
    canvas = createCanvas(600, 500);
canvas.position(750, 220)

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet loaded")
}

function gotPoses(results) {
if(results.length > 0) {
console.log(results);
scoreRightWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("ScoreRightWrist = " + scoreRightWrist + "ScoreLeftWrist = " + scoreLeftWrist);
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;

console.log("RightWristX = " + rightWristX + " RightWristY = " + rightWristY);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;

console.log("LeftWristX = " + leftWristX + " LeftWristY = " + leftWristY);
}


}

function draw() {
image(video, 0, 0, 600, 500);
song1Status = song1.isPlaying();
song2Status = song2.isPlaying();
fill("FF0000");
stroke("FF0000");
if(scoreRightWrist > 0.5) {
    circle(rightWristX, rightWristY, 20);
    song2.stop();
    if(song1Status == false) {
        song1.play();
        document.getElementById("song").innerHTML = "Esta sonando Robbery"
    }
}
if(scoreLeftWrist > 0.2) {
    circle(leftWristX, leftWristY, 20) 
    song1.stop();
    if(song2Status == false) {
        song2.play();
        document.getElementById("song").innerHTML = "Esta sonando Come & Go"
}
}
}


function preload() {
song1 = loadSound("robbery.mp3");
song2 = loadSound("come.mp3");
}
