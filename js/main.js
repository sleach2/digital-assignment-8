window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 1000, 1000, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image('bricks', 'assets/bricks.png');
        game.load.audio('bks', 'assets/eerie.mp3');
        game.load.image('player', 'assets/player.png');
        game.load.image('wall', 'assets/platform.png');
        game.load.image('key', 'assets/Key2.png');
    }
    
    var music;
    var cursors;
    var player;
    var keys;
    var walls;
    var done;

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

        keys = game.add.group();
        keys.enableBody=true;

        var key = keys.create(900,40,'key');
        key.body.immovable=true;

        key = keys.create(950,900,'key');
        key.body.immovable=true;

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

        wall = walls.create(150, 130, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(1.5, 1);

        wall = walls.create(600, 60, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(1, 1);

        wall = walls.create(600, 600, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 15);

        wall = walls.create(300, 600, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 15);

        wall = walls.create(700, 600, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 15);

        wall = walls.create(800, 600, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 15);

        wall = walls.create(900, 670, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 15);

        wall = walls.create(900, 600, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(1, 1);

        wall = walls.create(100, 520, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 8);

        wall = walls.create(100, 520, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(2, 1);

        wall = walls.create(400, 800, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.5, 1);

        wall = walls.create(400, 900, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.5, 1);

        wall = walls.create(400, 600, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 7);

        wall = walls.create(500, 550, 'wall');
        wall.body.immovable = true;
        wall.scale.setTo(0.07, 8);
    }
    
    function update() {
        game.physics.arcade.collide(player, walls);
        game.physics.arcade.overlap(player, keys, kill, null, this);
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
        if(done==3){
            end();
        }
    }

    function kill(a,b){
        b.kill();
        done+=1;
    }

    function end(){
        game.input.disabled=true;
        game.add.text(player.body.x, player.body.y, 'Game Over', { fontSize: '64px', fill: '#FFFFFF' });
    }
};
