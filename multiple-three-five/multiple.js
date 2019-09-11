/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once.



--- Pseudo ---

1. Initialize result variable that will be assigned with number of sum (type number)
2. Iterate from 0 to n, if the current number on iteration returns 0 on MOD 3 or 5 add to sum variable
3. Note: iteration can reduced when given number will be restricted above 3 or 5


--- Code ---

*/

function solution(number) {
    let sumValue = 0
    let i = 0
    
    while (i < number) {
      if ((i % 3 == 0) || (i % 5 == 0)) {
        sumValue += i
      }
      
      i++
    }
    
    return sumValue
}