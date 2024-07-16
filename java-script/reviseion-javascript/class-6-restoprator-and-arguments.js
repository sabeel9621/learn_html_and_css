// Rest operator and multiple arguments:

//1 Passing and Printing Multiple Objects:
// You have several objects and need to pass them to a function. Inside the function, use the rest operator to handle the objects and print each one.Write the function and explain the process.

// const printobject = (...object) => {
//     object.forEach((object) => {
//         console.log(object);
//     })
// }

// const obj1 = { name: "Alice" };
// const obj2 = { name: "kartika" };
// const obj3 = { name: "piru" };

// printobject(obj1, obj2, obj3);

//2 Summing Any Number of Arguments:
// Write a function that can take any number of arguments and return their sum.Explain how the rest operator allows you to handle an indefinite number of arguments and how you can iterate over them to calculate the sum.

// const summation = (...nums) => {
//     let sum = 0;
//     nums.forEach((num) => {
//         sum += num;
//     });
//     return sum;
// };

// console.log(summation(1, 2, 3, 4, 5));

//3  Write a function that can take any number of arguments and return their factorial. Explain how the rest operator allows you to handle an indefinite number of arguments and how you can iterate(using reduce) over them to calculate the sum.

//const factorial = (...nums) => {
 // return nums.reduce((fact, num) => fact * num, 1);
//};

//console.log(factorial(1, 2, 3, 4, 5));

//4. Write a function that can take any number of arguments and return their max. Explain how the rest operator allows you to handle an indefinite number of arguments and how you can iterate(using reduce) over them to calculate the sum.

//reduse array ke continous data par kaam karti hai
//rest oprator apne mai array hai

// const maximum = (...nums) => {
//     return nums.reduse((maxi, num) => (maxi > num ? maxi : num), 0);
// };
// console.log(maximum(10, 20, 50, 70));


// const maximum = (...nums) => {
//   return nums.reduce((maxi, num) => (maxi > num ? maxi : num), -1000);
// };

// console.log(maximum(-5, -4, -3, -2));


// const minimum = (...nums) => {
//     return nums.reduce((min, num) => (min < num ? min : num), 0);
// };
// console.log(minimum(10, 20, 40, 1, 2));


// for loop: index based hai and foreach wo value based loop hai
// const arr= [12,14,15,16]
// arr[0]=12
// arr[1]=14
// arr[2]=15
// arr[3]=16

// for(let i=0;i<arr.length();i++)
// {
//     console.log(arr[i]);
// }

// arr.foreach((item)=>{
// console.log(item)
// })

// map,reduce,filter,find,slice,splice ==>foreach value loop hai
// inmai se koi bhi indexed based loop nahi hai

// line se values mil rahi hai to kya mai values ko skip kar sakta hoon

//5. Write a function that can take any number of arguments and return their even sum only. Explain how the rest operator allows you to handle an indefinite number of arguments and how you can iterate(using reduce) over them to calculate the sum.

// reduce array ke continous data par kaam karti hai
// rest operator apne app mai array

// const summation = (...nums) => {
//     return nums.reduce((sume, num) => {
//         if (num % 2 == 0) {
//             return sume + num;
//         } else {
//             return sume;
//         }
//     }, 0);
// };

// console.log(summation(2, 3, 4, 5, 6));

// 6.frequency count using reduce function
// const frequencycount = (...nums) => {
//     return nums.reduce((count, num) => {
//         if (num == 3) return count + 1;
//         else return count;
//     }, 0);
// };

// console.log(frequencycount(1, 2, 3, 3, 3, 3, 3, 4, 5, 6));

// Concatenating Multiple Arrays:
// Create a function that accepts multiple arrays as arguments and returns a single array that concatenates all of them.Explain how the rest operator helps in gathering all the arrays and how you can use the spread operator to concatenate them.




// Combining Object Properties:
// Write a function that accepts multiple objects and combines their properties into a single object.Explain the use of the rest operator to gather the objects and how to merge their properties.

// Collecting Arguments Except the First:
// Implement a function that takes any number of arguments and returns an array containing all arguments except the first one.Explain how the rest operator can be used in combination with array destructuring to achieve this.

// Finding the Maximum Number:
// Create a function that takes any number of numeric arguments and returns the maximum number.Explain how the rest operator collects all arguments into an array and how to use the Math.max function to find the largest number.

// Combining Strings:
// Write a function that accepts multiple strings and returns a single string that concatenates them.Explain how the rest operator can handle multiple strings and how to concatenate them using the join method.

//     Executing Multiple Callback Functions:
//         Implement a function that accepts multiple callback functions and executes them in sequence.Explain how the rest operator gathers the callback functions and how to iterate over them to execute each one.

// Counting Argument Types:
// Write a function that takes any number of arguments and returns an object with counts of each argument type(e.g., number, string).Explain how the rest operator collects the arguments and how to iterate and count each type.

// Filtering Numeric Arguments:
// Create a function that takes any number of arguments and returns an array of only the numeric arguments.Explain how the rest operator gathers the arguments and how to filter them using the typeof operator.

// Handling Varying Parameters:
// Write a function that can handle a varying number of parameters and prints them in a formatted string.Explain how the rest operator enables handling of varying arguments and how to format them for output.

// Merging Multiple Objects:
// Implement a function that merges multiple objects into one.Explain how the rest operator gathers all objects and how to use Object.assign or the spread operator to merge their properties.

// Concatenating and Flattening Arrays:
// Write a function that takes multiple arrays as arguments and returns a single flattened array.Explain how the rest operator collects the arrays and how to use Array.prototype.flat to flatten the result.

// Returning Earliest Date:
// Create a function that takes multiple date objects and returns the earliest date.Explain how the rest operator gathers the date objects and how to use Math.min with Date.getTime to find the earliest date.

// Logging Arguments Except First:
// Write a function that logs all arguments passed to it except the first one.Explain how the rest operator can be used to collect all but the first argument and how to log them.

// Unique Elements from Multiple Arrays:
// Implement a function that takes multiple arrays and returns an array of their unique elements.Explain how the rest operator collects the arrays and how to use a Set to filter unique elements.

// Summing Rest Arguments in Arrow Function:
// Write an arrow function that takes multiple arguments and returns their sum.Explain how the rest operator is used in arrow functions to collect arguments and how to sum them.

// Combining Multiple Rest Parameters:
// Create a function that takes multiple rest parameters and demonstrates how they can be used together.Explain the rules and limitations of using multiple rest parameters.

//     Using Rest with Default Parameters:
// Write a function that uses default parameters along with the rest operator.Explain how default parameters are applied before the rest operator collects the remaining arguments.

// Object Destructuring with Rest:
// Implement a function that accepts an object and destructures it, using the rest operator to gather the remaining properties.Explain how object destructuring works with the rest operator to separate specific properties from the rest.