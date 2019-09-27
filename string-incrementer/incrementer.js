/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

/*   PSEUDOCODE   */

/* 

    1. Split string input into array and filter on two categories; alphabetic (keep string) and numeric characters (array).
    2. Initialize saver variable with 1
    3. Reverse numeric array
    4. Iterate numeric array while saver remain 1 and the length still exists
    5. Add element with 1. 
        -   If result higher than 9, then ..
            - If current index equals the array length - 1, keep saver value as 1 and set the current element with 10
            - Else, keep saver value as 1 and set current element with 0
        - else, set saver value as 0 and current element with the result
    6. Reverse number array and do array join 

*/

/*   FIRST ATTEMPT SOLUTION   */

function incrementString (strng) {
    // return incrementedString
    
    let reverseStrng = strng.split("").reverse().join("")
    
    if (isNumber(reverseStrng[0])) {
      // split character by types
      let stringCharacters = strng.split("").filter((a) => { return isNumber(a) == false }).join("")
      let numberCharactersList = strng.split("").filter((a) => { return isNumber(a) == true }).reverse()
      
      let saver = 1
      
      for (let i = 0; saver == 1 && i < numberCharactersList.length; i++) {
        let sum = parseInt(numberCharactersList[i], 10) + 1
        
        if (sum > 9) {
          if (i == numberCharactersList.length - 1) {
            numberCharactersList[i] = '10'
          } else {
            numberCharactersList[i] = '0'
          }
        } else {
          numberCharactersList[i] = sum
          saver = 0
        }
      }
      
      let numberCharacters = numberCharactersList.reverse().join("")
      
      return stringCharacters + numberCharacters
      
    } else {
      return strng + "1"
    }
  }
  
  function isNumber(athing) {
    return (/[0-9]/).test(athing)
  }

/*   TEST CASES   */

console.log(incrementString('foooobar002'))
console.log(incrementString('foooobar0099'))
console.log(incrementString('foooobar99'))

/*   BEST PRACTICE   */

/* function incrementString(input) {
    return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
        return +d + 1 + ns.replace(/9/g, '0');
      });
} */