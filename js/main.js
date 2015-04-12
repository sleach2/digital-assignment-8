window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 1000, 1000, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image('bricks', 'assets/bricks.png');
        game.load.audio('bks', 'assets/eerie.mp3');
        game.load.image('player', 'assets/player.png');
    }
    
    var music;
    var cursors;
    var player;

    function create() {
        music=game.add.audio('bks');
        music.play('',0,0.5,true);

        game.world.setBounds(0,0,1000,1000);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.tileSprite(0,0,1000,1000,'bricks');

        player = game.add.sprite(0, 0, 'player');
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;

        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);

    }
    
    function update() {
        //game.physics.arcade.collide(player, platforms);
        player.body.velocity.x=0;
        player.body.velocity.y=0;
        if(cursors.left.isDown){
            player.body.velocity.x = -250;
        }else if(cursors.right.isDown){
            player.body.velocity.x = 250;
        }else if(cursors.up.isDown){
            player.body.velocity.y = -250;
        }else if(cursors.down.isDown){
            player.body.velocity.y = 250;
        }
    }
};
