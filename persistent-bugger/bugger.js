/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number

//   ----------   PSEUDOCODE   ----------

1. Converts input to string, init count variable with 0 value
2. Iterate through input when length greater than 1
3. Split each element on input string into an array
4. Iterate through input string on array, multiply each element
5. Set count to added with 1 every iteration
6. Set multipy result as new input
7. Return count

//   ----------   CODE   ----------

*/

function persistence(num) {
  //code me

  let numStr = num.toString()
  let countMultiply = 0

  while (numStr.length > 1) {
      inputSplit = numStr.split("")
    
      let i = 1, result = parseInt(inputSplit[0], 10)
      
      while (i < inputSplit.length) {
        result *= parseInt(inputSplit[i], 10)
        i++
      }
      
      numStr = result.toString()
      countMultiply ++
 }

  return countMultiply
}
