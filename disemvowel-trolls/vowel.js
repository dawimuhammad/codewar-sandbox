/* 

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.

--- PSEUDO ---

// 1. Set up the vowel words on regex input
// 2. On input, use string replace to remove given condition with empty string  “aiueoy” -> “”
// 3. Return the result

--- Code --- */

function disemvowelTrolls(str) {
    return str.replace(/[aiueo]/gi, "")
}

// --- Test Case ---

console.log(disemvowelTrolls("This website is for losers LOL!"))
console.log(disemvowelTrolls("No offense but, Your writing is among the worst I've ever read"))
console.log(disemvowelTrolls("What are you, a communist?"))