status = "";
Bottle_image = "";

function preload(){
    AC_image = loadImage("https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8&w=1000&q=80")
}

function setup(){
    canvas = createCanvas(640, 350);
    canvas.positive(315, 200);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").inner.HTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_detector.Detect(Bottle_image, gotResults);
}

function gotResults(results, error){
    if(error){
        console.error(error);
    }
    console.log
    
}

function draw(){
    image(Bottle_image,0,0,640,350);
}