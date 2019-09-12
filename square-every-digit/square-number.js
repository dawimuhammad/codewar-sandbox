/*

In this kata, you are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer

---   PSEUDO	---

1. Converts input to string value and split into an array
2. Initialize result variable with string type
3. Map every element of input array, square every integer-parsed element and add the string-type of square result into result variable
4. Return the result variable

*/


function squareDigits(num){
  //may the code be with you
  
  let result = ""
  let numList = num.toString().split("")
  
  numList.forEach((val) => {
    let valInt = parseInt(val, 10)
    result += (valInt * valInt)
  })
  
  return parseInt(result, 10)
}
