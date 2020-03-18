
    const transparent_backgroud = "rgba(40,48,56,0.25)";
    const opaque_background ="#000000";
    const red_colour = "#FF0000"

    const Game = function(){

        this.world = {
            background_color:transparent_backgroud,

            friction:0.9,
            gravity:3,

            player:new Game.player(),

            height:72,
            width:128,

            collisionObject:function(object) {
                if (object.x < 0) { 
                    object.x = 0; object.velocity_x = 0; 
                }else if (object.x + object.width > this.width) {
                     object.x = this.width - object.width; object.velocity_x = 0;
                }if (object.y < 0) {
                         object.y = 0; object.velocity_y = 0; 
                }else if (object.y + object.height > this.height) { 
                    object.jumping = false; object.y = this.height - object.height; object.velocity_y = 0; 
                }
          
            },

            update:function(){
                this.player.velocity_y += this.gravity;
                this.player.update();
          
                this.player.velocity_x *= this.friction;
                this.player.velocity_y *= this.friction;
          
                this.collisionObject(this.player);
            }
        };

        this.update = function() {

            this.world.update();
        
        };

    };

    Game.prototype = {
        constructor : Game
    };

    Game.player = function(x,y){
        this.color = "#FF0000";
        //determine if player is jumping or not
        this.jumping = true;

        //player's size
        this.height = 16;
        this.width  = 16;
        //player's directional velocity
        this.velocity_x =0;
        this.velocity_y =0;
        //starting positions
        this.x = 100;
        this.y =50;
        
    }

    Game.player.prototype = {
        constructor : Game.player,

        jump:function(){
            if(this.jumping == false){
                //change colour to random
                this.color = "#" + Math.floor(Math.random() * 16777216).toString(16);
                if(this.color.length !=7) this.color = this.color.slice(0,1) + "0" + this.color.slice(1,6);

                this.jumping = true;
                this.velocity_y -= 20;
            }
        },

        moveLeft:function(){this.velocity_x -=0.5;},
        moveRight:function(){this.velocity_x +=0.5;},

        update:function(){
            this.x += this.velocity_x;
            this.y += this.velocity_y;
        }
    }

    