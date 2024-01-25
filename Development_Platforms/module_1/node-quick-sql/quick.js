import express from "express";
import mysql from "mysql";
const app = express();

const dbName = "module1";
const dbUser = "root";
const dbPassword = "";
const dbHost = "localhost";

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

app.get("/", (req, res) => {
  connection.connect();

  connection.query("SELECT * FROM post", (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });

  connection.end();
});
app.listen(3000, () => {
  console.log("listening at port 3000");
});