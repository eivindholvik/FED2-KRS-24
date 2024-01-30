import { connectDatabase, closeDatabase } from "../db.js";

export const createPost = async (req, res) => {
  try {
    const database = await connectDatabase();
    const { title, content, owner } = req.body;
    if (!title || !content || !owner) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const session = database.client.startSession();
    session.startTransaction();
    try {
      const postResult = await database.collection("posts").insertOne({ title, content, owner }, { session });
      await database.collection("users").updateOne({ name: owner }, { $push: { posts: postResult.insertedId } }, { session });
      await session.commitTransaction();
      session.endSession();
      res.status(201).json(postResult.insertedId);
    } catch (e) {
      await session.abortTransaction();
      session.endSession();
      throw e;
    }
  }
  catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await closeDatabase();
  }
};