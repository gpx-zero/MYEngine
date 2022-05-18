/* All global objects */

class ObjectsList{

    constructor(){

        this.obj = {};
        window.selectedObject = '';

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
            if(name != 'context' && this.obj[name].click())
                return name;
        }
        return 'context';
    }

    run(){
        for(let name in this.obj){
            this.obj[name].run();
        }
    }

}