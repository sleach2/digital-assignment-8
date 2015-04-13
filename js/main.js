window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 1000, 1000, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image('bricks', 'assets/bricks.png');
        game.load.audio('bks', 'assets/eerie.mp3');
        game.load.image('player', 'assets/player.png');
        game.load.image('wall', 'assets/platform.png');
    }
    
    var music;
    var cursors;
    var player;
    var walls;

    function create() {
        music=game.add.audio('bks');
        music.play('',0,0.5,true);

        game.world.setBounds(0,0,1000,1000);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.tileSprite(0,0,1000,1000,'bricks');

        player = game.add.sprite(40, 40, 'player');
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;

        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);

        walls = game.add.group();
        walls.enableBody = true;

        var wall = walls.create(0, 0, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(3, 1); 

        wall = walls.create(0, 970, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(3, 1);

        wall = walls.create(0, 0, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 50);

        wall = walls.create(970, 0, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 50);

        wall = walls.create(0, 60, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(1, 1);

        wall = walls.create(480, 0, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 15);

        wall = walls.create(200, 200, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(2, 1);
    }
    
    function update() {
        game.physics.arcade.collide(player, walls);
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
