//

const myarr = [0, 1, 2, 3, 4, 5];
const myheros = ["thor", "avengers", "loki"]

const myarr2 = new Array(1, 2, 3, 4,)
// console.log(myarr[1]);
// console.log(myarr.length)


myarr.push(6);
myarr.push(7);
myarr.pop()

myarr.unshift(9)
myarr.shift(9)

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(3))

// const newaray=myarr.join()
// console.log(myarr)
// console.log(newaray)
// console.log(typeof newaray)


// slice and splice

console.log("a", myarr)

const myn1 = myarr.slice(1, 3);

console.log(myn1);
console.log("B", myarr);





const myn2 = myarr.splice(1, 3);

console.log("C", myarr);
console.log(myn2);

