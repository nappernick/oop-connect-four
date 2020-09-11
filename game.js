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
        console.log(this.board);
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
            document.getElementById('game-name').innerHTML = `<h1><center>${name1.toUpperCase()} TIES WITH ${name2.toUpperCase()}</center></h1>`;
        }
    }
    columnWin() {
        for (let i = 6; i >= 0; i--) {
            for (let j = 2; j >= 0; j--) {
                let first = this.board[j][i]
                let second = this.board[j + 1][i]
                let third = this.board[j + 2][i]
                let fourth = this.board[j + 3][i]
                if (typeof first === 'string') {
                    if (first === second && second === third && third === fourth) {
                        this.winColor = first;
                    }
                }
            }
        }
    }
    rowWin() {
        for (let i = 5; i >= 0; i--) {
            for (let j = 3; j >= 0; j--) {
                let first = this.board[i][j]
                let second = this.board[i][j + 1]
                let third = this.board[i][j + 2]
                let fourth = this.board[i][j + 3]
                if (first === second && second === third && third === fourth) {
                    this.winColor = first;
                }
            }
        }
    }
    diagonalRightWin() {
        for (let i = 2; i >= 0; i--) {
            for (let j = 3; j >= 0; j--) {
                let first = this.board[i][j]
                let second = this.board[i + 1][j + 1]
                let third = this.board[i + 2][j + 2]
                let fourth = this.board[i + 3][j + 3]
                if (first === second && second === third && third === fourth) {
                    this.winColor = first;
                }
            }
        }
    }
    diagonalLeftWin() {
        for (let i = 0; i < 3; i++) {
            for (let j = 6; j > 2; j--) {
                let first = this.board[i][j]
                let second = this.board[i + 1][j - 1]
                let third = this.board[i + 2][j - 2]
                let fourth = this.board[i + 3][j - 3]
                if (first === second && second === third && third === fourth) {
                    this.winColor = first;
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
                this.rowWin()
                this.diagonalRightWin()
                this.diagonalLeftWin()
                i = -1;
            }
        }
        this.tieCheck(name1, name2)
    }
    checkDepth(yCoor) {
        let count = 0;
        for (let i = 0; i < 6; i++) {
            let currentDiv = document.getElementById(`square-${i}-${yCoor}`)
            if (currentDiv.className.includes('square')) {
                count++
            }
        }
        return count * 75;
    }
}
export default GameState
