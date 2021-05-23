class Scene2 extends Phaser.Scene {
    constructor() {
      super('juego');
    }

    create ()
    {
        //  Fondo
        this.add.image(400, 300, 'sky').setScale(1.5);

        //  Plataformas: 
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'base') // piso
        platforms.create(600, 480, 'ground'); //abajo de todo a la derecha
        platforms.create(100, 400, 'right'); // a la izquierda
        platforms.create(800, 230, 'ground'); // mas alta a la derecha
        platforms.create(470, 330,'cloud') // mid cloud
        platforms.create(65, 195, 'right') // alta a la izquierda 
        platforms.create(430, 150, 'cloud') // nube alta

        // Muñequito
        player = this.physics.add.sprite(100, 450, 'dude');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        player.setScale(0.7);

        //  Inputs
        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }

        //  Estrellas
        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 100, stepX: 70 }
        });

        stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.7));
            child.x += Phaser.Math.FloatBetween(-15, 15) 
            if (Phaser.Math.FloatBetween(0, 1) > 0.5){
                child.score = 15;
                child.setTint(0x29EB2A);
                child.setScale(1.5)
            } 
            else
            {
                child.score = 10;
            }
            
        });

        // Bombas
        bombs = this.physics.add.group();

        // Score
        this.add.image(16, 50, 'star').setScale(0.7)
        scoreText = this.add.text(28, 38, 'Puntaje: 0', { fontSize: '24px', fill: '#1c1950', fontFamily: 'Arial' });

        //  Collide
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(bombs, platforms);

        // Juntar estrellitas 
        this.physics.add.overlap(player, stars, this.collectStar, null, this);
        this.physics.add.collider(player, bombs, this.hitBomb, null, this);

        // Inicializacion de variables.
        score = 0;
        gameOver = false;

        // Menú de pausa
        var pause = this.add.image(730, 50, 'pause').setScale(0.5)
        pause.setInteractive()
        pause.on('pointerdown', () => this.gamepause()); 

    }

    update ()
    {
        if (gameOver)
        {       
            return
        }
        
        
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down){
            player.setVelocityY(-330);
        }
         
    }


    collectStar (player, star)
    {
        star.disableBody(true, true);
        score += star.score 
        scoreText.setText('Score: ' + score);
        this.sound.play('starsound')

        if (stars.countActive(true) === 0)
        {
            stars.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);

            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
        
        }
    }

    gamepause() {
        this.scene.pause()
        this.scene.start('pausa')
    }


    hitBomb (player, bomb)
    {
        this.gameOver()
       
    }


    gameOver() {        
        gameOver = true;
        this.physics.pause(); 

        player.setTint(0xff0000);

        player.anims.play('turn');        

        var gameOverButton = this.add.text(700, 500, 'Game Over', { fontFamily: 'Arial', fontSize: 70, color: '#ff0000' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start('final'));
        Phaser.Display.Align.In.Center(gameOverButton, this.add.zone(400, 300, 800, 600));   
        this.sound.play('xp')  
    }

}