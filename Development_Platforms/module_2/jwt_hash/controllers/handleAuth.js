import jwt from "jsonwebtoken";
import "dotenv/config";
import crypto from "crypto";

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

export function checkPassword(username, password) {
  const hashedPassword = hashPassword(password);
  for (const user of findMany("USERS")) {
    if (user.username === username && user.password === hashedPassword) {
      return user.id;
    }
  }
  throw new Error("Invalid username or password");
}

export function hashPassword(password) {
  const hash = crypto.createHash("sha256").update(password).digest("base64");
  return hash;
}