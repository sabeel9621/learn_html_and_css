const marvel_heroes = ["thor", "spiderman", "ironman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][2]);

//  const allheroes=marvel_heroes.concat(dc_heroes)
// console.log(allheroes) //combines two or more arrays. This method returns a new array without modifying any existing arrays.


const allheroes = [...marvel_heroes, ...dc_heroes]
// console.log(allheroes);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realanotherarray = another_array.flat(2)
console.log(realanotherarray)


console.log(Array.isArray("sabeel"));
console.log(Array.from("sabeel"));//this mathod conver a [string,objrct] in a array

console.log(Array.from({ name: "sabeel", email: "sabeel@gmail.com", }));



let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score1, score2, score3))