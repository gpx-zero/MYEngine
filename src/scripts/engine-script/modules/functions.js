/* All functions used by engine */
'use strict';

function random(max,min=0){
	return Math.floor(Math.random()*(max-min+1))+min;
}

function setup(){
    window.mainLoop = false;
    window.FPS = 90;
    window.Mouse        = {
        x: undefined,
        y: undefined,
        startX: undefined,
        startY: undefined,
        target: undefined,
        click: false,
        wheel: 0,
    };
    window.objsList = new ObjectsList();
    objsList.add('context', new Context('context'));
    objectInputs();
}

function createNewContext(){
    mouse();
    objsList.obj['context'].create();
    objsList.obj['context'].setup();
    mainLoop = true;
}

function objectInputs(){
    window.ObjectInputs = {
        'objectName' : document.getElementById('context-object-name'),
        'objectType' : document.getElementById('context-object-type'),
        'objectWidth' : document.getElementById('context-object-width'),
        'objectHeight' : document.getElementById('context-object-height'),
        'objectBackground' : document.getElementById('context-object-background'),
    }
    for(let input in ObjectInputs)
        ObjectInputs[input].value = '';
}

function createObject(){
    for(let input in ObjectInputs)
        if(ObjectInputs[input].value == '') return;
    objsList.add(
        ObjectInputs['objectName'].value+' - '+ObjectInputs['objectType'].value,
        new GObject(
            ObjectInputs['objectName'].value+' - '+ObjectInputs['objectType'].value,
            350,
            350,
            ObjectInputs['objectWidth'].value,
            ObjectInputs['objectHeight'].value,
            10,
            ObjectInputs['objectBackground'].value
        )
    );
    for(let input in ObjectInputs)
        ObjectInputs[input].value = '';
}

function update(){

}

function rest(){

}


function chooseFromTheList(){
    document.getElementById('context-objects-list-p').innerHTML = '';
    for(let name in objsList.obj){
        document.getElementById('context-objects-list-p').innerHTML += `
            <element${selectedObject==name?' style="background-color:#254075"':''}> ${name}</element>
        `
    }
}

function selectObject(){
    if(Mouse.target=='canvas'||Mouse.target=='main-context'){
        selectedObject = objsList.select();
        document.getElementById('select-object').innerText = '☑ '+selectedObject;
    }
    chooseFromTheList();
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
            objsList.run();
            ctx.font = "50px Arial";
            ctx.textAlign = "center";
            ctx.fillStyle = "#444";
            ctx.fillText('MYEngine', canvas.width/2, canvas.height/1.2);
        }
    }, 1000/FPS);
    // Log Success
    console.log('%c Success! ', 'background:#000;color:#5e5;font-size:20px;');
}