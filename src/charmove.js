
window.onload = function() {    
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });
    
    
    
    
    function preload() {
            game.load.image('logo', './assets/img/phaser.png');
            game.load.image('trump', './assets/img/trumphead.png')
        }

    function create() {
        // need to have this for physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var logo = game.add.sprite(
            game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        game.trumpHead = game.add.sprite(game.world.centerX,
                                       game.world.centerY,
                                       'trump');
        game.trumpHead.anchor.setTo(0.5, 0.5);
        // objects need to have their physics enabled
        game.physics.arcade.enable(game.trumpHead);
        game.trumpHead.body.bounce.y = 0.2;
        game.trumpHead.body.collideWorldBounds = true;

    }
    
    function update() {
    cursors = game.input.keyboard.createCursorKeys();

    //  Reset the players velocity (movement)
    game.trumpHead.body.velocity.x = 0;
    game.trumpHead.body.velocity.y = 0;

    if (cursors.left.isDown) {
        //  Move to the left
        game.trumpHead.body.velocity.x = -150;

        //player.animations.play('left');
    } else if (cursors.right.isDown) {
        //  Move to the right
        game.trumpHead.body.velocity.x = 150;

        //player.animations.play('right');
    }
    
    if (cursors.up.isDown) {
        //  Move to the left
        game.trumpHead.body.velocity.y = -150;

        //player.animations.play('left');
    } else if (cursors.down.isDown) {
        //  Move to the right
        game.trumpHead.body.velocity.y = 150;

        //player.animations.play('right');
    } else {
        //  Stand still
        //player.animations.stop();

        //player.frame = 4;
    }
        
    }
};