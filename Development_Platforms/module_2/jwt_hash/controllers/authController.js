import jwt from "jsonwebtoken";
import "dotenv/config";

import { findMany } from "../EQL.js";

export function handleJWT(authorization) {
  const token = authorization?.split(" ")[1];
  if (!token) {
    throw new Error("Token required");
  }
  try {
    const payload = jwt.verify(token, process.env.SECRET);
    return payload;
  } catch (e) {
    if (e.expiredAt) {
      throw new Error("Token expired");
    }
    throw new Error("Invalid token");
  }
}

function checkPassword(username, password) {
  for (const user of findMany("USERS")) {
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