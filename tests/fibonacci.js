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
            it('should return the correct sequence object for value 4', () => {
                const fibonacci4Sequence = fibonacci(4, true)

                expect(fibonacci4Sequence).to.be.an('object')
                expect(fibonacci4Sequence).to.have.property('1').with.valueOf(0)
                expect(fibonacci4Sequence).to.have.property('2').with.valueOf(1)
                expect(fibonacci4Sequence).to.have.property('3').with.valueOf(1)
                expect(fibonacci4Sequence).to.have.property('4').with.valueOf(2)
            })

            it('should return the correct sequence object for value 5', () => {
                const fibonacci5Sequence = fibonacci(5, true)

                expect(fibonacci5Sequence).to.be.an('object')
                expect(fibonacci5Sequence).to.have.property('1').with.valueOf(0)
                expect(fibonacci5Sequence).to.have.property('2').with.valueOf(1)
                expect(fibonacci5Sequence).to.have.property('3').with.valueOf(1)
                expect(fibonacci5Sequence).to.have.property('4').with.valueOf(2)
                expect(fibonacci5Sequence).to.have.property('5').with.valueOf(3)
            })

            it('should return the correct sequence object for value 8', () => {
                const fibonacci8Sequence = fibonacci(8, true)

                expect(fibonacci8Sequence).to.be.an('object')
                expect(fibonacci8Sequence).to.have.property('1').with.valueOf(0)
                expect(fibonacci8Sequence).to.have.property('2').with.valueOf(1)
                expect(fibonacci8Sequence).to.have.property('3').with.valueOf(1)
                expect(fibonacci8Sequence).to.have.property('4').with.valueOf(2)
                expect(fibonacci8Sequence).to.have.property('5').with.valueOf(3)
                expect(fibonacci8Sequence).to.have.property('6').with.valueOf(5)
                expect(fibonacci8Sequence).to.have.property('7').with.valueOf(8)
                expect(fibonacci8Sequence).to.have.property('8').with.valueOf(13)
            })

            it('should return the correct sequence object for value 13', () => {
                const fibonacci13Sequence = fibonacci(13, true)

                expect(fibonacci13Sequence).to.be.an('object')
                expect(fibonacci13Sequence).to.have.property('1').with.valueOf(0)
                expect(fibonacci13Sequence).to.have.property('2').with.valueOf(1)
                expect(fibonacci13Sequence).to.have.property('3').with.valueOf(1)
                expect(fibonacci13Sequence).to.have.property('4').with.valueOf(2)
                expect(fibonacci13Sequence).to.have.property('5').with.valueOf(3)
                expect(fibonacci13Sequence).to.have.property('6').with.valueOf(5)
                expect(fibonacci13Sequence).to.have.property('7').with.valueOf(8)
                expect(fibonacci13Sequence).to.have.property('8').with.valueOf(13)
                expect(fibonacci13Sequence).to.have.property('9').with.valueOf(21)
                expect(fibonacci13Sequence).to.have.property('10').with.valueOf(34)
                expect(fibonacci13Sequence).to.have.property('11').with.valueOf(55)
                expect(fibonacci13Sequence).to.have.property('12').with.valueOf(89)
                expect(fibonacci13Sequence).to.have.property('13').with.valueOf(144)
            })
        })
    })
})
