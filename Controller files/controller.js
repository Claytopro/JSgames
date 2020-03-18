
const Controller = function(){

    this.left = new Controller.buttonInput();
    this.right = new Controller.buttonInput();
    this.up = new Controller.buttonInput();

    this.keyDownUp = function(type,key_code){

        var down = (type == "keydown") ? true : false;

        switch(key_code){
            case 37:this.left.getInput(down); break;
            case 39:this.right.getInput(down);  break;
            case 38:this.up.getInput(down);break;
        }
    };
    
};

Controller.prototype = {
    constructor : Controller
};

Controller.buttonInput = function(){
    this.active = this.down = false;
};

Controller.buttonInput.prototype = {
    constructor : Controller.buttonInput,

    getInput : function(down){
        if(this.down != down) this.active = down;
        this.down = down;
    }
};