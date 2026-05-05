function correctPassword(password) {
    return password === 'correct_password'
}

// A VOIR !!!
// beforeEach(() => {
// 		// It doesn't malke so much sense here, but
// 		// We could use beforeEach to add a similar context for a game
// 		// Starting with 2 players at the position 1 of a board
// 		context = {
// 			numberOne: 10,
// 			numberTwo: 5
// 		}
// 		console.log('Before each test')
// 	})

function addThreeToNumber(number) {
    if (number > 1000)
        throw new Error('Number is too large')

    return number + 3
}

describe('Tests de la fonction correctPassword', () => {
    it('should return true for correct password', () => {
        // Arrange
        const monpassword = 'correct_password'

        // Act
        const result = correctPassword(monpassword)

        // Assert
        expect(result).toBe(true)
    });
    it('should return false for incorrect password', () => {
        // Arrange
        const monpassword = 'incorrect_password'

        // Act
        const result = correctPassword(monpassword)

        // Assert
        expect(result).toBe(false)
    })
})

describe('Tests de la fonction addThreeToNumber', () => {
    it('should add 3 to the number', () => {
        // Arrange
        const number = 5

        // Act
        const result = addThreeToNumber(number)

        // Assert
        expect(result).toBe(8)
    })

    it.each([
        [0, 3],
        [-3, 0],
        [1000, 1003]
    ])('should add 3 to the number %i', (input, expected) => {
        // Act
        const result = addThreeToNumber(input)

        // Assert
        expect(result).toBe(expected)
    })

    it.each([1001, 1500, 2000
    ])('should throw an error for numbers greater than 1000', (number) => {
        // Act & Assert
        expect(() => addThreeToNumber(number)).toThrow('Number is too large')
    })
})



