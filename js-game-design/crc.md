# Example CRC Model for Pixel Wars

**Note: this is a DRAFT version of this model. It needs more work and possibly changes to what is written here. This is meant as an example of a structure for creating your own CRC model.**

[Class Responsibility Collaborator Model](http://agilemodeling.com/artifacts/crcModel.htm)

- Play the game over and over till you know what it does.
- Describe the game in a sentence or two.
  - Look for the nouns in your sentences: these are possible classes in your game design.
  - The verbs in your sentences are the methods that those classes might have.
- You might find that you need more or fewer classes as you do this exercise -- it is a tool to help you think as well as to design.

## Game class

### Responsibilities (what does it need to do or know)

- Know the boundary of the screen
- Collision detection -> player hits target or bomb hits player
- Track score
- Ending the game / knowing when it is over
- Start the game

### Collaborators (for more information or to do something)

- Player
- Enemy
- Bonus Square

## Player class

### Responsibilites (what does it need to do or know)

- move back and forth
- has to shoot (bullets)
- collide to gain points -> bonus square
- collide to lose life/tries -> enemy

### Collaborators (for more information or to do something)

- Bullet
- Bonus square
- Enemy (to collide; to shoot down)


## Enemy class

### Responsibilities (what does it need to do or know)

- falling
- colliding
- take away points (does this responsibility belong to the Enemy?)

### Collaborators (for more information or to do something)

- Player (colliding)


## Bullet class




## Bonus Square class
