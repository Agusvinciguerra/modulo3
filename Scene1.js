class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload ()
    {
      this.load.image('sky', 'Assets/Background.png')
      this.load.image('ground', 'Assets/platformLeft.png');
      this.load.image('star', 'Assets/star.png');
      this.load.image('bomb', 'Assets/bomb.png');
      this.load.spritesheet('rights', 'Assets/right.png', { frameWidth: 55, frameHeight: 70}); 
      this.load.spritesheet('lefts', 'Assets/left.png', {frameWidth: 57.5, frameHeight: 80})
      this.load.spritesheet('stills', 'Assets/stil.png', {frameWidth: 52, frameHeight: 80})
      this.load.image('right', 'Assets/platformRight.png')
      this.load.image('base', 'Assets/Grounds.png')
      this.load.image('pause', 'Assets/x.png')
      this.load.image('credits', 'Assets/creditos.png')
      this.load.image('pausa', 'Assets/pausa.png')
      this.load.image('fondo', 'Assets/intrologo.png')
      this.load.image('cloud', 'Assets/cloud.png')
      this.load.audio('xp', 'Assets/sound effects/xp.mp3')
      this.load.audio('starsound', 'Assets/sound effects/starsound.ogg')
      this.load.image('startbutton', 'Assets/button.png')
      this.load.audio('intro', 'Assets/sound effects/intro.mp3')
      this.load.audio('end', 'Assets/sound effects/end.mp3')
    }

    create() {

      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('lefts', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'stills', frame: 0 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('rights', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: 'startbuttonanim',
        frames: this.anims.generateFrameNumbers('buttonanims', { start: 0, end: 1 }),
        frameRate: 20,
      })


      this.add.image(400, 300, 'fondo')

      var inicbutton = this.add.image(400, 300, 'startbutton')
      inicbutton.setInteractive()
      inicbutton.on('pointerdown', () => this.scene.start('juego') && this.sound.play('intro'));

    
    }
}
