/* Class of context */

class Context{

    constructor(Name, width=1000, height=600, background='#eee') {
        this.name = Name;
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.sWidth = 0;
        this.sHeight = 0;
        this.background = background;
        this.startX, this.startY;
        this.zoom = ZOOM;
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

    setup() {
        canvas.width = this.width;
        canvas.height = this.height;
        this.options();
    }

    move() {
        if(Mouse.click&&selectedObject==this.name){
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
        // Fix the resize function for objects
        /* 
        if(Mouse.target=='canvas'||Mouse.target=='main-context'){
            if(Mouse.wheel == -100){
                this.sWidth += this.width*this.zoom;
                this.sHeight += this.height*this.zoom;
                this.width += this.width*this.zoom;
                this.height += this.height*this.zoom;
                Mouse.wheel = 0;
            }else if(Mouse.wheel == 100){
                this.sWidth -= this.width*this.zoom;
                this.sHeight -= this.height*this.zoom;
                this.width -= this.width*this.zoom;
                this.height -= this.height*this.zoom;
                Mouse.wheel = 0;
            }
            canvas.style.width = this.width+'px';
            canvas.style.height = this.height+'px';
        }else{
            Mouse.wheel = 0;
        }
        */
    }

    clear() {
        ctx.fillStyle = this.background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    run() {
        this.move();
        this.resize();
        this.clear();
    }

    getCoordinates() {
        return [
            Math.floor(this.x-this.width/2), 
            Math.floor(this.y-this.height/2)
        ]
    }

    getXYClick() {
        let x = (Mouse.x - this.getCoordinates()[0]);
        let y = (Mouse.y - this.getCoordinates()[1]);
        console.log(x, y);
        return [x, y];
    }
    
    options() {
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