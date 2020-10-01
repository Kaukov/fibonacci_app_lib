const fibonacciTable = (length) => {
	return Object.values(fibonacci(length, null, true))
		.reduce((fibonacciTable, number, index, fibonacciNums) => {
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
				fibonacciTable.push([
					number,
					...fibonacciNums.map(num => num * number)
				])
			}

			return fibonacciTable
		}, [])
}

const fibonacci = (number, memory, returnWholeSequence = false) => {
	const num = parseInt(number)

	if (typeof num !== 'number' || num < 0) {
		return -1
	}

	memory = memory || { '0': 0, '1': 1, '2': 1 }

	if (memory[number]) {
		return memory[number]
	}

	memory[number] = fibonacci(number - 1, memory) + fibonacci(number - 2, memory)

	if (returnWholeSequence) {
		return memory
	}

	return memory[number]
}

module.exports = { fibonacciTable, fibonacci }
