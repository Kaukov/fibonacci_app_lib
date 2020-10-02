/**
 * fibonacciTable
 * Generates a Fibonacci multiplication table up to the n-th number
 * specified by the length paramter
 * @param {number} length
 * @returns {[[number]]}
 */
const fibonacciTable = (length) => {
	return Object.values(fibonacci(length, null, true))
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
 * @param {number} number
 * @param {?object} [memory] Caches already calculated Fibonacci numbers for faster operation
 * @param {boolean} [returnWholeSequence=false]
 * @returns {number|object}
 */
const fibonacci = (number, memory, returnWholeSequence = false) => {
	const num = parseInt(number) // Make sure we get an integer value

	// If we haven't received an integer or it's a negative value,
	// return -1
	if (typeof num !== 'number' || num < 0) {
		return -1
	}

	// Keep the memory from the previous recursive call
	// or initialize it with the starting Fibonacci values
	memory = memory || { '1': 0, '2': 1, '3': 1 }

	// If we've already calculated the value of this Fibonacci number
	// return it
	if (memory[num]) {
		return memory[num]
	}

	// Calculate the Fibonacci number and cache it
	memory[num] = fibonacci(num - 1, memory) + fibonacci(num - 2, memory)

	// Returns the whole sequence if returnWholeSequence is set to true
	if (returnWholeSequence) {
		return memory
	}

	// Returns the specified Fibonacci number
	return memory[num]
}

module.exports = { fibonacciTable, fibonacci }
