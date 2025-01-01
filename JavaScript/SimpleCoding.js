/* 
console.log('=========reverseString==========')
function reverseString(str) {
    return str.split('').reverse().join('');
    }
    console.log("reverseString =", reverseString("hello")); // Output: "olleh"
    
console.log("=============isPalindrome========")
function isPalindrome(str) {
    const reversed = str.split('').reverse().join(''); 
    return str === reversed;
}
// Example usage:
console.log("isPalindrome = ", isPalindrome("racecar")); // Output: true 
console.log("isPalindrome = ", isPalindrome("hellon")); // Output: false 

console.log("=============countVowels========")
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
    if (vowels.includes(char)) { count++;
    }
    }
    return count;
}
    console.log("countVowels =", countVowels("hello world")); // Output: 3

console.log("=============findLongestWord========")
function findLongestWord(str) { const words = str.split(' '); let longest = 0; for (let word of words) {
    if (word.length > longest) { longest = word.length;
    }
    }
    return longest;
    }
    console.log("findLongestWordLength = ",findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: 5
        

console.log("=============capitalizeFirstLetter========")
function capitalizeFirstLetters(str) { 
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
console.log("capitalizeFirstLetter = ", capitalizeFirstLetters("hello world")); // Output: "Hello World"

console.log("=============repeatString========")
function repeatString(str, num) { 
    if (num < 0) return ''; 
    return str.repeat(num);
}
console.log("repeatString = ", repeatString("abc", 3)); // Output "abcabcabc"

console.log("=============removeDuplicates========")
function removeDuplicates(str) {
    return [...new Set(str)].join('');
    }
    console.log("removeDuplicates = ",removeDuplicates("aabbcc")); // Output: "abc"

console.log("=============arrat comparison========")
console.log([]=="");
console.log([]==[]);

console.log(5==5); 
console.log([5]==[5]);

const string = "NKtesting"
console.log("length =", string.length); // Output: 8
console.log("slice =", string.slice(1, 3))
console.log("slipt =", string.split("t"))

console.log("=============trim test========")

const trimtest = "           NK                   Testing           "
console.log("trim =", trimtest.trim())
 */

// User input ni prompt tho tisukoni, console lo table ni display chestundi
// User input kosam prompt function use chesam

/* const prompt = require('prompt-sync')();
let a = prompt("Enter a number between 1 and 20:");

// Input value ni integer ga convert chestam
let number = parseInt(a);

// Input valid unda ledha ani check chestam
for(i=1; i<=20; i++){
    console.log(i, "*", a, "=", i*a);
}


let myString = "Hello, World!";
console.log(myString.length); 

var str = "Hello"; 
str[0] = "J"; 
console.log(str); 

console.log(0.1 + 0.2 === 0.3); 

var result = 10 / "2"; console.log(result); 

// var number = 5; number = number + "5"; document.write(number);

var arr = [1, 2, 3]; arr.length = 5; console.log(arr); 

var a = null; var b; 
console.log("a == b =", a == b); 
console.log("a === b =",a === b); 

*/
let person = {firstName: "John"};
console.log(typeof(person))

let nktoday = new Date();
console.log(nktoday)
console.log(typeof(nktoday))

let fruits = ["Apple", "Banana"];
console.log(typeof(fruits))
