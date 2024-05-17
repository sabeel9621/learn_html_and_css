

// let myarray = [

//     {

//         id: 1,
//         name: "rohit",
//         age: 20,
//         email: "laik5246@gmail.com",
//         city: "jaipur",
//         fname: "aman"
//     },
//     {
//         id: 2,
//         age: 52,
//         email: "laxman5879@gmail.com",
//         city: "udaipur",
//         name: "laxman",
//     },
//     {
//         id: 3,
//         age: 22,
//         email: "ebrahim5879@gmail.com",
//         city: "rajasthan",
//         name: "ebrahim",
//     },
//     {
//         id: 4,
//         age: 32,
//         email: "anil5879@gmail.com",
//         city: "lucknow",
//         name: "anil",
//     },
//     {
//         id: 5,
//         age: 20,
//         email: "lax5879@gmail.com",
//         city: "jaipur",
//         name: "aman",
//     },

//     ]

// console.log(myarray [4]);
// console.log(myarray[0].name);
// for (let i of myarray) {
//     console.log(i.id,i.age,i.name,i.city,i.email);
// }


// let b ={
// id: 5,
//     age: 20,
//         email: "lax5879@gmail.com",
//             city: "jaipur",
//                 name: "aman",
// }

// for (let i in b) {
//     console.log(b[i])
// }


// myarray.map((item,index) => {
//     console.log(item, index);
// })

// myarray.filter((item,index) => {
// console.log(item,index)
// })
// myarray.forEach((item) => {
//     console.log(item.id,item.age,item.city,item.name,item.email);
// })


// console.log(a.name,a.email,a.age,a.id,a.city)
// console.log(a["id"])
// console.log(a["name"])
// console.log(a.name, a.fname)

// class second*************



// let myarray = [

//     {

//         id: 1,
//         name: "rohit",
//         age: 20,
//         email: "laik5246@gmail.com",
//         city: "jaipur",
//         fname: "aman",
//         marks:{
//             p: 85,
//             m: 75,
//             c:92,

//         }
//     },
//     {
//         id: 2,
//         age: 52,
//         email: "laxman5879@gmail.com",
//         city: "udaipur",
//         name: "laxman",
//         marks:{
//         p: 55,
//         m: 45,
//         c: 32,
//         }
//     },
//     {
//         id: 3,
//         age: 22,
//         email: "ebrahim5879@gmail.com",
//         city: "rajasthan",
//         name: "ebrahim",
//         marks: {
//             p: 55,
//             m: 65,
//             c: 52,
//         }
//     },
//     {
//         id: 4,
//         age: 32,
//         email: "anil5879@gmail.com",
//         city: "lucknow",
//         name: "anil",
//         marks: {
//             p: 75,
//             m: 65,
//             c: 32,
//         }
//     },
//     {
//         id: 5,
//         age: 20,
//         email: "lax5879@gmail.com",
//         city: "jaipur",
//         name: "aman",
//         marks: {
//             p:85,
//             m: 95,
//             c: 82,
//         }
//     },
// ]
// myarray.filter((item) =>{

//     return((item.marks.p + item.marks.c + item.marks.m)/3)>75

//     })
// let data = myarray.filter((item) => {
// return ((item.marks.p + item.marks.c + item.marks.m) / 3) > 75

// })
// console.log(data);


// let younguser = myarray.filter((user) => {

//     return((user.age>50))
// })
// console.log(younguser);


// let users = [aman, ebrahim, laxman, anil, aman];
// let names = myarray.map((user => user.name))
// console.log(names);


// assignment of objects===================
// ================================


const complexData = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            country: "USA",
        },
        orders: [
            { orderId: "A123", amount: 50.75, status: "completed" },
            { orderId: "B456", amount: 30.25, status: "pending" },
        ],
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        address: {
            street: "456 Oak St",
            city: "Othercity",
            country: "USA",
        },
        orders: [
            { orderId: "C789", amount: 100.5, status: "completed" },
            { orderId: "D012", amount: 75.2, status: "completed" },
        ],
    },
]



// const b = complexData.filter((item) => {
//     return item.age <= 25;
// })

// console.log(b);
// const b = complexData.map((item) => {
//     return item.name
// })

// console.log(b)

// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.amount>50
//     })
// })
// console.log(b);


// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.orderId
//     })
// })
// console.log(b);


// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {

//         return item.status === "pending";
//     })

// })
// console.log(b);


// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.amount >= 30 && item.amount <= 70;
//     })
// })
// console.log(b);

// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.orderId
//     })
// })

// console.log(b);





//(1) Filter users who are aged 25 or younger.

// const b = complexData.filter((item) => {
//     return item.age <= 25;
// })
// console.log(b);

// (2) Map the array to get an array of user names.

// const b = complexData.map((item) => {
//     return item.name;
// })
// console, log(b);

// (3)Filter orders with an amount greater than 50.

// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.amount>50
//     })
// })
// console.log(b);

// (4)Map the array to get an array of order IDs.
// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//          return item.orderId
//      })
// })
// console.log(b);

// (5)Filter users who have at least one order with a status of 'pending'.

// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.status==="pending"
//     })
// })

// (6)Filter orders with an amount between 30 and 70.

// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.amount >= 30 && item.amount <= 70;
//     })
// })
// console.log(b)