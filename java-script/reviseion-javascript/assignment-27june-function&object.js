// 1. create an object name fruits which should atleast 5 keys such that fruit name, fruit price.... it should have an array as key now
// you have to pass this object in a function which will accept it in destructure format now print all the information and call a function which will going to pass the key array into another function and call one function that will pass the object as key into anothe
// const fruits={
//     name: ["Apple","mango","banana","kiwi"],
//     color: "Red",
//     price: "150",
//     state: "kashmir",
//     origin: "india"
// }

// function function2 (name) {
//     name.forEach((name) => {
//         console.log(name);
//     })
// }

// function fruitinfo ({name,color,price,state,origin}) {
//     console.log(`name is ${name} color is ${color} price is ${price} state is ${state} origin is ${origin}`)
//     // console.log(`name are ${name}`);
//     function2(name);

// }

// fruitinfo(fruits);

//   Create an object named user with at least 5 keys(e.g., userName, userAge, etc.).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.

// const user = {
//     userName: "ibrahim",
//     userAge: 27,
//     userEmail: "ibrahim@gmail.com",
//     userAddress: { street:"123 Main street",location:"rajashthan",pincode:145214},
//     userHobbies: ["Reading", "Hiking", "Coding"]
// };
// function function4 (a) {
//     let userinfo = ["ibrahim", "ibrahim@gmail.com", 27]

//     a = [...userinfo, ...a];  //merge to array

//     console.log(a);
// }

// function function3 ({ street, location, pincode }) {
//     console.log(
//         `hi my streetname is: ${street}, my location is: ${location}, and pincode is: ${pincode}`
//     );


// const a = [];
// a.push(street, pincode, location);
// console.log(a);
// function4(a);


// }

// function function2 (userHobbies) {
//     userHobbies.forEach((userHobbies) => {
//         console.log(userHobbies);
//       })
// }
// function displayUserInfo ({ userName, userAge, userEmail, userAddress, userHobbies }) {
//     console.log(`my name is ${userName} may age is ${userAge} my email is ${userEmail} my address is ${userAddress} my hobbies are ${userHobbies}`);
//     function2(userHobbies);
//     function3(userAddress);

// }
// displayUserInfo(user);

// Product Data

// 3. Create an object named product with at least 5 keys(e.g., productName, productPrice, etc.).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.

// const product = {
//     name: "laptop",
//     price: 35000,
//     category: "Electornics",
//     productstock: "20",
//     Address: {
//         streetname:"street1",location:"jaipur",pincode:241542
//     },
//     productfeatures: ["16GB RAM", "512GB SSD", "Intel i7"]


// }

// function function4 (a) {
//     let pro = ["laptop", "35000", "Electronics"]
//     a = [...pro, a];
//     console.log(a);
// }


// function function3 ({ street, location, pincode }) {
//     console.log(
//         `hi my streetname is: ${street}, my location is: ${location}, and pincode is: ${pincode}`
//     );


// const a = [];
// a.push(street, pincode, location);
// console.log(a);
// function4(a);


// }

// function function2 (productfeatures) {
//     productfeatures.forEach((productfeatures) => {
//         console.log(productfeatures);
//     })
// }

// function productinfo ({ name, price, category, productstock, productfeatures,Address }) {

//     console.log(`name ${name} price ${price} category ${category} productstock ${productstock} productfeatures ${productfeatures}`);
//     function2(productfeatures);
//     function3(Address);

// }
// productinfo(product)



// Order Data

// 4. Create an object named order with at least 5 keys(e.g., orderId, orderDate, etc.).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.

// const order = {
//     orderId: "12345",
//     orderDate: "2020-02-25",
//     customerName: "laxman",
//     orderTotal:1000000,
//     items: ["Laptop", "Mouse", "Keyboard"],
//     orderDetails: {
//         tracorder:"trackorder",orderid:"12345",orderprice:"1000000"
//     },
// };
// function function4 (a) {
//     let ord = ["laxman", "2020-02-25", "1245"];
//     a = [...ord, ...a];
//     console.log(a);
// }

// function function3 ({ trackorder, orderid, orderprice }) {
//     console.log(`trackorder: ${trackorder}, orderid is: ${orderid}, orderprice is: ${orderprice}`);

//     const a = [];
//     a.push(orderid, trackorder, orderprice);
//     console.log(a);
//     function4(a);
// }


// function function2 (items) {
//     items.forEach((items) => {
//         console.log(items);
//     })
// }

// function orderinfo ({ orderId, orderDate, customerName, orderTotal, items,orderDetails }) {

//     console.log(`orderid is ${orderId} orderDate is ${orderDate} customername is ${customerName} item is ${items}`);
//     function2(items);
//     function3(orderDetails);
//     console.log(orderDetails);
// }
// orderinfo(order)


// Employee Data

// 5. Create an object named employee with at least 5 keys(e.g., employeeName, employeeId, etc.).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.


// const employee = {
//     Name: "Aman",
//     Id: "12345",
//     department: "Engineering",
//     salary: 85000,
//     skills: ["JavaScript", "React", "Node.js"],
//     address: {
//         street:"stree1",location:"pune",pincode:"524215"
//     }
// };
// function function4 (a) {
//     let employeedetails = ["Aman", 12345, "Engineering"];
//     a = [...employeedetails, ...a];
//     console.log(a);
// }

// function function3 ({ street, location, pincode }) {
//     console.log(`my street is ${street} my location is ${location} my pincode is ${pincode} `);

//     const a = [];
//     a.push(street, location, pincode);
//     console.log(a);
//     function4(a);

// }
// function function2 (skills) {
//     skills.forEach((skills) => {
//         console.log(skills);
//     });
// }

// function employeeinfo ({ Name, Id, department, salary, skills, address }) {
//     console.log(`my name is ${Name} my id is ${Id} my department is ${department} my salary is ${salary} my skills are ${skills} my address is ${address}`);
//     function2(skills);
//     function3(address);
// }
// employeeinfo(employee);


// Customer Data

// 6. Create an object named customer with at least 5 keys(e.g., customerName, customerAddress, etc.).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.

// const customer = {
//     customerName: "prajjal",
//     customerEmail:"prajjal@gmail.com",
//     customerAddress: { street: "123 Main Street", location: "jaipur", pincode: 302451 },
//     customerId: "12345",
//     contactNumber: "8549575480",
//     purchaseHistory: ["Laptop", "Smartphone", "Tablet"]
// };
// function function4 (a) {
//     let cd = ["prajjal", "prajjal@gmail,com", 12345];

//     a = [...a, cd];
//     console.log(a);
// }

// function function3 ({ street, location, pincode }) {
//     console.log(`my streetname is: ${street} my location is: ${location} my pincode is: ${pincode}`);

//     const a = [];
//     a.push(street, location, pincode);
//     console.log(a);
//     function4(a);

// };
// function function2 (purchaseHistory) {
//     purchaseHistory.forEach((purchaseHistory)=> {
//         console.log(purchaseHistory);
//     });
// };

// function customerinfo ({ customerName, customerAddress, customerId, contactNumber, purchaseHistory }) {
//     console.log(`my name is ${customerName} my address is ${customerAddress} my id is ${customerId} my contact number is ${contactNumber} my purchase history is ${purchaseHistory}`);
//     function2(purchaseHistory);
//     function3(customerAddress);
// }
// customerinfo(customer)


// Inventory Data

// 7. Create an object named inventory with at least 5 keys(e.g., itemId, itemQuantity, etc.).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.

// const inventory = {
//     itemId: "A1001",
//     itemName: "Wireless Mouse",
//     itemQuantity: 150,
//     itemPrice: 150000,
//     suppliers: ["Supplier1", "Supplier2", "Supplier3"],
//     suppliersAddress:{street:"street1",location:"mumbai",pincode:454274}
// };
// function function4 (a) {
//         let evend = ["wireless mouse", 150, 150000];

//         a = [...a, evend];
//         console.log(a);
//     }

// function function3 ({ street, location, pincode }) {
//     console.log(`my streetname is: ${street} my location is: ${location} my pincode is: ${pincode}`);

//     const a = [];
//     a.push(street, location, pincode);
//     console.log(a);
//     function4(a);

// }


// function function2 (suppliers) {
//     suppliers.forEach((suppliers) => {
//         console.log(suppliers);
//     });
// }

// function inventoryinfo ({ itemId, itemName, itemQuantity, itemPrice, suppliers,suppliersAddress }) {
//     console.log(`item id is ${itemId} itemname is ${itemName} itemquantity is ${itemQuantity} item price is ${itemPrice} item suppliers is ${suppliers} suppliers address is ${suppliersAddress}`);
//     function2(suppliers);
//     function3(suppliersAddress);
// }
// inventoryinfo(inventory);

// Vehicle Data

// 8. Create an object named vehicle with at least 5 keys(e.g., vehicleModel, vehiclePrice, etc.).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.

// const vehicle = {
//     vehicleModel: "Tesla Model 3",
//     vehiclePrice: 39999,
//     vehicleYear: 2023,
//     vehicleColor: "Red",
//     features: ["Autopilot", "Electric", "GPS Navigation"],
//     componyAddress:{street:"c-6 123 main street",location:"America",pincode:58575875}

// };

// function function4 (a) {
//     let vd = ["tesla", "Red", 39999];
//     a = [...vd, ...a];
//     console.log(a);
// }
// function function3 ({ street, location, pincode }) {
//     console.log(`streetname is ${street} location is ${location} pincode is ${pincode}`);


//     const a = [];
//     a.push(street, location, pincode);
//     console.log(a);

//     function4(a);
// }



// function function2 (features) {
//     features.forEach((features)=> {
//         console.log(features);
//     });
// }

// function vehicleinfo ({ vehicleModel, vehiclePrice, vehicleYear, vehicleColor, features, componyAddress }) {
//     console.log(`vehiclemodel is ${vehicleModel} vehicleprise is ${vehiclePrice} vehicleyear is ${vehicleYear} vehiclecolor is ${vehicleColor}
//         features is ${features} compony address is ${componyAddress}`);
//     function2(features);
//     function3(componyAddress);
// }
// vehicleinfo(vehicle);
