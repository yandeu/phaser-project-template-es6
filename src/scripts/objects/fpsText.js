export default class FpsText extends Phaser.GameObjects.Text {
  constructor(scene) {
    super(scene, 10, 10, '', { color: 'black', fontSize: 28 })
    scene.add.existing(this)
    this.setOrigin(0)
  }

  update(scene) {
    this.setText(`fps: ${Math.floor(scene.game.loop.actualFps)}`)
  }
}
