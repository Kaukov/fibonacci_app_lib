const { expect } = require('chai')
const { fibonacciTable } = require('../lib')

describe('Fibonacci table tests', () => {
    describe('Fibonacci table incorrect values', () => {
        it('Should return bad value error message for a negative provided value', () => {
            const fibTableNegativeValue = fibonacciTable(-20)

            expect(fibTableNegativeValue).to.be.a('string')
            expect(fibTableNegativeValue).to.equal('Please provide a positive integer value!')
        })

        it('Should return a "nothing to display" error message for the 0th number', () => {
            const fibTable0 = fibonacciTable(0)

            expect(fibTable0).to.be.a('string')
            expect(fibTable0).to.equal('Nothing to display for the 0th number.')
        })

        it('Should return an error message to provide an integer value', () => {
            const fibTable0 = fibonacciTable('asdasd')

            expect(fibTable0).to.be.a('string')
            expect(fibTable0).to.equal('Please provide an integer value!')
        })
    })

    describe('Fibonacci table correct values', () => {
        it('Should return the correct table for the number 1', () => {
            const fibTable1 = fibonacciTable(1)

            expect(fibTable1).to.be.an('array')
            expect(fibTable1).to.deep.equal([
                [null, 0],
                [0, 0]
            ])
        })

        it('Should return the correct table for the number 2', () => {
            const fibTable2 = fibonacciTable(2)

            expect(fibTable2).to.be.an('array')
            expect(fibTable2).to.deep.equal([
                [null, 0, 1],
                [0, 0, 0],
                [1, 0, 1]
            ])
        })

        it('Should return the correct table for the number 3', () => {
            const fibTable3 = fibonacciTable(3)

            expect(fibTable3).to.be.an('array')
            expect(fibTable3).to.deep.equal([
                [null, 0, 1, 1],
                [0, 0, 0, 0],
                [1, 0, 1, 1],
                [1, 0, 1, 1]
            ])
        })

        it('Should return the correct table for the number 4', () => {
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

        it('Should return the correct table for the number 5', () => {
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

        it('Should return the correct table for the number 8', () => {
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
