/* Class of context */

class Context{

    constructor(width=1000, height=550, zoom=0.05, background='#eee') {
        
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.zoom = zoom;
        this.background = background;
        this.startX, this.startY;

    }

    create() {

        document.getElementById('main-context').innerHTML = '<canvas id="canvas"></canvas>';
        window.canvas = document.getElementById('canvas');
        window.ctx = canvas.getContext('2d');
        canvas.style.cssText = `
            background-color:${this.background};
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        `;

    }

    setup(){

        canvas.width = this.width;
        canvas.height = this.height;
        this.options();

    }

    move() {

        if(Mouse.click&&selected=='Context'){
            if(Mouse.target=='canvas'||Mouse.target=='main-context'){
                this.x = Mouse.x - this.startX;
                this.y = Mouse.y - this.startY;
                canvas.style.left = this.x + 'px';
                canvas.style.top = this.y + 'px';
            }
        }else{
            this.startX = Mouse.x - canvas.offsetLeft;
            this.startY = Mouse.y - canvas.offsetTop;
        }

    }

    resize() {

        if(Mouse.target=='canvas'||Mouse.target=='main-context'){
            if(Mouse.wheel == -100){
                this.width += this.width*this.zoom; this.height += this.height*this.zoom;
                Mouse.wheel = 0;
            }else if(Mouse.wheel == 100){
                this.width -= this.width*this.zoom; this.height -= this.height*this.zoom;
                Mouse.wheel = 0;
            }
            canvas.style.width = this.width+'px'; canvas.style.height = this.height+'px';
        }else{
            Mouse.wheel = 0;
        }

    }

    clear(){

        ctx.fillStyle = this.background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    }

    run(){

        this.clear();
        this.move();
        this.resize();

    }

    getCoordinates() {

        return [this.x - this.width/2, this.y - this.height/2];

    }
    
    options(){

        document.getElementById('context-background').onchange = ()=>{
            this.background = document.getElementById('context-background').value;
        }
        document.getElementById('context-width').onchange = ()=>{
            canvas.width = Number(document.getElementById('context-width').value);
            canvas.style.width = this.width+'px';
        }
        document.getElementById('context-height').onchange = ()=>{
            canvas.height = Number(document.getElementById('context-height').value);
            canvas.style.height = this.height+'px';
        }

    }

}