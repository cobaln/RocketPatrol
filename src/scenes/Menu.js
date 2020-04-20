class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
      // audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/new.mp3');
      this.load.audio('sfx_rocket', './assets/num2.mp3');
      this.load.audio('song', './assets/song.mp3');
      this.load.image('back', './assets/back.png');
      this.load.image('spaceship', './assets/apple2.png');
  }
    create() {
      let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#F3B141',
        color: '#843605',
        align: 'right',
        padding: {
          top: 5,
          bottom: 5,
         },

        fixedWidth: 0
        }

    //show menu
    this.starfield = this.add.tileSprite(0, 0, 640, 480, 'back').setOrigin(0, 0);
    
    let centerX = game.config.width/2;
    let centerY = game.config.height/2;
    let textSpacer = 64;

    

    this.add.text(150,90, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
    this.add.text(centerX, centerY, 'Use <--> arrows to move & f to fire', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#00FF00';
    menuConfig.color = '#000';
    this.add.text(centerX, centerY + textSpacer, 'Press <- for easy or -> for hard', menuConfig).setOrigin(0.5);
    // define keys
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    

    

        
    //this.scene.start("playScene");
  }

  update() {
    //this.sound.play('song');

    if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
      // easy mode
      game.settings = {
        spaceshipSpeed: 3,
        gameTimer: 60000    
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");
      this.sound.play('song');    
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      // hard mode
      game.settings = {
        spaceshipSpeed: 4,
        gameTimer: 45000   
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");
      this.sound.play('song');    
    }
  }
}
  
    

    




