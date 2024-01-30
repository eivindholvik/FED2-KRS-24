import { connectDatabase, closeDatabase } from "../db.js";

export const getUser = async (req, res) => {
  try {
    const database = await connectDatabase();
    const users = database.collection("users");
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Missing name" });
    }
    const query = { name: name };
    const options = {};
    const user = await users.findOne(query, options);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.send(user);
  } catch (e) {
    res.json(e);
  } finally {
    await closeDatabase();
  }
};