// let a = [10, 20, 1.5, 527.58, 50 ,"hello", true,false,24,52,5,2,898,46];
// console.log(a[0]);
// console.log(a[5]);
// console.log(a.length);
// for (let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// let a = [10, 20, 30, 540, "hello", true, false, 1.25, 5.24, 56,522,57,457,78,];
// console.log(a.length);
// for (let i = 1; i <a.length; i++){
//     console.log(a[i]);
// }

// let a = [10, 20, 30, , 40, 50, 60, 70];
// let mul = 1;
// for (let i of a) {
//     mul *= i;

// }
// console.log(mul);
// for (let i = 0; i < a.length; i++){

// }

// console.log(mul);

// for (let i of [10, 20, 30, , 40, 50, 60, 70]) {
//     console.log(i);
// }




// let a = 10;
// let b = 30;
// if (a > b) {
//     console.log(a);

// } else {
//     console.log(b);
// }


// max number

// let a = [10, 20, 30, 40, 50, 60, 70];
// let max = 0;
// for (let i = 0; i < a.length; i++){
//     if (max <a[i]) {
//         max =a[i]
//     }
// }
// console.log(max);
// let a = [10, 20, 30, 400, 50, 100, 120];
// let max = 0;
// let s_max = 0;
// let t_max = 0;
// for (let i = 0; i < a.length; i++){
//     if (max <a[i]) {
//         max =a[i]
//     }

// }
// console.log(max);

// for (let i = 1; i < a.length; i++){
//     if (s_max < a[i] && max > a[i]) {
//         s_max=a[i]
//     }
// }
// console.log(s_max);

// for (let i = 1; i < a.length; i++){
//     if (t_max < a[i] && max > a[i]) {
//         t_max=a[i]
//     }
// }
// console.log(t_max);

// let a = [10, 20, 50, 40];
// let max = 0;
// let s_max = 0;
// for (let i = 1; i < a.length; i++){
//     if (max < a[i]) {
//         max = a[i];

//     }
// }
// console.log(max);
// for (let i = 1; i < a.length; i++){
//     if (s_max < a[i]) {
//         s_max = a[i];
//     }
// }
// console.log(s_max);




// how to  change the value

// let a = [10, 50, 20, 30];
// a[2] = 40;
// console.log(a);


// how to check type of a veriable
// let n = [1, 7, 6];
// console.log(typeof [n]);

// how to convert array to astring

// let a=[10, 20, 30, 40];
// console.log(a.toString);

// join all the array elements using seprator
// let a = [4, 5, 6,10,40,50];
// console.log(a.join("+"));

// how to remove last element from the Array

// let a = [20, 50, 40, "hello", true, false, 41, 50];
// console.log(a.pop());

// add a new element at the end of the array  pop push shift unshift

// let a = [10, 50, 70, 80];
// a.push(8);
// a.push("aman");
// a.pop();
// a.unshift("ajay")
// a.shift();

// console.log(a);


// let a = [100, 200, 300, 400, 500, 600];
// let last = a.pop();
// let first = a.shift();
// a.push(first);
// a.unshift(last)
// console.log(a);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.push("Kiwi");
// console.log(fruits);


// how to shift a array elements

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.shift();
// console.log(fruits.shift("Mango"));

// unshift the array Element

// let a = [10, 20, 30, 40];
// console.log(a.unshift("lemon"));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi";
// console.log(fruits);

// array element can be deleted using delet oprator

// let d = [10, 20, 30, 40, 50];
// console.log(delete d [2]);


// how to concat
// let a = [1, 2, 3];
// let b = [4, 5, 6, 7, 8];
// let c = [9, 10, 11, 12,];
// let d = a.concat(b, c);
// console.log(a.concat(b, c));


// copywithin mathod

//  let fruits = [10,20,30,40,50,60];
// console.log(fruits.copyWithin(2,0,2));

// flat mathod

// let f = [[1, 2],[3, 4],[5, 6]];
// let newf = f.flat();
// console.log(f.flat());


// splice mathod

// let number = [10, 20, 30, 40];
// number.splice(2, 1, 23, 45);
// console.log(number);


// to spliced

// let number = [1, 2, 3, 4];
// console.log(number.splice(2));
// console.log(number.splice(1, 3));



// function x () {

//     var i = 1;
//     setTimeout(function() {
//         console.log(i);
//     }, 3000);
// }
// x();

//  slice
// let x = [100, 200, 300, 400, 500, 600, 700, 800,900]

// console.log(x.slice(-7,-2));

// let x = [100, 200, 300, 400, 500, 600, 700, 800, 900]

// x.splice(3, 5, "aman", "annu")
// // x.splice(-4, 3, "aman", "anil")

// // let a = x.splice(1, 7);
// // x.splice(1,6)
// console.log(x);
// // console.log(a);

// let x = [100, 200, 300, 400, 500, 600, 700, 800, 900]

// let y = x.map((item) => {
//     return item * 2;
// })
// console.log("original array:", x);
// console.log("new array:", y);
// let b = b.filter((item) => {
//     return item * 2
// });
// console.log(b);


// let a = [10, 20, 30, 40, 50];
// let b = a.map((item) => {
//     return item*2
// })
// console.log(b)
// let b = a.filter((item) => {
// return item > 40;
// })
// console.log(b);






// / let a=[100,200,300,400,500,600,700];
// last =a.pop();
// first=a.shift();
// a.unshift(last);
// a.push(first);
// a.push(800);
// a.push(900);
// a.push("sabeel");
// a.push("khan")
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// a.unshift(900)
// a.unshift("sabeel khan");
// a.unshift("500")
// a.shift()
// a.shift()
// a.shift()
// console.log(a);
