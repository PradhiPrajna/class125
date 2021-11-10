nosex = 0;
nosey = 0;
difference = 0;
leftWristx = 0;
rightWristx = 0;
function setup()
{
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("poseNet is initialized");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        console.log("nosex = "+ nosex);
        console.log("nosey = "+ nosey);
        console.log("leftWristx = "+ leftWristx);
        console.log("rightWristx = "+ rightWristx);
        difference = floor(leftWristx-rightWristx);
        console.log("difference = "+ difference);
    }
}

function draw()
{
    background('#FFFF00');
    document.getElementById("square_side").innerHTML = "width and height of the square will be = "+ difference + "px";
    fill('#ADD8E6');
    stroke('#ADD8E6');
    square(nosex, nosey, difference);
}
