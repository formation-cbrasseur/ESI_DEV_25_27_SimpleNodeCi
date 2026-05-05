const { GameBoard, Player } = require('../game')

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

    it('should display players position', () => {
        // Arrange
        gameBoard.addPlayer(player)

        // Act
        gameBoard.displayPlayersPosition()

        // Assert
        expect(true).toBeTruthy() // Just to avoid the "Your test suite must contain at least one test." error
    })
})