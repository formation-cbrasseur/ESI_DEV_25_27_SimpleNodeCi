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

describe('GameBoard tests', () => {
    let gameBoard
    let player

    beforeEach(() => {
        gameBoard = new GameBoard()
        player = new Player('Alice')
    })

    // Les deux tests suivants sont possibles, mais on fait souvent une vérification du nombre d'éléments (comme le test suivant)
    it('should add a player to the game board', () => {
        // Act
        gameBoard.addPlayer(player)

        // Assert
        expect(gameBoard.players).toContain(player)
    })

    it('should add a player and number of players should be 1', () => {
        // Act
        gameBoard.addPlayer(player)

        // Assert
        expect(gameBoard.players.length).toBe(1)
    })

    it('should increment player position', () => {
        // Arrange
        gameBoard.addPlayer(player)

        // Act
        gameBoard.incrementPlayerPosition(player, 3)
        
        // Assert
        expect(player.position).toBe(3)
    })

    it('show expect possibilities', () => {
        expect(true).toBeTruthy()
        expect(false).toBeFalsy()
        expect(null).toBeNull()
        expect(undefined).toBeUndefined()
        expect(0).toBeFalsy()
        expect('').toBeFalsy()
        expect('Test').toBe('Test')
        expect(() => gameBoard.addPlayer(new Player('Chuck Norris'))).toThrow('Chuck Norris is not allowed to play')
    })
})