
// canvas is 500 x 500
let gamesize = { x: 500, y: 500 }

// How do you select a random value from an array in JS?
// Could we use Math.random somehow? Somehow use it as an index position for the array?


class Enemy {
  constructor (center) {
    this.size = { x: 15, y: 15 }
    this.propertyOfSomeSort = 'This is available outside the constructor'
    let randomNum // need to define this

    let topPosition = { x: randomNum, y: 0 } // comes from the top
    let rightPosition = { x: gamesize.x, y: randomNum }// comes from the right
    let bottomPosition = { x: randomNum, y: gamesize.y } // comes from the bottom
    let leftPosition = { x: 0, y: randomNum }// comes from the left

    let possibleValues = [topPosition, rightPosition, bottomPosition, leftPosition]

    let centerValues = possibleValues[Math.floor(Math.random() * possibleValues.length)]
  }
}


// I want to see a new Enemy (each time I create one) that has a different center position based on the limits I have set

// TODO:

// - when and how to create new enemies with different starting positions?


// THINGS I NEED TO KNOW:
// how do you even do this thing?
