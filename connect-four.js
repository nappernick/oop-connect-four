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
    checkFull (yCoor) {
      for (let i = 6; i > 0; i--){
        let currRow = this.board[i][yCoor];
        if (typeof currRow === 'number'){
          return;
        } else {
          document.getElementById(`column-${yCoor}`).className = `click-target full`;
        }
      }
    }
    updateBoardCoor (yCoor) {
      for (let i = 6; i > 0; i--){
        let currRow = this.board[i][yCoor];
        if (typeof currRow === 'number'){
          this.board[i][yCoor] = this.currentTurn;
          this.addDivColor(yCoor, i);
          this.changeTurn();
          i = 0;
        }
      }
    }
    addDivColor (yCoor, i) {
      document.getElementById(`square-${i}-${yCoor}`).className = `token-square ${this.currentTurn}`
    }
    changeTurn () {
      this.currentTurn = this.currentTurn === 'red' ? 'black' : 'red';
    }
}


window.addEventListener('DOMContentLoaded', event =>{
  document.body.addEventListener("click " (event) => {
    const input1 = document.getElementById('player-1-name');
    const input2 = document.getElementById('player-2-name');
    if (event.target.id === 'new-game') {
      newGame(name1, name2) {
        const player1 = new UI (name1, "red");
        const player2 = new UI (name2, "black");
      }
    }
    if (event.target.class === 'click-target') {
        columnIndex = parseInt(event.target.id.split('').pop())
        colorClick() {}
    }
})








})