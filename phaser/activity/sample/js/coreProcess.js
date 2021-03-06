var w = 800, h = 600;
var bounds = 10000;
var player, keyboard, explode;
var platform1, platform2, ball;
var speed = 1000;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '');

game.prototype = {
    preload: function(){
        game.load.image("ball","../img/ball.png");
        game.load.image("star","../img/star.png");
        game.load.image("bg","../img/sky.png");
        game.load.image("platform","../img/platform.png");
        game.load.image("button","../img/platform.png");
        game.load.image("bg-images","../img/scenes-lava.png");
        game.load.spritesheet("explode","../img/explode.png",128,128);
    }, 
    create: function(){
        
        console.log("xx");

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0,0,"bg-images");
        ball = game.add.sprite(50,300,"ball");
        ball.scale.x = 0.2;
        ball.scale.y = 0.2;

        platform1 = game.add.sprite(10,100,'platform');
        platform1.scale.x = 0.1;
        platform1.scale.y = 6;
        game.physics.arcade.enable(platform1);
        platform1.body.collideWorldBounds = true;
        platform1.body.immovable = true;

        platform2 = game.add.sprite(w-50,100,'platform');
        platform2.scale.x = 0.1;
        platform2.scale.y = 6;
        game.physics.arcade.enable(platform2);
        platform2.body.collideWorldBounds = true;
        platform2.body.immovable = true;


        game.physics.arcade.enable(ball);

        // ball.body.setCircle = 50;
        ball.body.gravity.x = 0;
        ball.body.gravity.y = 0;
        ball.body.bounce.x = 0.9;
        ball.body.bounce.y = 0.9;

        platform1.body.collideWorldBounds = true;
        platform2.body.collideWorldBounds = true;
        ball.body.collideWorldBounds = true;
        
        keyboard = game.input.keyboard.createCursorKeys();
    }, 
    update: function(){

        console.log("11");

        game.physics.arcade.collide(platform1,ball);
        game.physics.arcade.collide(platform2,ball);

        if(keyboard.up.isDown){
            platform1.body.velocity.y = -speed;
            platform2.body.velocity.y = -speed;

            platform1.body.position.x = 10;
            platform2.body.position.x = w-50;
        }
        else if(keyboard.down.isDown){
            platform1.body.velocity.y = speed;
            platform2.body.velocity.y = speed;

            platform1.body.position.x = 10;
            platform2.body.position.x = w-50;
        }
        else if(keyboard.left.isDown){
            platform1.body.velocity.x = -500;
            platform2.body.velocity.x = -500;
        }
        else if(keyboard.right.isDown){
            platform1.body.velocity.x = 500;
            platform2.body.velocity.x = 500;
        }
        else{   
            platform1.body.velocity.y = 0;
            platform2.body.velocity.y = 0;
            platform1.body.velocity.x = 0;
            platform2.body.velocity.x = 0;
        }
    }
}