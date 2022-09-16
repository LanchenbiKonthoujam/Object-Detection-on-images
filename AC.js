status = "";
AC_image = "";

function preload(){
    AC_image = loadImage("AC")
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
    object_detector.Detect(AC_image, gotResults);
}

function gotResults(results, error){
    if(error){
        console.error(error);
    }
    console.log
    
}

function draw(){
    image(AC_image,0,0,640,350);
}