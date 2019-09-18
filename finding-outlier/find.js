/** 
    You are given an array (which will have a length of at least 3, 
        but could be very large) containing integers. 
        
    The array is either entirely comprised of odd integers or entirely comprised of even integers,
        except for a single integer N. 
        
    Write a method that takes the array as an argument and returns this "outlier" N.

    Examples

    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)
    
    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160 (the only even number)
    */
   
   /**
    PSEUDOCODE
    
    1. Find if array consist of mostly odd or even numbers
    2. Return outliner using built-in func Array Filter Prototype
    
*/ 

/** FIRST ATTEMPT SOLUTION  */
   
/* function findOutlier(integers){
  //your code here
  
  let i = 0
  let sampleArr = integers.slice(0, 3)
  
  // if value of i is higher than 1, outliner value is considered odd
  sampleArr.map(a => {
    if (a % 2 == 0) {
      i += 1
    }
  })
  
  return (i > 1) ? ( (integers.filter( a => { return (a % 2) != 0 })[0] ) ) : ( (integers.filter( a => { return (a % 2) == 0 })[0] ) ) 
  
} */

/**  TEST CASE  */

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))

/** TEST DRIVEN DEVELOPMENT (TDD)  */

// Test.assertEquals(findOutlier([0, 1, 2]), 1)
// Test.assertEquals(findOutlier([1, 2, 3]), 2)
// Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
// Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
// Test.assertEquals(findOutlier([1,1,0,1,1]), 0)

/**  Easier Solution  */

function findOutlier(integers) {
    let evenNumbers = integers.filter(a => { return (a % 2) == 0 })
    let oddNumbers = integers.filter(a => { return (a % 2) != 0 })

    return (evenNumbers.length > 1) ? (oddNumbers[0]) : (evenNumbers[0])
    
}