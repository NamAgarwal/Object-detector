state = "";

function preload(){
    img = loadImage("bed.jpg");
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
     
    detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects";
}
function draw(){
    image(img, 0, 0, 640, 480);
}
function modelLoaded(){
    state = true;
    detector.detect(img, gotResults);
}
function gotResults(results , error){
    if(error){
        console.log(error);
    }else{
        console.log(results);
    }
}