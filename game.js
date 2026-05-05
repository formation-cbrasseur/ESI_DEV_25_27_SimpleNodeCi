class GameBoard {
    players

    constructor() {
        this.players = []
    }

    addPlayer(player) {
        if (player.name == "Chuck Norris")
            throw new Error('Chuck Norris is not allowed to play')
        this.players.push(player)
    }

    displayPlayersPosition() {
        this.players.forEach(player => {
            console.log(`${player.name} is at position ${player.position}`)
        })
    }

    incrementPlayerPosition(player, steps) {
        player.position += steps
    }
}

class Player {
    name
    position

    constructor(name) {
        this.name = name
        this.position = 0
    }
}

module.exports = { GameBoard, Player }