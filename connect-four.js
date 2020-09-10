/*******
  * Visual representation of connect four board with nested arrays
  *

board = [
    
        [ 0, 1, 2, 3, 4, 5, 6], index 0
        [ 0, 1, 2, 3, 4, 5, 6], index 1
        [ 0, 1, 2, 3, 4, 5, 6], index 2
        [ 0, 1, 2, 3, 4, 5, 6], index 3
        [ 0, 1, 2, 3, 4, 5, 6], index 4
        [ 0, 1, 2, 3, 4, 5, 6], index 5
    ]

/*******/

class UI {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  colorHover(GAMESTATE.CURRENTCOLOR) {
      document.getElementById('click-targets') = CURRENTCOLOR === 'red' ? 'red' : 'black'
  }
  document.body.addEventListener("click " (event) => {
      if (event.target.id === 'new-game') {
        newGame() {}
      }
      if (event.target.class === 'click-target') {
          columnIndex = parseInt(event.target.id.split('').pop())
          colorClick() {}
      }
  })
}

class GameState {
    constructor(
        board = [
        [ 0, 1, 2, 3, 4, 5, 6],
        [ 0, 1, 2, 3, 4, 5, 6],
        [ 0, 1, 2, 3, 4, 5, 6],
        [ 0, 1, 2, 3, 4, 5, 6],
        [ 0, 1, 2, 3, 4, 5, 6],
        [ 0, 1, 2, 3, 4, 5, 6],
        ], 
        currentTurn = 'red') {
        this.board = board
        this.currentTurn = currentTurn
    }
}
