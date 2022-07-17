canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent = "";
var lastx, lasty;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    mouseEvent = "mousedown";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){
    console.log(mouseEvent);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=3;
        
        ctx.arc(mouse_x,mouse_y,30,0,2*Math.PI);
        ctx.stroke();
    }

    lastx = mouse_x
    lasty = mouse_y
}