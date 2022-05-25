/* Player object of type movement */

class GObject{

    constructor(Name, x, y, width, height, speed, background){
        this.name = Name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.background = background;
        this.direction = undefined;
        this.startX,
        this.startY;
        this.zoom = ZOOM;
    }

    draw(){
        ctx.fillStyle = this.background;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        if(Mouse.click&&selectedObject==this.name&&Mouse.target=='canvas'){
            this.x = (Mouse.x-(canvas.offsetLeft-canvas.width/2)) - this.startX;
            this.y = (Mouse.y-(canvas.offsetTop-canvas.height/2)) - this.startY;
        }else{
            this.startX = (Mouse.x-(canvas.offsetLeft-canvas.width/2)) - this.x;
            this.startY = (Mouse.y-(canvas.offsetTop-canvas.height/2)) - this.y;
        }
    }

    resize() {


    }

    click(){
        if(Mouse.target == 'canvas'){
            let XY = objsList.obj['context'].getXYClick();
            return (
                this.x<=XY[0]&&
                this.x+this.width>=XY[0]&&
                this.y<=XY[1]&&
                this.y+this.height>=XY[1]
            )
        }
        return false;
    }

    run(){
        this.move();
        this.draw();
    }

}