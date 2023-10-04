// api call - returns a list of people

//apiData = [..., {name: "Eivind Holvik", adress: "4631 Eivind Jarls Gate 8, Kristiansand", gender: "male", hasBE: true}, ...]
// const apiData = [];
// const previousData = []; //already items inside this array

// for (let i = 0; i < apiData.length; i++) {
//   const { name, adress } = apiData[i];
//   // parsing data to
//   const fName = "eivind";
//   const lName = "Holvik";
//   const address = {
//     city: "Kristiansand",

//   }
//   previousData.push(createPerson(fName, lName, address.country, address.city));

//   // previousData.push(
//   //   {
//   //     fistName: fName,
//   //     lastName: lName,
//   //     address: {
//   //       country: address.country,
//   //       city: address.city,
//   //     },
//   //     greet: function () {
//   //       console.log('Hello world!');
//   //     },
//   //   }
//   // )
// }

// function createPerson(firstName, lastName, country, city) {
//   if (firstName && lastName && country && city) {
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       address: {
//         country: country,
//         city: city,
//       },
//       greet: function () {
//         console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
//       },
//     };
//   }
//   throw new Error("You need to pass all parameters to create the persons object")

// }
console.log(window.location.href);
if (localStorage.getItem("jwt")) {
  window.location.href = "./feed.html"
}