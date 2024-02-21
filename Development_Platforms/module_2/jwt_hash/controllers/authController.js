import jwt from "jsonwebtoken";
import "dotenv/config";

import { findOne, insertOne } from "../EQL.js";
import { checkPassword, hashPassword } from "./handleAuth.js";
import { handleCodes } from "./errorHelper.js";


export const register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password required");
  }
  try {
    findOne("USERS", ((user) => user.username === username));
  } catch (e) {
    if (e.message === "Not found") {
      const id = insertOne("USERS", { username, password: hashPassword(password), posts: [] });
      return res.status(201).json({ message: "User registered", id, password: hashPassword(password) });
    } else {
      return res.status(handleCodes(500)).json({ error: "Internal Server Error!" });
    }
  }
  return res.status(400).send({ error: "Username already exists" });
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