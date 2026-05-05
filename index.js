import { GameBoard, Player } from './game.js'

console.log('hello world')

let gameBoard = new GameBoard()
let player1 = new Player('Alice')
let player2 = new Player('Bob')

gameBoard.addPlayer(player1)
gameBoard.addPlayer(player2)

gameBoard.displayPlayersPosition()

gameBoard.incrementPlayerPosition(player1, 3)
gameBoard.incrementPlayerPosition(player2, 5)

gameBoard.displayPlayersPosition()