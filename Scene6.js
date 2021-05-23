class Scene6 extends Phaser.Scene {
    constructor() {
      super('pausaxD');
    }

    preload () {
      this.load.image('xD', 'Assets/xD.png')
    }

    create () {
    this.add.image(400, 300, 'xD')

    var resetButton = this.add.text(0, 250, 'Reiniciar', { fontSize: 30, fill: '#1c1950', fontFamily: 'Arial' })
        Phaser.Display.Align.In.Center(resetButton, this.add.zone(400, 500, 800, 1000))
        .setInteractive()
        .on('pointerdown', () => this.scene.start('juego'));
    }
}