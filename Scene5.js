class Scene5 extends Phaser.Scene {
    constructor() {
      super("pausa");
    }

    

    create() {
        this.add.image(400, 300, 'pausa');
      
        var resetButton = this.add.text(0, 250, 'Reiniciar', { fontSize: 30, fill: '#1c1950', fontFamily: 'Arial' })
        Phaser.Display.Align.In.Center(resetButton, this.add.zone(400, 300, 800, 600))
        .setInteractive()
        .on('pointerdown', () => this.scene.start('juego') && this.sound.play('intro'));

        var resumeButton = this.add.text(0, 350, 'Reanudar', { fontFamily: 'Arial', fontSize: 30, color: '#1c1950' })
        Phaser.Display.Align.In.Center(resumeButton, this.add.zone(400, 350, 800, 700))
        resumeButton.setInteractive()
        resumeButton.on('pointerdown', () => this.scene.start('pausaxD')) 

        var endButton = this.add.text(0, 450, 'Finalizar', { fontSize: 30, fill: '#1c1950', fontFamily: 'Arial' })
        Phaser.Display.Align.In.Center(endButton, this.add.zone(400, 400, 800, 800))
        endButton.setInteractive()
        endButton.on('pointerdown', () => this.scene.start('final'))
        
        var credsButton = this.add.text(0, 550, 'Creditos', { fontFamily: 'Arial', fontSize: 30, color: '#1c1950' })
        Phaser.Display.Align.In.Center(credsButton, this.add.zone(400, 450, 800, 900))
        credsButton.setInteractive()
        credsButton.on('pointerdown', () => this.scene.start('creds'))

    }

    /*volver() { 
      this.scene.resume('juego')
      pause == false 
      
    }*/
}