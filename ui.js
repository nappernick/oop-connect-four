class UI {
    constructor(name, color, myTurn = false) {
        this.name = name;
        this.color = color;
        this.myTurn = myTurn
    }
    getname() {
        return this.name
    }
}
export default UI
