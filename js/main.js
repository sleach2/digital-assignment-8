window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 400, 300, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image('bricks', 'assets/bricks.png');
        game.load.audio('bks', 'assets/eerie.mp3');
        game.load.image('player', 'assets/player.png');
    }
    
    var music;
    var cursors;

    function create() {
        music=game.add.audio('bks');
        music.play('',0,0.5,true);

        game.world.setBounds(0,0,2000,2000);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.tileSprite(0,0,2000,2000,'bricks');

        player = game.add.sprite(0, game.world.height-130, 'player');
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;

        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);

    }
    
    function update() {
       
    }
};
