/* 

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption

*/

/* PSEUDOCODE

1. Initiate return result variable with empty string
2.  - Iterate through input array & joins array
    - Slice array with current state count of iteration as initial index and add it up with k value as end index
    - Joins sliced arrray as a single string and compare the length with the length of return result variable string
    - If current length of joined-string is higher than return result length, set it as new return result
    - Continue iteration
3. Returns result string variable
*/

/* FIRST ATTEMPT SOLUTION */

function longestConsec(strarr, k) {
    // your code
    let results = "", i = 0
    
    while (i <= strarr.length - k) {
        // let currentStr = ""
        // let startindex = i, endindex = (i + k)
          
        // while (startindex < endindex) {
        //     currentStr += strarr[startindex]
        //     startindex++
        // }

        let currentStr = strarr.slice(i, (i + k)).join("")
            
        if (currentStr.length > results.length) {
            results = currentStr
        }

        i++
    }
    
   return results
}

// TEST CASE

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))

/* TEST DRIVEN DEVELOPMENT CASE */

function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

// Test.describe("longestConsec",function() {
// Test.it("Basic tests",function() { 
//     testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
//     testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
//     testing(longestConsec([], 3), "")
//     testing(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
//     testing(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
//     testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
//     testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
//     testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
//     testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
// })})