song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";
song6 = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload() {
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
    song3 = loadSound("music3.mp3");
    song4 = loadSound("music4.mp3");
    song5 = loadSound("music5.mp3");
    song6 = loadSound("music6.mp3");
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded..... PoseNet is Initialized");
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
       
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("Left Wrist Score = " + scoreLeftWrist);

        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("Right Wrist Score = " + scoreRightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "| Left Wrist Y" + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + "| Right Wrist Y = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 600);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2)
    {
    circle(rightWristX, rightWristY, 20);
    }

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    }
}

function play() {

    if(rightWristY>0 && rightWristY<=100)
    {
        
        document.getElementById("music1").innerHTML = '<mark><label id="music1" >Wonderful Tonight - Eric Clapton</label></mark>';
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        song1.play();
    }
    else if(rightWristY >100 && rightWristY<=200)
    {
        
        document.getElementById("music2").innerHTML = '<mark><label id="music2" >Dance Monkey - Tones and I</label></mark>';
        song1.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        
        song2.play();
    }
    else if(rightWristY >200 && rightWristY<=300)
    {
        
        document.getElementById("music3").innerHTML = '<mark><label id="music3" >Believer - Imagine Dragons</label></mark>';
        song2.stop();
        song1.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        
        song3.play();
    }
    else if(rightWristY >300 && rightWristY<=400)
    {
        
        document.getElementById("music4").innerHTML = '<mark><label id="music4" >Love Story - Taylor Swift</label></mark>';
        song2.stop();
        song3.stop();
        song1.stop();
        song5.stop();
        song6.stop();
        
        song4.play();
    }
    else if(rightWristY >400 && rightWristY<=500)
    {
        
        document.getElementById("music5").innerHTML = '<mark><label id="music5" >Fur Elise - Ludwig Van Beethoven</label></mark>';
        song2.stop();
        song3.stop();
        song4.stop();
        song1.stop();
        song6.stop();
    
        song5.play();
    }
    else if(rightWristY >500 && rightWristY<=600)
    {

        document.getElementById("music6").innerHTML = '<mark><label id="music6" >Story of My Life - One Direction</label></mark>';
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song1.stop();
 
        song6.play();
    }
    
}
