/*

Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names,
        which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

// --- Pseudocode ---

1. Retrieve value of object key 'name' on each array using filter prototype of an array
2. Joins the result array to a string and separate using comma except the last two elements that will use ampersand

// Solution on Code

*/

function getNames(names) {

    let nameList = names.map((a) => { return a.name })
    
    let strNames = (nameList.length > 0) ? (nameList[0]) : ( '' )
    
    let i = 1
    
    while (i < nameList.length) {
        
        (i == nameList.length - 1) ? (strNames = strNames + ' & ' + nameList[i]) : (strNames = strNames + ', ' + nameList[i])
        
        i++
    }
    
    return strNames

    // Refactor Code

    // var xs = names.map(p => p.name)
    // var x = xs.pop()
    // return xs.length ? xs.join(", ") + " & " + x : x || ""

    // var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

}

console.log(getNames([{ name : "Husein" }, { name : "Dani" }, { name : "Dawi" }, { name : "Lidya" }, { name : "Sigid" }]))