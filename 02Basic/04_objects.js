// const tinderUser = new Object() //singeltone object
const tinderUser = {}  // non singelton object


tinderUser.id = "1234Abc",
    tinderUser.name = "sam",
    tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularuser = {
    eamil: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstName: "hitesh",
            lastName: "choudry"
        }
    }

}
// console.log(regularuser.fullname.userfullname.firstName);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = { ...obj1, ...obj2 }

// console.log(obj3)



const users = [{
    id: 1,
    email: "h@gmail.com",
}]


// users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLOggedIn'))