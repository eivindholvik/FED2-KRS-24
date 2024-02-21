import crypto from "crypto";


// const user = {
//   username: "Eivind",
//   id: 2,
//   password: "admin123",
// }

// console.log({
//   username: "Eivind", id: 2, password: "admin123", admin: "true"
// });

// console.log({
//   ...user, admin: "true"
// });



function hashPassword(password) {
  const hash = crypto.createHash("sha256").update(password).digest("base64");
  console.log(hash);
}

hashPassword("pus");
