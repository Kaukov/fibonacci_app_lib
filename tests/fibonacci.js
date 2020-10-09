const { expect } = require('chai')
const { fibonacci } = require('../lib')

describe('Fibonacci sequence tests', () => {
    describe('Fibonacci incorrect or 0-returning values', () => {
        it('should throw an error when 0 is provided as parameter', () => {
            expect(() => fibonacci(0))
                .to.throw('Invalid number or number less than 1 provided!')
        })

        it('should throw an error when a negative value (-20) is provided as parameter', () => {
            expect(() => fibonacci(-20))
                .to.throw('Invalid number or number less than 1 provided!')
        })

        it('should throw an error when a string is provided as parameter', () => {
            expect(() => fibonacci('asdfasd'))
                .to.throw('Invalid number or number less than 1 provided!')
        })

        it('should throw an error when a bigger than max integer value is provided', () => {
            expect(() => fibonacci(Number.MAX_SAFE_INTEGER + 2))
                .to.throw('Very high number provided. Please provide a lower value!')
        })
    })

    describe('Fibonacci correct values', () => {
        it('should return the correct sequence when 1 is provided as parameter', () => {
            const fibonacci1 = fibonacci(1)

            expect(fibonacci1).to.be.an('array')
            expect(fibonacci1).to.deep.equal([0])
        })

        it('should return the correct sequence when 2 is provided as parameter', () => {
            const fibonacci2 = fibonacci(2)

            expect(fibonacci2).to.be.an('array')
            expect(fibonacci2).to.deep.equal([0, 1])
        })

        it('should return the correct sequence when 3 is provided as parameter', () => {
            const fibonacci3 = fibonacci(3)

            expect(fibonacci3).to.be.an('array')
            expect(fibonacci3).to.deep.equal([0, 1, 1])
        })

        it('should return the correct sequence when 4 is provided as parameter', () => {
            const fibonacci4 = fibonacci(4)

            expect(fibonacci4).to.be.an('array')
            expect(fibonacci4).to.deep.equal([0, 1, 1, 2])
        })

        it('should return the correct sequence when 11 is provided as parameter', () => {
            const fibonacci55 = fibonacci(11)

            expect(fibonacci55).to.be.an('array')
            expect(fibonacci55).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ])
        })
    })
})
