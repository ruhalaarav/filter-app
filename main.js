noseX = 0
noseY = 0
img = ""

function preload(){
    img = loadImage("th-removebg-preview.png")
}

function setup(){
canvas = createCanvas(400,400)
canvas.center()
video = createCapture(VIDEO)
video.size(300,300)
video.hide()

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose' , gotPoses);
}

function draw(){

    image(video,0,0,400,400)

    image(img , noseX , noseY , 30,30)
}

function take_snapshot(){
    save("image.png")
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function gotPoses(results){
    if (results.length > 0) {

        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x -15);
        console.log("nose y = " + results[0].pose.nose.y -15);

        noseX = results[0].pose.nose.x -15;
        noseY =  results[0].pose.nose.y -15;
    }
}