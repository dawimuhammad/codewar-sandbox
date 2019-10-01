/* 
    ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
    ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13. 
    If there are numbers or special characters included in the string, 
    they should be returned as they are. 
    
    Only letters from the latin/english alphabet should be shifted, 
    like in the original Rot13 "implementation".

*/

/*   PSEUDO    */

/* 
    1. Split into array
    2. Iterate each element, if it's string (uppercase/ lowercase) go through, or let it be when everything else
    3. Get the index of characters, add index with 13, show up the result
    4. Replace the actual character with ROT13 chiper character
    5. Return result
*/ 

/*  FIRST ATTEMPT SOLUTION   */

function rot13 (message) {
    //your code here
    let strings = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let arrMessage = message.split("")
    
    for (let a in arrMessage) {    
      if ((/[a-z]/).test(arrMessage[a])) {
        arrMessage[a] = strings.charAt(strings.indexOf(arrMessage[a]) + 13)
      } else if ((/[A-Z]/).test(arrMessage[a])) {
        arrMessage[a] = (strings.charAt(strings.indexOf(arrMessage[a].toLowerCase()) + 13)).toUpperCase()
      } 
    }
    
    return arrMessage.join("")
}

/*   TEST CASES   */

console.log("Input: Test , Expected Output: Grfg , Actual Output: ", rot13("Test"))

console.log("Input: 10+2 is twelve. , Expected Output: 10+2 vf gjryir. , Actual Output: ", rot13("10+2 is twelve."))