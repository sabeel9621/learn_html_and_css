// let name = "sabeel khan";
// // let lname = "khan";
// console.log(name);
// console.log(name.length);
// console.log(name.charAt(0));
// console.log(name.charCodeAt(5));
// console.log(name.at(4));
// // console.log(name.str(0));
// console.log(name.slice(2, 4))
// console.log(name.substring(4))
// console.log(name.substr(4))
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// // console.log(name.concat(name + lname));
// console.log(name.trim(0, 2));
// console.log(name.trimEnd(4));
// // console.log(name.padEnd(4, "0"));
// // console.log(name.padEnd(4, "x"));
// console.log(name.repeat(5));
// console.log(name.replace("khan", "kha"));
// // console.log(name.replaceAll())
// // console.log(name.split(","))
// // console.log(name.split(""))
// console.log(name.split("|"))

// getName();
// console.log(x);

// var x = 7;
// function getName () {
//     console.log("namaste javascript")
// }



//  Reverse a String: Write a function that takes a string as input and returns the string reversed.


// function reversedstring (str) {
//     return str.split('').reverse().join('');
// }
// let inputstring = "hello";
// console.log(reversedstring("hello"));

// // Palindrome Check: Write a function that checks if a given string is a palindrome(reads the same forwards and backwards).

// function isPalindrome (str) {
//     const formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();


//     const reversedStr = formattedStr.split('').reverse().join('');

//     // Check if the original and reversed strings are the same
//     return formattedStr === reversedStr;
// }

// // Test the function
// console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
// console.log(isPalindrome("hello")); // Output: false



// function countVowels (str) {
//     // Convert the string to lowercase to handle both cases
//     str = str.toLowerCase();

//     // Initialize a count variable
//     let count = 0;

//     // Loop through each character of the string
//     for (let i = 0; i < str.length; i++) {
//         // Check if the character is a vowel
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//             // Increment the count if it's a vowel
//             count++;
//         }
//     }

//     // Return the count of vowels
//     return count;
// }

// // Test the function
// let testString = "Hello World";

// console.log(countVowels(testString)); // Output: 3

















// // function reverseWords (sentence) {
// //     // Split the sentence into words
// //     const words = sentence.split(' ');

// //     // Reverse the order of words
// //     const reversedWords = words.reverse();

// //     // Join the reversed words back into a sentence
// //     const reversedSentence = reversedWords.join(' ');

// //     return reversedSentence;
// // }

// // // Test the function
// // let testSentence = "The quick brown fox";

// // console.log(reverseWords(testSentence)); // Output: "fox brown quick The"


var x = 7;
function getName () {
    console.log("namaste javascript");

}
getName();

console.log(x);
console.log(getName);
