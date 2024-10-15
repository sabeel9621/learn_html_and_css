// singelton ==> koi bhe cunstructer se jb bhe bnate hai to singelton ek object banta hai ye eak he trha ka apna he ek object hai

// example==> object.create{} constructor mthod

// jab bhe hm litrels ke trha decleare karte hi to singelton nahi bnta hai


// object literals

// const mySym = Symbol("key1")

// const jsuser = {
//     name: "Hitesh",
//     "full name":"Hitesh Choudhry",
//     [mySym]:"mykey1",
//     age: 18,
//     location: "jaipur",
//     email: "Hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays:["monday","saturday"]
// }


// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym])

// jsuser.email = "sabeel@gmail.com",
// Object.freeze(jsuser)
// jsuser.email = "Adeem@gmail.com"

// console.log(jsuser)


// jsuser.greeting = function () {
//     console.log("hello js user")
// }
// jsuser.greetingtwo = function () {
//     console.log(`hello js user ,${this.name}`)
// }
// console.log(jsuser.greeting())
// console.log(jsuser.greetingtwo())

const mysym = Symbol("key1")

const jsuser = {
    name: "sabeel",
    "full name": "Sabeel khan",
    [mysym]: "mykey1",
    age: 18,
    location: "hardoi",
    email: "sabeel@google.com",
    isLoggedIn: false,
    lastLoginDay: ["monday", "saturday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mysym])

jsuser.email = "Hitesh@gmail.com";
// Object.freeze(jsuser)
jsuser.email = "Hitesh@Chatgpt.com";

console.log(jsuser);


jsuser.greeting = function () {
    console.log("hello js user")
}
jsuser.greetingtwo = function () {
    console.log(`hello js user, ${this.name}`)
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())