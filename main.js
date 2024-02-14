left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(400, 400); 
    video.position(10, 50);
    canvas = createCanvas(800, 400);
    canvas.position(430, 130);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    background("#5196e3");
    document.getElementById("font-size").innerHTML = "Font Size Of The Text Will Be = " + difference +"px";
    textSize(difference);
    fill("#00ffa");
    text('Balakrishnan',50,400);
}

function gotPoses(results)
{
    if(error)
    {
        console.error(error);
    }
    if(results.length > 0)
    {
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("leftwrist_x = " + results[0].pose.leftWrist.x + "leftwrist_y = " + results[0].pose.leftWrist.y);
        console.log("rightwrist_x = " + results[0].pose.rightWrist.x + "rightwrist_y = " + results[0].pose.rightWrist.y);
    }
}

