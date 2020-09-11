class GameState {
    constructor(
        board = [
            [0, 1, 2, 3, 4, 5, 6],
            [0, 1, 2, 3, 4, 5, 6],
            [0, 1, 2, 3, 4, 5, 6],
            [0, 1, 2, 3, 4, 5, 6],
            [0, 1, 2, 3, 4, 5, 6],
            [0, 1, 2, 3, 4, 5, 6],
        ],
        currentTurn = '', winColor) {
        this.board = board
        this.currentTurn = currentTurn
        this.winColor = winColor
    }
    checkFull(yCoor) {
        let currRow = this.board[0][yCoor];
        if (typeof currRow === 'string') {
            document.getElementById(`column-${yCoor}`).className = `click-target full`;
        }
    }
    addDivColor(yCoor, i) {
        document.getElementById(`square-${i}-${yCoor}`).className = `token ${this.currentTurn}`
    }
    changeTurn() {
        this.currentTurn = this.currentTurn === 'red' ? 'black' : 'red';
        document.getElementById('click-targets').className = this.currentTurn
    }
    tieCheck(name1, name2) {
        if (document.getElementsByClassName('click-target full').length === 7) {
            document.getElementById('game-name').innerHTML = `<h1><center>${name1.toUpperCase()} TIES WITH ${name2.toUpperCase()}</center></h1>`
        }
    }
    columnWin() {
        let count = 0;
        for (let i = 6; i >= 0; i--) {
            for (let j = 5; j >= 1; j--) {
                let lowerEle = this.board[j][i];
                let upperEle = this.board[j - 1][i]
                if (lowerEle === upperEle && (typeof lowerEle === 'string')) {
                    count++
                    console.log(count, 'and current element', this.board[j][i])
                    this.winColor = count === 3 ? this.board[j][i] : null
                    console.log('Win color', this.winColor)
                } else {
                    count = 0
                }
            }
        }
    }
    updateBoardCoor(yCoor, name1, name2) {
        for (let i = 5; i >= 0; i--) {
            let currRow = this.board[i][yCoor];
            if (typeof currRow === 'number') {
                this.board[i][yCoor] = this.currentTurn;
                this.addDivColor(yCoor, i);
                this.changeTurn();
                this.checkFull(yCoor)
                this.columnWin()
                i = -1;
            }
        }
        this.tieCheck(name1, name2)
    }
}
export default GameState
