import { findMany } from "../EQL.js";
import { handleJWT } from "./authController.js";

export const getData = async (req, res) => {
  try {
    handleJWT(req.headers.authorization);
    return res.json(findMany("DATA"));
  } catch (e) {
    return res.status(401).json({ error: e.message });
  }
}