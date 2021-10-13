img = "";
Status = "";
function preload() {
img = loadImage('bottle.jpeg');
}
function setup() {
canvas = createCanvas(640,420)
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Dectecting Objects ";
}
function modelLoaded() {
    console.log("Model Loaded")
    Status = true;
    objectDetector(img, gotResult);
    }
    function gotResult(error, results) {
    if(error){
        console.log(error)
    }
    console.log(results);
    }
function draw(){
image(img, 0, 0, 640, 420);
fill("#00FF00");
text("bottle", 45, 75);
noFill();
stroke("#00FF00");
rect(30, 60, 450, 350);
}