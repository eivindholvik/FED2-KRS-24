import jwt from "jsonwebtoken";
import "dotenv/config";

import { DATABASE_USERS } from "../database.js";

function checkPassword(username, password) {
  for (const user of DATABASE_USERS) {
    if (user.username === username && user.password === password) {
      return true;
    }
  }
  return false;
}


export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password required");
  }
  try {
    if (checkPassword(username, password)) {
      const token = jwt.sign({ username }, process.env.SECRET, { expiresIn: "1d" });
      return res.send({ token });
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (e) {
    return res.status(401).json({ error: e.message });
  }
};