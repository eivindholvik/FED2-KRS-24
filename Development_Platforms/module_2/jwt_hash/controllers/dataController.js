import jwt from "jsonwebtoken";
import "dotenv/config";
import { DATABASE_DATA } from "../database.js";

export const getData = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token required" });
  }
  try {
    jwt.verify(token, process.env.SECRET);
    return res.json(DATABASE_DATA);
  } catch (e) {
    if (e.expiredAt) {
      return res.status(401).json({ error: "Token expired" });
    }
    return res.status(401).json({ error: "Invalid Token" });
  }
}