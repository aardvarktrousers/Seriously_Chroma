var video;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
 
  canvas.id('p5canvas');
  canvas.position(0, 0);
 
  //video = createCapture(VIDEO);
    
    var constraints = {
    audio: false,
    video: {
      
    facingMode: "user"}
     
    
  };
  video = navigator.mediaDevices.getUserMedia(constraints);
    
    
    
  video.elt.setAttribute('playsinline', '');
  video.size(640, 480);
  video.id('p5video');
  video.hide();
  
  var seriously = new Seriously();
  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');
  target.width = windowWidth;
  target.height = windowHeight;
  
var chroma = seriously.effect('chroma');
chroma.source = "#p5video";
target.source = chroma;
  var r = 98 /255;
  var g = 175 / 255;
  var b = 116 / 255;
  chroma.screen = [r, g, b, 1];
  
  seriously.go();
}

function draw() {
  
}
