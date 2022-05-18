/* All functions used by engine */
'use strict';
function random(max,min=0){
	return Math.floor(Math.random()*(max-min+1))+min;
}

function setup(){
    window.mainLoop = false;
    window.Mouse        = {
        x: undefined,
        y: undefined,
        startX: undefined,
        startY: undefined,
        target: undefined,
        click: false,
        wheel: 0,
    };
    window.OBJECTS = new Objects();
    window.selected = '';
    OBJECTS.add('Context', new Context());
    OBJECTS.add('player', new GObject(100, 200, 50, 50, 10, '#5e5'));
    OBJECTS.add('element', new GObject(400, 300, 100, 40, 10, '#e55'));
}

function createNewContext(){
    mouse();
    OBJECTS.obj['Context'].create();
    OBJECTS.obj['Context'].setup();
    mainLoop = true;
    selectList();
}

/*
function intro(){

    let word = "",
    count = 0,
    Y = 0;
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
        CTX.fillStyle = "#252";
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

function clearContext(){

    CTX.fillStyle = canvasBackground;
    CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
}

function update(){

}

function moveObject(){
    if(mouseClick && mouseObj.target.id=='canvas'){
        let mouseX = mouseObj.clientX-(CANVAS.offsetLeft-CANVAS.width/2);
        let mouseY = mouseObj.clientY-(CANVAS.offsetTop-CANVAS.height/2);
        console.log(mouseX)
        for(let name in allObjects.objects){
            if( allObjects.objects[name].x <= mouseX &&
                allObjects.objects[name].x+allObjects.objects[name].width >= mouseX &&
                allObjects.objects[name].y < mouseY &&
                allObjects.objects[name].y+allObjects.objects[name].height > mouseY
            ){
                console.log('click');
                clearContext();
                allObjects.objects[name].x = mouseX;
                allObjects.objects[name].y = mouseY;
                allObjects.objects[name].draw();
            }
        }
    }
}

function createOptions(){
    let rightMenu = document.getElementById('right-menu'),
        bottomMenu = document.getElementById('bottom-menu');
    for(let id=0; id<10; id++){
        rightMenu.innerHTML += '<div class="options">Option</div>';
        bottomMenu.innerHTML += '<div class="options">Option</div>';
    }
}

function createObj(x, y, w, h, b, s){

    allObjects.add('player_1', new MObject(x, y, w, h, b, s));
    allObjects.draw();
}

function create(){

    document.getElementById('create-new').remove();
    clearInterval(Intro);
    clearContext();
    createObj(0, 0, 50, 50, '#cc8', 10);
    createOptions();
}

function rest(){

}
*/

function selectList(){
    document.getElementById('context-objects-list-p').innerHTML = '';
    for(let name in OBJECTS.obj){
        document.getElementById('context-objects-list-p').innerHTML += `
            <element${selected==name?' style="background-color:#254075"':''}> ${name}</element>
        `
    }
}

function selectObject(){
    if(Mouse.target=='canvas'||Mouse.target=='main-context'){
        selected = OBJECTS.select()?OBJECTS.select():'Context';
        document.getElementById('select-object').innerText = '☑ '+selected;
    }else{
        selected = '';
        document.getElementById('select-object').innerText = '☒';
    }
    selectList();
}

function mouse(){
    document.onmousedown = (e)=>{
        Mouse.startX = Mouse.x;
        Mouse.startY = Mouse.y;
        Mouse.target = e.target.id;
        Mouse.click = true;
        selectObject();
    }
    document.onmouseup = ()=>{
        Mouse.click = false; 
    }
    document.onmousemove = (e)=>{
        Mouse.x = e.clientX;
        Mouse.y = e.clientY;
    }
    document.onwheel = (e)=>{
        Mouse.wheel = e.deltaY;
    }
}

function run(){
    setup();
    let thisLoop = setInterval(()=>{
        if(mainLoop){
            OBJECTS.obj['Context'].run();
            OBJECTS.obj['player'].draw();
            OBJECTS.obj['player'].move();
            OBJECTS.obj['element'].draw();
            OBJECTS.obj['element'].move();
            ctx.font = "60px Arial";
            ctx.textAlign = "center";
            ctx.fillStyle = "#444";
            ctx.fillText('MYEngine', canvas.width/2, canvas.height/1.2);
        }
    }, 1000/FPS);
    // Log Success
    console.log('%c Success! ', 'background:#000;color:#5e5;font-size:20px;');
}