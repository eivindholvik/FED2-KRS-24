const user = {
  username: "Eivind",
  id: 2,
  password: "admin123",
}

console.log({
  username: "Eivind", id: 2, password: "admin123", admin: "true"
});

console.log({
  ...user, admin: "true"
});