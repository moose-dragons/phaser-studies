window.onload = function () {
    var trump;
    var trumpVomit;
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
        preload: preload,
        create: create,
        update: update
    });

    

    function preload() {
        game.load.image('logo', './assets/img/phaser.png');
        game.load.image('trump', './assets/img/trumphead.png');
        game.load.image('dollar', './assets/img/dollar.png');
    }

    function create() {
        // need to have this for physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // background
        var logo = game.add.sprite(
            game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        
        // Set up our moveable trump
        trump = game.add.sprite(
        game.world.centerX, game.world.centerY, 'trump');
        trump.anchor.setTo(0.5, 0.5);
        
        trumpVomit = game.add.group();


        // objects need to have their physics enabled
        game.physics.arcade.enable(trump);
        trump.body.collideWorldBounds = true;
        trump.body.mass = 10;
        trump.body.maxVelocity.x = 150;
        trump.body.maxVelocity.y = 150;
    }

    function update() {
        moveTrump();
    }
    
    function spitMoney(){
        game.input.keyboard.onDownCallback = function(k){
            if(k == Phaser.Keyboard.SPACEBAR){
                
            }
        game.input.keyboard.onUpCallback = function(e){
            if(e.keyCode == Phaser.Keyboard.SPACEBAR){
                
            }
        };
    }
    
    function moveTrump(){
        cursors = game.input.keyboard.createCursorKeys();
    

        // Reset the players velocity (movement)
        trump.body.acceleration.x = 0;
        trump.body.acceleration.y = 0;
        
        if (cursors.left.isDown) {
            //  Move to the left
            trump.body.acceleration.x = -800;
            if(trump.body.velocity.x > 0)
                trump.body.velocity.x = 0;

            //player.animations.play('left');
        } else if (cursors.right.isDown) {
            //  Move to the right
            trump.body.acceleration.x = 800;
            if(trump.body.velocity.x <0)
                trump.body.velocity.x = 0
            //player.animations.play('right');
        }else{
            var vx = trump.body.velocity.x;
            if(vx < 40 && vx > -40)
                trump.body.velocity.x = 0;
            else if(vx > 0)
                trump.body.acceleration.x = -900;
            else
                trump.body.acceleration.x = 900;
        }

        if (cursors.up.isDown) {
            //  Move to the left
            trump.body.acceleration.y = -800;
            if(trump.body.velocity.y > 0)
                trump.body.velocity.y = 0;

            //player.animations.play('left');
        } else if (cursors.down.isDown) {
            //  Move to the right
            trump.body.acceleration.y = 800;
            if(trump.body.velocity.y < 0)
                trump.body.velocity.y = 0;

            //player.animations.play('right');
        }else{
            var vy = trump.body.velocity.y;
            if(vy < 40 && vy > -40)
                trump.body.velocity.y = 0;
            else if(vy > 0)
                trump.body.acceleration.y = -900;
            else
                trump.body.acceleration.y = 900;
        }
        
    }
};