const { expect } = require('chai')
const { fibonacciTable } = require('../lib')

describe('Fibonacci table tests', () => {
    describe('Fibonacci table incorrect values', () => {
        it('should throw an error when a negative value is provided', () => {
            expect(() => fibonacciTable(-20))
                .to.throw('Invalid number or number less than 1 provided!')
        })

        it('should throw an error when 0 is provided as value', () => {
            expect(() => fibonacciTable(0))
                .to.throw('Invalid number or number less than 1 provided!')
        })

        it('should return an error message to provide an integer value', () => {
            expect(() => fibonacciTable('asdfasd'))
                .to.throw('Invalid number or number less than 1 provided!')
        })

        it('should throw an error when a bigger than max integer value is provided', () => {
            expect(() => fibonacciTable(Number.MAX_SAFE_INTEGER + 2))
                .to.throw('Very high number provided. Please provide a lower value!')
        })
    })

    describe('Fibonacci table correct values', () => {
        it('should return the correct table for the number 1', () => {
            const fibTable1 = fibonacciTable(1)

            expect(fibTable1).to.be.an('array')
            expect(fibTable1).to.deep.equal([
                [null, 0],
                [0, 0]
            ])
        })

        it('should return the correct table for the number 2', () => {
            const fibTable2 = fibonacciTable(2)

            expect(fibTable2).to.be.an('array')
            expect(fibTable2).to.deep.equal([
                [null, 0, 1],
                [0, 0, 0],
                [1, 0, 1]
            ])
        })

        it('should return the correct table for the number 3', () => {
            const fibTable3 = fibonacciTable(3)

            expect(fibTable3).to.be.an('array')
            expect(fibTable3).to.deep.equal([
                [null, 0, 1, 1],
                [0, 0, 0, 0],
                [1, 0, 1, 1],
                [1, 0, 1, 1]
            ])
        })

        it('should return the correct table for the number 4', () => {
            const fibTable4 = fibonacciTable(4)

            expect(fibTable4).to.be.an('array')
            expect(fibTable4).to.deep.equal([
                [null, 0, 1, 1, 2],
                [0, 0, 0, 0, 0],
                [1, 0, 1, 1, 2],
                [1, 0, 1, 1, 2],
                [2, 0, 2, 2, 4]
            ])
        })

        it('should return the correct table for the number 5', () => {
            const fibTable5 = fibonacciTable(5)

            expect(fibTable5).to.be.an('array')
            expect(fibTable5).to.deep.equal([
                [null, 0, 1, 1, 2, 3],
                [0, 0, 0, 0, 0, 0],
                [1, 0, 1, 1, 2, 3],
                [1, 0, 1, 1, 2, 3],
                [2, 0, 2, 2, 4, 6],
                [3, 0, 3, 3, 6, 9]
            ])
        })

        it('should return the correct table for the number 8', () => {
            const fibTable8 = fibonacciTable(8)

            expect(fibTable8).to.be.an('array')
            expect(fibTable8).to.deep.equal([
                [null, 0, 1, 1,2, 3, 5, 8, 13],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 1, 2, 3, 5, 8, 13],
                [1, 0, 1, 1, 2, 3, 5, 8, 13],
                [2, 0, 2, 2, 4, 6, 10, 16, 26],
                [3, 0, 3, 3, 6, 9, 15, 24, 39],
                [5, 0, 5, 5, 10, 15, 25, 40, 65],
                [8, 0, 8,  8, 16, 24, 40, 64, 104],
                [13, 0, 13, 13, 26, 39, 65, 104, 169]
            ])
        })
    })
})
