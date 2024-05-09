// Write a Java Script Program to print all natural numbers from 1 to n. – using while loop

// function printallnaturalNumber(n){
//     for (let i = 1 i<=n; i++){
//         console.log(i)
//     }
// }
// printallnaturalNumber(100)


// Write a Java Script Program to print all natural numbers in reverse(from n to 1). – using while loop

// function reverseallnaturalNumber (n) {
//     for (let i = n; i >= 1; i--){
//         console.log(i);
//     }
// }
// reverseallnaturalNumber(100);

// Write a Java Script Program to print all alphabets from a to z. – using while loop


// function printAlphabets () {
//     for (let i = 97; i <= 122; i++) {
//         let alphabet = String.fromCharCode(i);
//         console.log(alphabet);
//     }
// }

// printAlphabets();


// Write a Java Script Program to print all even numbers between 1 to 100. – using while loop


// function printallevenNumber (n) {
//     for (let i = 2; i <= n; i += 2);
//     console.log(i);
// }
// printallevenlNumber(50);

// Write a Java Script Program to print all odd number between 1 to 100

// function printalloddlNumber (n) {
//     for (let i = 1; i <= n; i += 2){
//         console.log(i);
//     }
// }
// printalloddlNumber(100);


// Write a Java Script Program to find sum of all natural numbers between 1 to n.

// function sumofallNaturalnumber (n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++){
//         sum += i;
//         console.log(sum);
//     }
// }
// sumofallNaturalnumber(100);


// Write a Java Script Program to find sum of all even numbers between 1 to n.

// function sumofallevennumber (n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++){
//         if (i % 2 == 0) {
//             sum = sum + i;
//             console.log(sum);
//         }

//     }
// }
// sumofallevennumber(100);


// Write a Java Script Program to find sum of all odd numbers between 1 to n./


// function sumofalloddnumber (n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++){
//         if (i % 2 != 0) {
//             sum = sum + i;
//             console.log(sum);
//         }
//     }
// }
// sumofalloddnumber(100);

// Write a Java Script Program to print multiplication table of any number.
// function multiplication (number) {
//     for (let i = 1; i <= 10; i++){
//         console.log(`${number}x ${i}= ${number * i}`);
//     }
// } multiplication(5);

// Write a Java Script Program to count number of digits in a number.


// function countdigitof (number) {
//     return number.toString().length;
// }
// console.log( countdigitof(123));

// Write a Java Script Program to find first and last digit of a number.


// function findFirstAndLastDigit (number) {
//     let lastDigit = number % 10;

//     while (number >= 10) {
//         number = Math.floor(number / 10);
//     }

//     let firstDigit = number;

//     return [firstDigit, lastDigit];
// }

// let number = 987654321;
// let [firstDigit, lastDigit] = findFirstAndLastDigit(number);

// console.log("First digit:", firstDigit);
// console.log("Last digit:", lastDigit);



// Write a Java Script Program to find sum of first and last digit of a number.

// function sumFirstAndLastDigit (number) {
//     let lastDigit = number % 10;

//     while (number >= 10) {
//         number = Math.floor(number / 10);
//     }

//     let firstDigit = number;

//     return firstDigit + lastDigit;
// }

// let number = 987654321;
// let sum = sumFirstAndLastDigit(number);

// console.log("Sum of first and last digit:", sum);


// Write a Java Script Program to swap first and last digits of a number.


// function swapFirstAndLastDigit (number) {
//     let numString = number.toString();
//     let firstDigit = numString[0];
//     let lastDigit = numString[numString.length - 1];
//     let middleDigits = numString.substring(1, numString.length - 1);

//     if (numString.length === 1) {
//         return number;
//     }

//     return parseInt(lastDigit + middleDigits + firstDigit);
// }

// let number = 123456789;
// let swappedNumber = swapFirstAndLastDigit(number);

// console.log("Original number:", number);
// console.log("Swapped number:", swappedNumber);


// Write a Java Script Program to calculate sum of digits of a number.

// function sumofDigits (number) {
//     let count = 0;
//     let sum = 0;
//     while (number != 0) {
//         sum = sum + number % 10;
//         number=parseInt(number/10)
//     }
//     console.log(sum);

// } sumofDigits(1234);


// Write a Java Script Program to calculate product of digits of a number.

// function product (n) {
//     let product = 1;
//     letrem;
//     while (n != 0) {
//         rem = n % 10;
//         product = product * rem;
//         n=parseInt(n/10)
//     }
//     console.log(product);
// }
// product(4578);


// Write a Java Script Program to enter a number and print its reverse.

// function reverse (n) {
//     let rem = 0;
//     let rev = 0;
//     whilel(n != 0){
//         rem = n % 10;
//         rev = rev * 10 + rem;
//         n = parseInt(n / 10);
//         console.log(rev);
//     }
// }
// reverse(4567);



// Write a Java Script Program to check whether a number is palindrome or not.


// function palindrome (n) {
//     let rem = 0;
//     let rev = 0;
//     let pallendrome = n;
//     while (n != 0) {
//         rem = n % 10;
//         rev = rev * 10 + rem;
//         n = parseInt(n / 10);
//     }
//     if (pallendrome == rev) {
//         console.log("pallindrome");
//     }
//     else {
//         console.log("not apallindrome")
//     }
// } palindrome(12321);