/* eslint-disable prefer-const, no-unused-vars */

class Game {
  constructor () {
    let canvas = document.querySelector('#game-board')
    let context = canvas.getContext('2d')
    let gameSize = { x: canvas.width, y: canvas.height }

    this.player = new Player(gameSize)
    this.drawPlayer(context)
  }

  drawPlayer (context) {
    context.fillStyle = 'turquoise'
    let startingXPosition = this.player.center.x - this.player.size.x / 2
    let startingYPosition = this.player.center.y - this.player.size.y / 2
    let playerWidth = this.player.size.x
    let playerHeight = this.player.size.y
    context.fillRect(startingXPosition, startingYPosition, playerWidth, playerHeight)
  }
}


class Player {
  constructor (gameSize) {
    this.size = { x: 50, y: 50 }
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 }
  }
}

let game = new Game()

window.addEventListener('keydown', function (e) {
  console.log(e)
})

window.addEventListener('keyup', function (e) {
  console.log(e)
})
