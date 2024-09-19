// const updatenum = (num) => {
//     console.log(`during call num:${num}`);
//     num = num + 1
//     console.log(`during call num after staging:${num}`);
// };
// let num = 5;
// console.log(` initial num:${num}`);
// updatenum(num)
// console.log(`after call num:${num}`)

// const updatenum = (numobj) => {
//     console.log(`during call num:${numobj.num}`);
//     numobj.num = numobj.num + 1
//     console.log(`during call num after staging:${numobj.num}`);
// };
// let numobj ={num:5};
// console.log(` initial num:${numobj.num}`);
// updatenum(numobj)
// console.log(`after call num:${numobj.num}`)

// const additem = (array,item) => {
//     console.log(` during call ${ myarray } `)
//     array.push(item)
//  }
// const myarray = [1, 2, 3]
// console.log(`initial array ${myarray} `)
// additem(myarray, 4)
// console.log(  ` after call array ${myarray}`)


//functions with callback and closure

// function createCounter() {

//     let count = 0;
//     return function increment () {
//         count = count + 1;
//         console.log(count)
//     }
// }
// const counter = createCounter();
// counter();
// counter();
// counter();
// counter();


//callback

// function create (action)  //formal argument
// {
//     let value = 5;
//     action (value)
// }

// create((val) => {
//     console.log(val+10)
// })


// function modify (modifier)
// {
//     let val = 4;
//     modifier(val)
// }

// function updateparent (val) {
//     console.log(`update the value ${val+10}`)
// }
// modify(updateparent)
// console.log(`initial  value ${val}`);


// lexicale scope (static scope)===================

// function outerfunction () {
//     const outervariable = 'outer variable'
//     console.log(outervariable)
//     function innerfunction () {
//     console.log(outervariable)
//     }
//     innerfunction()
// }
// outerfunction()

// muteble and unmutable====================

// function updatefunction (person) {
//     return { ...person, age: person.age + 1 };
// }
// let person = { name: `alice`, age: 25 };
// person = updatefunction(person);
// console.log(person.age)

// rest oprator

// const a = [1, 2, 3, 4];
// const b = [5, 6, 7, 8];
// const c = [...a, ...b];
// console.log(c)


//to save the previos data================******

// let person = { name: "iron", age: 25 };
// let prev = { ...person };
// person.age = person.age + 1;
// console.log(prev);
// console.log(person)

// function abc (...args) {
//     console.log(args)
//     const c = { ...args };
//     const d = [...args];
//     console.log(c)
//     console.log(d)
// }
// abc(2,3,4,5,5,6,7)


// state history maintain===============


// let person = { name: 'alice', age: 16 }
// let statehistory = [{ ...person }];

// //person modification
// person.age = 26;
// statehistory.push({ ...person })

// //2nd modification
// person.age = 27
// statehistory.push({ ...person });

// console.log(person)
// console.log(statehistory)


class Animal {
    constructor (name) {
        this.name = name;
    }
    speak () {
        console.log(`${this.name} makes sound.`);
    }
}
class Dog extends Animal {
    speak () {
        console.log(`${this.name} braks`);
    }
}

const dog = new Dog("Rover");
dog.speak();