// 1.=> aapko arrow function ke madad se 4 input lena hai aur uska sum calculate karna hai'

// const sum = (a, b, c, d) => {
//     return a + b + c + d;
// };
// console.log(sum(1, 2, 3, 4));



// 2.=>using annoymous arrow function create a function which does factorial of 5

// let fact =(n)=>{
//         let fact=1;
//         for(let i=1;i<=n;i++){
//             fact=fact*i
//         }
//         console.log(fact)
//     }
//     let factorial = fact(5);




// 3.=>use the concept of hoisiting and call a factorial function without declaring it and then define after calling

// const result = factorial(5);
// console.log(result);

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }


// }


// 4.=> use the concept of immediately invoked function to check whether a number is even or odd.

// function evenodd(n){
//     if(n%2 === 0){
//         console.log("even number" )
//     }
//     else{
//         console.log("odd number")
//     }
// }evenodd(15);


// 5.=>using the concept of parameterised function constructor call factorial function

// const factorial = new Function('n', `
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * arguments.callee(n - 1);
//     }
// `);
// const result = factorial(5);
// console.log(result);

// function evenodd () {
//     this.a = a;
//     this.result = () => {
//         if (this.a % 2 == 0) {
//             return "even";
//         } else {
//             return "odd";
//         }
//     }
// }
// evenodd(5);