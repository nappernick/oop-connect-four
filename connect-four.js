import GameState from './game.js'
import UI from './ui.js'

window.addEventListener('DOMContentLoaded', event => {
  let game
  let name1
  let name2
  let player1
  let player2
  document.getElementById('board-holder').className = 'is-invisible'
  document.getElementById('form-holder').addEventListener('keyup', (event) => {
    name1 = document.getElementById('player-1-name').value;
    name2 = document.getElementById('player-2-name').value;
    if (name1 !== '' && name2 !== '')
      document.getElementById('new-game').removeAttribute('disabled')
  })
  document.body.addEventListener("click", clickStuff)

    function clickStuff (event) {
    if (event.target.id === 'new-game') {
      document.getElementById('player-1-name').value = ''
      document.getElementById('player-2-name').value = ''
      document.getElementById('board-holder').removeAttribute('class');



      document.getElementById('game-name').innerHTML = `<h1><center>${name1.toUpperCase()} VS. ${name2.toUpperCase()}</center></h1>`
      player1 = new UI(name1, "red");
      player2 = new UI(name2, "black");
      game = new GameState()
      if (Math.floor(Math.random() * 10) % 2 === 0) { //RANDOMIZING THE FIRST PLAYER, RED OR BLACK
        document.getElementById('click-targets').className = player1.color // sets the hover color
      } else {
        document.getElementById('click-targets').className = player2.color // sets the hover color
      }
      game.currentTurn = document.getElementById('click-targets').className
    }
    if (event.target.className === 'click-target') {
      const yCoor = parseInt(event.target.id.split('').pop())
      game.updateBoardCoor(yCoor, name1, name2)
      if (game.winColor === player1.color) {
        document.getElementById('game-name').innerHTML = `<h1><center>${player1.name.toUpperCase()} WINS! </center></h1>`
        // document.getElementById('new-game').setAttribute('disabled')
        document.body.removeEventListener("click", clickStuff)
      } else if (game.winColor === player2.color) {
        document.getElementById('game-name').innerHTML = `<h1><center>${player2.name.toUpperCase()} WINS! </center></h1>`
        // document.getElementById('click-targets').setAttribute('disabled')
        document.body.removeEventListener("click", clickStuff)
      }
    }
  }

})
