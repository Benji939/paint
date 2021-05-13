var canvas= document.getELementById("myCanvas");
var ctx= canvas.getContext("2d");
var lastpositionofx,lastpositionofy;
var currentpositionofx,currentpositionofy;
var color="purple";
var widthofline=3;
var width=screen.width;
var newwidth= screen.width-109;
var newheight= screen.height-34;
if(width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", touchstarted);
function touchstarted(e){
    color=document.getElementById("color").value;
    widthofline=document.getElementById("width_of_line").value;
    lastpostionofx=e.touches[0].clientX-canvas.offsetLeft;
    lastpositionofy=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", touchmoved);
function touchmoved(e){
    currentpositionofx=e.touches[0].clientX-canvas.offsetLeft;
    currentpositionofy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.moveTo(lastpositionofx, lastpositionofy);
    ctx.lineTo(currentpositionofx, currentpositionofy);
    ctx.stroke();
    lastpositionofx=currentpositionofx;
    lastpositionofy=currentpositionofy;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}