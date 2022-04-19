song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX =0;
rightWristY =0;
scoreLeftWrist = 0;
songStatus = "";

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup()
{
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

posenet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
   console.log('PoseNet is intialized');
}

function draw()
{
image(video, 0, 0, 600, 500);
songStatus = music.mp3.isPlaying()
fill("#FF0000");
    stroke("#FF0000");

  if(scoreLeftWrist > 0.2)
  {
    circle(leftWristX, leftWristY, 20);
    song2.stop();
  }

  if(songStatus = false)
  {
    song1.play();
    document.getElementById("song_name").innerHTML = "Peter Pan Song";
  }
}

function gotPoses(results){
    if(results.length > 0);
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.leftWrist.y;    
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY); 
    }
}

