class Scene4 extends Phaser.Scene {
    constructor() {
      super("creds");
    }


    create() {
      this.add.image(400, 300, 'credits');
    
      var gobackButton = this.add.text(680, 550, 'Atras', {fontFamily: 'Arial', fontSize: 20, color: '#000000'})
      gobackButton.setInteractive()
      gobackButton.on('pointerdown', () => this.scene.start('pausa'))
      
    }

}

