noseX=0;
noseY=0;

function preload(){
    cartola = loadImage("cartola.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-80;
        noseY = results[0].pose.nose.y-190;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(cartola, noseX, noseY, 160, 130);
}

function take_snapshot(){
    save('myFilterImage.png');
}