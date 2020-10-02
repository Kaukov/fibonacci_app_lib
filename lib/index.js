/**
 * getBadValueErr
 * Returns an error message string when a value with no Fibonacci multiplication
 * table is provided, or a negative value is provided
 *
 * @param {number|string} value
 */
const getBadValueErr = (value) => {
    const intVal = parseInt(value)

    if (intVal < 0) {
        return 'Please provide a positive integer value!'
    }

    let ordinalStr = 'th'

    switch (intVal) {
        case 1:
            ordinalStr = 'st'
            break

        case 2:
            ordinalStr = 'nd'
            break

        case 3:
            ordinalStr = 'rd'
            break
    }

    return `Nothing to display for the ${value}${ordinalStr} number.`
}

/**
 * stripUnneededKeys
 * Strips unneeded keys from an object and returns it
 *
 * @param {object} memory
 * @param {number} num
 *
 * @returns {object}
 */
const stripUnneededKeys = (memory, num) => {
    Object.keys(memory).forEach(key => {
        if (parseInt(key) > num) {
            delete memory[key]
        }
    })

    return memory
}

/**
 * fibonacciTable
 * Generates a Fibonacci mu* @returns {any}ltiplication table up to the n-th number
 * specified by the length paramter
 *
 * @param {number} length
 *
 * @returns {[[number]]|string}
 */
const fibonacciTable = (length) => {
    // If we have a value less than 4, print an error message
    if (length < 4) {
        return getBadValueErr(length)
    }

    // If a value higher than the max integer value is provided,
    // return an error message string
    if (length > Number.MAX_SAFE_INTEGER) {
        return 'Exceeding the max allowed integer value'
    }

    return Object.values(fibonacci(length, true))
        .reduce((fibonacciTable, number, index, fibonacciNums) => {
            // If we're on the first row, set the first element as null
            // and print the rest of the sequence as elements.
            // Add a second row filled with zeroes because we'll be multiplying
            // the sequence numbers by zero
            if (index === 0) {
                fibonacciTable.push(
                    [
                        null,
                        ...fibonacciNums
                    ],
                    [
                        0,
                        ...fibonacciNums.map(() => 0)
                    ]
                )
            } else {
                // Add a new row to the table starting with the current
                // Fibonacci number from the sequence and it's multiples with
                // the other Fibonacci numbers from the sequence
                fibonacciTable.push([
                    number,
                    ...fibonacciNums.map(num => num * number)
                ])
            }

            return fibonacciTable
        }, [])
}

/**
 * fibonacci
 * Returns the n-th Fibonacci number or prints the whole
 * Fibonacci number sequence up to the n-th number
 *
 * @param {number} number
 * @param {boolean} [returnWholeSequence=false] Determines if the returned value should be an object containing the whole sequence
 * @param {?object} [memory] Caches already calculated Fibonacci numbers for faster operation
 *
 * @returns {number|object}
 */
const fibonacci = (number, returnWholeSequence = false, memory = null) => {
    const num = parseInt(number) // Make sure we get an integer value

    // If we haven't received a valid integer value or it's a negative value,
    // return -1
    if (typeof num !== 'number' || num < 1) {
        return -1
    }

    // If a value higher than the max integer value possible is provided,
    // return -2
    if (num > Number.MAX_SAFE_INTEGER) {
        return -2
    }

    // If a non-boolean value is provided for returnWholeSequence,
    // return -4
    if (typeof returnWholeSequence !== 'boolean') {
        return -4
    }

    // Keep the memory from the previous recursive call
    // or initialize it with the starting Fibonacci values
    memory = memory || { '1': 0, '2': 1, '3': 1 }

    // If the provided memory value is either non-object or an empty object,
    // return -3
    if (typeof memory !== 'object' || Object.keys(memory).length < 1) {
        return -3
    }

    // If we've already calculated the value of this Fibonacci number
    // return it
    if (memory[num] || num < 2) {
        return returnWholeSequence ? stripUnneededKeys(memory, num) : memory[num]
    }

    // Calculate the Fibonacci number and cache it
    memory[num] = fibonacci(num - 1, false, memory) + fibonacci(num - 2, false, memory)

    // Returns the whole sequence if returnWholeSequence is set to true
    if (returnWholeSequence) {
        return memory
    }

    // Returns the specified Fibonacci number
    return memory[num]
}

module.exports = { fibonacciTable, fibonacci }
