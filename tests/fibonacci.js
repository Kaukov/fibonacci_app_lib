const { expect } = require('chai')
const { fibonacci } = require('../lib')

describe('Fibonacci sequence tests', () => {
    describe('Fibonacci incorrect or 0-returning values', () => {
        it('should return -1 when 0 is provided as parameter', () => {
            const fibonacci0 = fibonacci(0)

            expect(fibonacci0).to.be.a('number')
            expect(fibonacci0).to.equal(-1)
        })

        it('should return -1 when a negative value (-20) is provided as parameter', () => {
            const fibonacciNeg = fibonacci(-20)

            expect(fibonacciNeg).to.be.a('number')
            expect(fibonacciNeg).to.equal(-1)
        })

        it('should return -1 when a string is provided as parameter', () => {
            const fibonacci0 = fibonacci('asdfasdf')

            expect(fibonacci0).to.be.a('number')
            expect(fibonacci0).to.equal(-1)
        })

        it('should return 0 when 1 is provided as parameter', () => {
            const fibonacci1 = fibonacci(1)

            expect(fibonacci1).to.be.a('number')
            expect(fibonacci1).to.equal(0)
        })

        it('should return -2 when a bigger than max integer value is provided', () => {
            const fibonacciBigInt = fibonacci(Number.MAX_SAFE_INTEGER + 2)

            expect(fibonacciBigInt).to.be.a('number')
            expect(fibonacciBigInt).to.equal(-2)
        })

        it('should return -3 when a bad memory value is provided', () => {
            const fibonacciBadMemory = fibonacci(10, false, 'whatisthis')

            expect(fibonacciBadMemory).to.be.a('number')
            expect(fibonacciBadMemory).to.equal(-3)
        })

        it('should return -4 when a non-boolean value is provided as a second param', () => {
            const fibonacciBadThirdParam = fibonacci(10, 'whatisthis')

            expect(fibonacciBadThirdParam).to.be.a('number')
            expect(fibonacciBadThirdParam).to.equal(-4)
        })
    })

    describe('Fibonacci correct values', () => {
        it('should return 1 when 2 is provided as parameter', () => {
            const fibonacci2 = fibonacci(2)

            expect(fibonacci2).to.be.a('number')
            expect(fibonacci2).to.equal(1)
        })

        it('should return 1 when 3 is provided as parameter', () => {
            const fibonacci3 = fibonacci(3)

            expect(fibonacci3).to.be.a('number')
            expect(fibonacci3).to.equal(1)
        })

        it('should return 2 when 4 is provided as parameter', () => {
            const fibonacci4 = fibonacci(4)

            expect(fibonacci4).to.be.a('number')
            expect(fibonacci4).to.equal(2)
        })

        it('should return 55 when 11 is provided as parameter', () => {
            const fibonacci55 = fibonacci(11)

            expect(fibonacci55).to.be.a('number')
            expect(fibonacci55).to.equal(55)
        })

        describe('should print the correct whole sequence', () => {
            it('should return the correct sequence object for value 1', () => {
                const fibonacci1Sequence = fibonacci(1, true)

                expect(fibonacci1Sequence).to.be.an('object')
                expect(fibonacci1Sequence).to.deep.equal({
                    '1': 0
                })
            })

            it('should return the correct sequence object for value 2', () => {
                const fibonacci2Sequence = fibonacci(2, true)

                expect(fibonacci2Sequence).to.be.an('object')
                expect(fibonacci2Sequence).to.deep.equal({
                    '1': 0,
                    '2': 1
                })
            })

            it('should return the correct sequence object for value 3', () => {
                const fibonacci3Sequence = fibonacci(3, true)

                expect(fibonacci3Sequence).to.be.an('object')
                expect(fibonacci3Sequence).to.deep.equal({
                    '1': 0,
                    '2': 1,
                    '3': 1
                })
            })

            it('should return the correct sequence object for value 4', () => {
                const fibonacci4Sequence = fibonacci(4, true)

                expect(fibonacci4Sequence).to.be.an('object')
                expect(fibonacci4Sequence).to.deep.equal({
                    '1': 0,
                    '2': 1,
                    '3': 1,
                    '4': 2
                })
            })

            it('should return the correct sequence object for value 5', () => {
                const fibonacci5Sequence = fibonacci(5, true)

                expect(fibonacci5Sequence).to.be.an('object')
                expect(fibonacci5Sequence).to.deep.equal({
                    '1': 0,
                    '2': 1,
                    '3': 1,
                    '4': 2,
                    '5': 3
                })
            })

            it('should return the correct sequence object for value 8', () => {
                const fibonacci8Sequence = fibonacci(8, true)

                expect(fibonacci8Sequence).to.be.an('object')
                expect(fibonacci8Sequence).to.deep.equal({
                    '1': 0,
                    '2': 1,
                    '3': 1,
                    '4': 2,
                    '5': 3,
                    '6': 5,
                    '7': 8,
                    '8': 13
                })
            })

            it('should return the correct sequence object for value 13', () => {
                const fibonacci13Sequence = fibonacci(13, true)

                expect(fibonacci13Sequence).to.be.an('object')
                expect(fibonacci13Sequence).to.deep.equal({
                    '1': 0,
                    '2': 1,
                    '3': 1,
                    '4': 2,
                    '5': 3,
                    '6': 5,
                    '7': 8,
                    '8': 13,
                    '9': 21,
                    '10': 34,
                    '11': 55,
                    '12': 89,
                    '13': 144
                })
            })
        })
    })
})
