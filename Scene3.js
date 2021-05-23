class Scene3 extends Phaser.Scene {
    constructor() {
      super("final");
    }

    preload ()
    {
      this.load.image('gameovah', 'Assets/Gameover.png')

    }
    
    create() {
      this.add.image(400, 300, 'gameovah');
     


      var puntajefinal = this.add.text(0, 0, 'Puntaje: ' + score,  { fontFamily: 'Arial', fontSize: 70, color: '#000000' });
      Phaser.Display.Align.In.Center(puntajefinal, this.add.zone(400, 300, 800, 600));


      var restartButton = this.add.text(0, 500, 'Finalizar', { fontFamily: 'Arial', fontSize: 20, color: '#000000' })
      Phaser.Display.Align.In.Center(restartButton, this.add.zone(400, 400, 800, 800));
      restartButton.setInteractive()
      restartButton.on('pointerdown', () => this.scene.start('inicio') && this.sound.play('end')); 

    }

    
}
  