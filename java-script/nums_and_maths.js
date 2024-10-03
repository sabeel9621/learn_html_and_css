const score = 400;
console.log(score);

const balance = new Number(100)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))


const othernumber = 123.8966

console.log(othernumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))

// +++++++++++++++++++++++++++++++++++++maths+++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); // it change negative value in to possitive value


// console.log(Math.round(4.3));//
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,2,3,5,6));
// console.log(Math.max(4, 2, 3, 5, 6));


console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);//math.random ke value hmesha 0se 1 ke bech me ayge

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


