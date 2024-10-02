let Name = "hetesh";
let value = 50;

console.log(`Hello my name is ${Name} and my valaue is ${value}`)

const GameName = new String('sabeel-kh-con')
console.log(GameName.length)
console.log(GameName.at(6))
console.log(GameName[0]);
console.log(GameName.__proto__);
console.log(GameName.charAt(2)); //charector position check krne ke liye
console.log(GameName.toLocaleUpperCase());
console.log(GameName.anchor("Sabeel"))
console.log(GameName.big());
console.log(GameName.blink());
console.log(GameName.bold());
console.log(GameName.charCodeAt(2));
console.log(GameName.codePointAt(0));
console.log(GameName.concat("an"));// joint two string
console.log(GameName.indexOf('k')); //kon sa charector kis position pr hai


const newString = GameName.substring(0, 4)
console.log(newString)


const string = GameName.slice(2, 5)
console.log(string)

const anotherstring = "   sabeel    "

console.log(anotherstring);
console.log(anotherstring.trim());


const url = "https://hitesh.com/hitesh%20choudhry"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'));

console.log(GameName.split('-'));


const str1 = 'cats are the best!';
console.log(str1.endsWith('best!'));



const pets = ['Dog', 'Cat', 'Bat']
console.log(pets.includes("Cat")) //it also include a certain value among its enties or not


console.log(GameName.indexOf('l')) //it indicates kon se indexing pr kon sa word hai


const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

console.log(
    `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);

console.log(searchTerm)


console.log(GameName.toLocaleLowerCase());//returns the value of the string converted to lower case according to any locale-specific case mappings

console.log(GameName.toLocaleUpperCase());//returns the value of the string converted to upper case according to any locale-specific case mappings
console.log(GameName)
console.log(GameName.toString());












                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     