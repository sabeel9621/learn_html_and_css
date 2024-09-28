let score = null

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33"=>33
//"33abc"=>NAN
// true=>1; false =>0

let isloggedin = ''
let booleanIsloggedin = Boolean(isloggedin)
console.log(booleanIsloggedin);

// 1=> true ;0=> false
//""=> false agr impty string hi tb bhe value false ayse
// "sabeel"  jab hmny isme koi value add kr de to true ayga



let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

//*******************Oprations********************/

let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

// for example
//this is basic to joined 2 strings
let str1 = "Hello";
let str2 = " sabeel";
let str3 = str1 + str2

console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);//if first number is string so all numbers will change in to a string
console.log(1 + 2 + "2") //agr last number string hi to phly jo conversion hi bo ho jyga
console.log((3+2)* 5 % 3);
console.log(3+2* 5 % 3);

console.log(+true)
console.log(+"")

let num1, num2, num3//its not preferd good practice
num1 = num2 = num3 = 2 + 2



let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


let getcount = 100
++getcount; //If used prefix, with operator before operand(for example, ++x), the increment operator increments and returns the value after incrementing.
getcount++ //If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
console.log(getcount);