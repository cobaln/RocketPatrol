//Henry Nguyen 1616069
//Fire Ui text 10 
//copy right free music 10
//4 new random explosions 15
//new title screen 15
//Redesigning game 50






let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
let game = new Phaser.Game(config);
// define game settings
game.settings = {
  spaceshipSpeed: 3,
  gameTimer: 60000    
}
// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;