//

// let i = 0;

// while (i<=100) {
//     console.log("i am exicute")
//     i++
// }

//   table print
// let a = 2;
// let i = 1;

// while (i <= 10) {
//     console.log(a + " x " + i + " = " + (a * i));
//     i++;
// }


// let marks = 95;
// if (marks > 95) {
//     console.log(1500)
// }
// if (marks > 75) {
//     console.log(1000)
// }
// if (marks > 60) {
//     console.log(500)
// }
// if (marks > 50) {
//     console.log(100)
// }


// let a = 50;
// let i = 1;
// while (i <=10) {
//     console.log(a + " x " + i + " = " + (a * i));
//     i++;
// }



// let a = 100;
// while (a >= 1) {
//     console.log(a)
//     a--
// }

// let a = 'a';
// while (a<= 'z') {
//     console.log(a)
//     a++
// }

// let i;

// // Initializing i = 65 for Uppercase:
// i = 65;
// // console.log("Alphabets form (A-Z) are:");

// while (i <= 90) {
//     console.log(String.fromCharCode(i));
//     i++;
// }


// let a = 1;
// while (a <= 100) {
//     console.log(a)
//     a++
// }

// let n = 10;
// while (n >= 1) {
//     console.log(n)
//     n--
// }

// let i;
// i = 65;
// while (i <= 90) {
//     console.log(String.fromCharCode(i));
//     i++;
// }


// let i = 65;
// while (i <= 90) {
//     console.log(String.fromCharCode(i));
//     i++;
// }



// let a = 3;
// while (a <= 100) {

//     if (a % 3 === 0) {
//         console.log(a);
//     }
//     a += 3;
// }


// sum of number from 1 to num

// let num = 20;
// let sum = 0;
// let i = 1
// while (i <= num) {
//     sum += i;
//     i++
//     console.log(sum);
// }



// some of even natural number
// let sum = 0
// for (i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         sum = sum + i
//     }
// }
// console.log(sum)



// sum  of all  odd number

// let sum = 0;
// for (i = 1; i <= 100; i++){
//     if (i % 3 == 0) {
//         sum = sum + i;
//         i++;
//     }
//     console.log(sum);
// }


// multiplication tabel of any number

// let a = 5;
// let i = 1;
// while (i <= 10) {
//     console.log(a + "x" + i + "=" + (a * i));
//     i++;
// }



// Write a Java Script Program to count number of digits in a number.
// const count = (n) => {
//     let a = n;
//     if (n < 0) {
//         a = -(n)
//     }
//     let b = 0;
//     for (let i = 0; a > 1; i++) {
//         a = a / 10;
//         b += 1;

//     }
//     return b;
// };

// console.log(count(318));
// console.log(count(-92563));
// console.log(count(4666));
// console.log(count(-314890));
// console.log(count(654321));
// console.log(count(638476));


// Write a Java Script Program to find first and last digit of a number
// let number = 55;
// let firstDigit = parseInt(number / 10);
// let lastDigit = number % 10;
// console.log("FirstDigit =", firstDigit, "\nLastDigit =", lastDigit);


// Write a Java Script Program to swap first and last digits of a number.
// function swap (arr) {
//     [arr[0], arr[arr.lenght - 1]] = [arr[arr.lenght - 1], arr[0]];
//     return arr;
// }
// console.log(swap([1, 2, 3, 4]));
// console.log(swap([2, 3]));
// console.log(swap([3]));

// Write a Java Script Program to calculate sum of digits of a number.

// function sumOfDigits (num) {
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }

// console.log(sumOfDigits(54278));



// Write a Java Script Program to calculate product of digits of a number
// function getProduct (n) {
//     let product = 1;

//     while (n != 0) {
//         product = product * (n % 10);
//         n = Math.floor(n / 10);
//     }
//     return product;
// }

// Driver code
// let n = 40;

// console.log(getProduct(n));


// Write a Java Script Program to enter a number and print its reverse

// let num = 2613

// let str = num.toString()

// let rev_num = ''

// for (let i = 0; i < str.length; i++) {
//     rev_num = str[i] + rev_num
// }

// console.log(rev_num)

// Write a Java Script Program to check whether a number is palindrome or not.

// let a = 45785, sum = 0, b, z = a
// while (a > 0) {
//     b = a % 10
//     sum = sum * 10 + b
//     a = parseInt(a / 10)
// }
// console.log(sum)
// if (z == sum) {
//     console.log("palindrome number", sum)
// }
// else {
//     console.log("not a palindrome number", sum)
// }

// Write a Java Script Program to find frequency of each digit in a given integer.


// function frequencyDigits (n, d) {
//     var c = 0;
//     while (n > 0) {
//         if (n % 10 == d)
//             c++;
//         n = parseInt(n / 10);
//     }
//     return c;
// }
// var N = 1122322;
// var D = 2;

// console.log(frequencyDigits(N, D));

// Write a Java Script Program to enter a number and print it in words.

// function numToWords (number) {
//     if (typeof number === 'string') {
//         number = parseInt(number, 10);
//     }
//     if (typeof number === 'number' && isFinite(number)) {
//         number = number.toString(10);
//     } else {
//         return 'This is not a valid number';
//     }
//     var digits = number.split('');
//     while (digits.length % 3 !== 0) {
//         digits.unshift('0');
//     }
//     var digitsGroup = [];
//     var numberOfGroups = digits.length / 3;
//     for (var i = 0; i < numberOfGroups; i++) {
//         digitsGroup[i] = digits.splice(0, 3);
//     }


// Write a Java Script Program to print all ASCII character with their values.

// function printASCII () {
//     // Print ASCII characters with their values
//     for (let i = 0; i < 128; i++) {
//         const char = String.fromCharCode(i);
//         const decimal = i;
//         const hex = i.toString(16).toUpperCase();
//         const octal = i.toString(8);

//         console.log(`Character: ${char}, Decimal: ${decimal}, Hexadecimal: ${hex}, Octal: ${octal}`);
//     }
// }

// printASCII();

// let ch = "h"

// let asc = ch.charCodeAt()

// console.log(asc)

// Write a Java Script Program to find power of a number using for loop
// function powOfFunction (num, pow) {
//     let result = 1;

//     if (pow === 0) {
//         return 1
//     }
//     for (var i = 0; i < pow; i++) {
//         result = result * num;
//     }

//     return result
// }
// let res = powOfFunction(2, 0)

// console.log(res)

// Write a Java Script Program to find all factors of a number.