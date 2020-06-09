/* eslint-disable prefer-const, no-unused-vars */
/* globals requestAnimationFrame, Keyboarder */

class Game {
  constructor () {
    let canvas = document.querySelector('#game-board')
    let context = canvas.getContext('2d')
    let gameSize = { x: canvas.width, y: canvas.height }

    this.player = new Player(gameSize)

    // here you will eventually collect a list of things that move in your game
    // as bodies are created, they can be pushed onto this array so they can be updated in the animation loop
    // this.bodies = []
    // including, for instance:
    // this.otter = new Otter()

    let animate = () => {
      this.update() // updating x and y coordinate values of game entities
      this.drawPlayer(context, gameSize) // here eventually you would want to call the draw method that can call the update method on each object in the game
      requestAnimationFrame(animate) // the function recursively calls itself over and over
    }
    animate()
  }

  drawPlayer (context, gameSize) {
    context.clearRect(0, 0, gameSize.x, gameSize.y)
    console.log('draw called')
    context.fillStyle = 'turquoise'
    let startingXPosition = this.player.center.x - this.player.size.x / 2
    let startingYPosition = this.player.center.y - this.player.size.y / 2
    let playerWidth = this.player.size.x
    let playerHeight = this.player.size.y
    context.fillRect(startingXPosition, startingYPosition, playerWidth, playerHeight)
  }

  draw (context, gameSize) {
    for (let body of this.bodies) {
      body.update()
    }
  }

  update () {
    this.player.update()
  }
}


class Player {
  constructor (gameSize) {
    this.size = { x: 50, y: 50 }
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 5 }
    this.keyboarder = Keyboarder
  }

  update () {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      this.center.x += 2
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      this.center.x -= 2
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
      this.center.y -= 2
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
      this.center.y += 2
    }
  }
}

let game = new Game()
