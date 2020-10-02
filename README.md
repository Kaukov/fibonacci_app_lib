# Fibonacci sequence and Fibonacci multiplication table generator

This library does exactly this - generates the n-th Fibonacci number, generates the whole
Fibonacci sequence up to the n-th number, or generates a whole Fibonacci multiplication
table up to the n-th number.

## Requirements
`nodejs >= 10.12`

`npm >= 6.4.1`

In order to run the tests, you need to have at least `nodejs` __v10.12__ or higher.
If you're not interested in running tests, you can safely use `nodejs` __v8+__

## How to use

### __(Option 1)__ Clone this repository to a directory of your choice

```sh
git clone https://github.com/Kaukov/fibonacci_app_lib.git
```

### __(Option 2)__ Use it as an npm module

Install via `npm`:
```sh
npm install git+https://github.com/Kaukov/fibonacci_app_lib.git
```

### Finally include it in your project

```js
const { fibonacci, fibonacciTable } = require('./fibonacci_app_lib')
```
