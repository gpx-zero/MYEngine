/* Player object of type movement */

class GObject{

    constructor(x, y, width, height, speed, background){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.background = background;
        this.direction = undefined;
        this.startX, this.startY;
    }

    draw(){
        ctx.fillStyle = this.background;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {

        if(Mouse.click&&selected=='player'){
            if(Mouse.target=='canvas'||Mouse.target=='main-context'){
                this.x = (Mouse.x-(canvas.offsetLeft-canvas.width/2)) - this.startX;
                this.y = (Mouse.y-(canvas.offsetTop-canvas.height/2)) - this.startY;
            }
        }else{
            this.startX = (Mouse.x-(canvas.offsetLeft-canvas.width/2)) - this.x;
            this.startY = (Mouse.y-(canvas.offsetTop-canvas.height/2)) - this.y;
        }
        console.log((Mouse.x-(canvas.offsetLeft-canvas.width/2)))

    }

    click(){
        return (
            this.x<=(Mouse.x-(canvas.offsetLeft-canvas.width/2))&&
            this.x+this.width>=(Mouse.x-(canvas.offsetLeft-canvas.width/2))&&
            this.y<=(Mouse.y-(canvas.offsetTop-canvas.height/2))&&
            this.y+this.height>=(Mouse.y-(canvas.offsetTop-canvas.height/2))
        )
    }

}