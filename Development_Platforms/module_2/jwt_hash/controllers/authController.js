import jwt from "jsonwebtoken";
import "dotenv/config";

import { findMany, insertOne } from "../EQL.js";

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
      return user.id;
    }
  }
  throw new Error("Invalid username or password");
}

export const register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password required");
  }
  const id = insertOne("USERS", { username, password, posts: [] });
  return res.status(201).json({ message: "User registered", id: id });
}

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password required");
  }
  try {
    const id = checkPassword(username, password);
    const token = jwt.sign({ username, id }, process.env.SECRET, { expiresIn: "1d" });
    return res.send({ token });

  } catch (e) {
    return res.status(handleCodes(e)).json({ error: e.message });
  }
};