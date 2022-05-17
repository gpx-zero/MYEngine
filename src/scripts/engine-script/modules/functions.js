/* All functions used by engine */

function setup(){

    mouse();
    // Intro //
    intro();
}

function intro(){
    let word = "", count = 0, Y = 0;
    CTX.font = "60px Arial";
    CTX.textAlign = "center";
    Intro = setInterval(()=>{
        if(count > 8*10){
            if(count == 8*60){
                count = -1;
                word="";
            }
        }
        else if(count%10==0) word += "▎MYEngine"[count/10]; count++;
        if(Y == CANVAS.height+600) Y = 600; Y++;
        CTX.fillStyle = "#111";
        CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
        CTX.fillStyle = "#242";
        CTX.fillRect(random(CANVAS.width-20, 0), Y-1200, 5, 5);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-1200, 10, 10);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-1200, 5, 5);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-1200, 10, 10);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-900, 5, 5);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-900, 10, 10);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-900, 5, 5);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-600, 10, 10);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-600, 5, 5);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-600, 10, 10);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-600, 5, 5);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-600, 10, 10);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-300, 5, 5);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-300, 10, 10);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-300, 5, 5);
        CTX.fillRect(random(CANVAS.width-20, 0), Y-300, 10, 10);
        CTX.fillRect(random(CANVAS.width-20, 0), Y, 5, 5);
        CTX.fillRect(random(CANVAS.width-20, 0), Y, 10, 10);
        CTX.fillRect(random(CANVAS.width-20, 0), Y, 5, 5);
        CTX.fillRect(random(CANVAS.width-20, 0), Y, 10, 10);
        CTX.fillStyle = "#4a4";
        CTX.fillText(word, CANVAS.width/2, CANVAS.height/1.2);
    }, 10);
}

function random(max,min=0){
	return Math.floor(Math.random()*(max-min+1))+min
}

function update(){

}

function create(){
    // disabled into
    clearInterval(Intro);
    CTX.fillStyle = "#aaa";
    CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
}

function rest(){

}

function move_context(){

    if(mouseClick){
        if(mouseObj.target.id=='canvas'||mouseObj.target.id=='main-context'){
            CANVAS.style.left = mouseObj.clientX - startX + 'px';
            CANVAS.style.top = mouseObj.clientY - startY + 'px';
        }
    }
}

function zoom_context(){

    if(mouseWheel == -100){
        canvasWidth += canvasWidth*ZOOM; canvasHeight += canvasHeight*ZOOM;
        CANVAS.style.width = canvasWidth+'px'; CANVAS.style.height = canvasHeight+'px';
        mouseWheel = 0;
    }else if(mouseWheel == 100){
        canvasWidth -= canvasWidth*ZOOM; canvasHeight -= canvasHeight*ZOOM;
        CANVAS.style.width = canvasWidth+'px'; CANVAS.style.height = canvasHeight+'px';
        mouseWheel = 0;
    }
}

function mouse(){

    document.onmousedown = (e)=>{
        startX = mouseObj.clientX - CANVAS.offsetLeft;
        startY = mouseObj.clientY - CANVAS.offsetTop;
        mouseClick = true;
    }
    document.onmouseup = ()=>{
        mouseClick = false; 
    }
    document.onmousemove = (e)=>{
        mouseObj = e;
    }
    document.onwheel = (e)=>{
        mouseWheel = e.deltaY;
    }
}

function run(){

    setup();
    let thisLoop = setInterval(()=>{
        move_context();
        zoom_context();
    }, 1000/FPS);
}