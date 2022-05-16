/* ============ engine script ============ */
// Global variables
let CANVAS = document.getElementById('canvas'),
CTX = canvas.getContext('2d'),
MAIN = false,
X_MOUSE = 0,
Y_MOUSE = 0,
X_CANVAS = 0,
Y_CANVAS = 0,
X_SPACE = 0,
Y_SPACE = 0;

CTX.font = "100px Arial";
CTX.textAlign = "center";
CTX.fillStyle = "#eee";
CTX.fillText("MYEngine", CANVAS.width/2, CANVAS.height/2);

document.onmousedown = ()=>{
    X_SPACE = X_MOUSE - X_CANVAS;
    Y_SPACE = Y_MOUSE - Y_CANVAS;
    MAIN = true;
}
document.onmouseup = ()=>{
    MAIN = false; 
}
document.onmousemove = (e)=>{
    X_MOUSE = e.clientX;
    Y_MOUSE = e.clientY;
}

// Main loop
let loop = setInterval(()=>{
    if(MAIN){
        X_CANVAS = X_MOUSE - X_SPACE,
        Y_CANVAS = Y_MOUSE - Y_SPACE;
        CANVAS.style.left = X_CANVAS+'px';
        CANVAS.style.top = Y_CANVAS+'px';
    }
}, 10);

//if(e.target.localName == 'canvas')
//let xmouse = X_MOUSE-e.target.offsetLeft,
//ymouse = Y_MOUSE-e.target.offsetTop,