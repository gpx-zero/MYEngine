/* All global objects */

class Objects{

    constructor(){

        this.obj = {};

    }

    add(name, obj){

        this.obj[name] = obj;

    }

    remove(name){
        
        delete obj[name];

    }

    draw(name){

        obj[name].draw();

    }

    select(){
        for(let name in this.obj){
            if(name != 'Context' && this.obj[name].click())
                return name;
        }
    }

}