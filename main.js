noseX=0;
noseY=0;
difference=0;
left_wrist_x=0;
right_wrist_x=0;

function setup()
{
video=createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,500);
canvas.position(580,200);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function preload()
{

}

function draw()
{
background("blue");
fill("#34c0eb");
stroke("white");
square(noseX,noseY,difference);
document.getElementById("square_size").innerHTML="Width and Height of the square is "+difference+"px";
}
function modelLoaded()
{
    console.log("model is loaded");
}
function gotPoses(results)
{
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    left_wrist_x=results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;
    difference=floor(left_wrist_x-right_wrist_x)
}
    


}