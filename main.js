noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(557, 150);

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function modeLoaded() {
    console.log('¡PoseNet se ha inicializado!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseY = results[0].pose.nose.y;
        noseX = results[0].pose.nose.x;
        console.log("noseX = " +noseX+ "noseY = " +noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        
        console.log("leftWristX = " +leftWristX+ "rightWristX = " + rightWristX+ "difference = " +difference);
    }
}

function draw() {
 background('#eb827a');

 document.getElementById("square_side").innerHTML = "El alto y el ancho del cuadrado sera =" +difference+ "px";


 fill("red");
 stroke("black");

 square(noseX, noseY, difference)
}