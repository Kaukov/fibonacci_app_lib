/**
 * fibonacciTable
 * Generates a Fibonacci multiplication table up to the n-th number
 * specified by the length paramter
 *
 * @param {number} length
 *
 * @returns {[[ number ]]}
 */
const fibonacciTable = (length) => {
    const intLength = parseInt(length)

    return fibonacci(intLength).reduce((fibonacciTable, number, index, sequence) => {
        // If we're on the first row, set the first element as null
        // and print the rest of the sequence as elements.
        // Add a second row filled with zeroes because we'll be multiplying
        // the sequence numbers by zero
        if (index === 0) {
            fibonacciTable.push(
                [
                    null,
                    ...sequence
                ],
                [
                    0,
                    ...sequence.map(() => 0)
                ]
            )
        } else {
            // Add a new row to the table starting with the current
            // Fibonacci number from the sequence and it's multiples with
            // the other Fibonacci numbers from the sequence
            fibonacciTable.push([
                number,
                ...sequence.map(num => num * number)
            ])
        }

        return fibonacciTable
    }, [])
}

/**
 * fibonacci
 * Returns Fibonacci number sequence up to the n-th number
 *
 * @param {number} number
 *
 * @returns {array}
 */
const fibonacci = (number) => {
    const num = parseInt(number) // Make sure we get an integer value

    // If we haven't received a valid integer value or it's a negative value,
    // throw an error
    if (typeof num !== 'number' || num < 1 || isNaN(num)) {
        throw new Error('Invalid number or number less than 1 provided!')
    }

    // If a value higher than the max integer value possible is provided,
    // throw an error
    if (num > Number.MAX_SAFE_INTEGER) {
        throw new Error('Very high number provided. Please provide a lower value!')
    }

    const sequence = [0, 1, 1]

    // If the value exists in the initial Fibonacci sequence, return it
    if (sequence[num - 1] !== undefined) {
        return sequence.slice(0, num)
    }

    // Calculate each Fibonacci number in the sequence up to the provided number
    while (sequence.length < num) {
        const currentLength = sequence.length

        sequence.push(sequence[currentLength - 1] + sequence[currentLength - 2])
    }

    // Returns the Fibonacci sequence up to the provided number
    return sequence
}

module.exports = { fibonacciTable, fibonacci }
