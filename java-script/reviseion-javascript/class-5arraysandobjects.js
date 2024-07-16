// object litrels====================================
//==================================================
// In JavaScript, both the rest and spread operators use the same syntax(...).However, they are used in different contexts and serve different purposes.Rest Operator
// The rest operator allows you to represent an indefinite number of arguments as an array.It is used in function parameter definitions and destructuring assignments to collect remaining elements.Usage in Function Parameters
// The rest operator can be used to gather all remaining arguments of a function into an array.

// function sum (...numbers) {
//     return numbers.reduce((total, number) => total + number, 0);
// }
// console.log(sum(1, 2, 3, 4,5,6,7,8,9)); // Output: 10

// Usage in Destructuring

// The rest operator can also be used to collect the remaining elements of an array or properties of an object into a new array or object.




//     const[first, second, ...rest] =[1, 2, 3, 4, 5];
// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4, 5]



// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// console.log(a); // Output: 1
// console.log(b); // Output: 2
// console.log(rest); // Output: {c: 3, d: 4}

// Spread Operator
// The spread operator allows you to expand elements of an array or object into individual elements.It is used to spread elements in function calls, array literals, or object literals.

// Usage in Function Calls
// The spread operator can be used to pass elements of an array as arguments to a function.

// const numbers = [1, 2, 3, 4];
// console.log(Math.max(...numbers)); // Output: 4

// Usage in Array Literals
// The spread operator can be used to create a new array by spreading elements of an existing array.

// 1) const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2); // Output: [1, 2, 3, 4, 5]


// 2) function multiply (a, b, c) {
//     return a * b * c;
// }

// const numbers = [2, 3, 4];
// const result = multiply(...numbers);
// console.log(result); // Output: 24
// Usage in Object Literals
// The spread operator can be used to create a new object by spreading properties of an existing object.

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 };
// console.log(obj2); // Output: {a: 1, b: 2, c: 3}

// Key Differences
// The rest operator is used in function parameters and destructuring assignments.
// The spread operator is used in function calls, array literals, and object literals.
// The rest operator collects multiple elements into an array.
// The spread operator expands an array or object into individual elements.


// =================================================
// ======================================================================================================

//rest operator
//rest operator is used to collect all the remaining arguments into an array

// function sum (...nums) {
//     let sum = 0;
//     nums.forEach((num) => {
//         sum += num;
//     });
//     return sum;
// }
// console.log(sum(30, 20, 50, 70, 70, 80, 50, 10, 20, 30, 40, 50, 30, 40));

// spread operator
// spread operator is used to spread the elements of an array into individual elements.

// const obj = {
//   name: "sachin",
//   age: 20,
//   address: "pune",
// };

// const obj = {
//     name: "sachin",
//     age: 20,
//     city: "pune",
//     skills: ["Java", "Python", "Css"],
//     address: {
//         street: "street 1",
//         location: "pune",
//         pincode: 789645,
//     },
// };

// function function4 (a) {
//     let userinfo = ["prajjal", "prajjal@gmail.com", 20];

//     // a=[...userinfo,a];
//     a = [...userinfo, ...a];
//     // merge two arrays
//     console.log(a);
// }

// function function3 ({ street, location, pincode }) {
//     console.log(
//         `hi my streetname is: ${street}, my location is: ${location}, and pincode is: ${pincode}`
//     );
//     const a = [];
//     a.push(street, pincode, location);
//     console.log(a);
//     function4(a);
// }
// function function2 (skills) {
//     skills.forEach((skill) => {
//         console.log(skill);
//     });
// }

// function htmlbody ({ name, age, location, address, skills }) {
//     console.log(`Hi name is ${name} and I am from ${location}. My age is ${age}`);
//     console.log(`My skills are ${skills}`);
//     function2(skills);
//     function3(address);
// }
// htmlbody(obj);
// express mai req.body infomation nikalna, react props