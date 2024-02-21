import { findMany, insertOne, findOne, updateArray, deleteOne } from "../EQL.js";
import { handleJWT } from "./authController.js";
import { handleCodes } from "./errorHelper.js";

export const getAllData = async (req, res) => {
  try {
    handleJWT(req.headers.authorization);
    return res.json(findMany("DATA"));
  } catch (e) {
    return res.status(handleCodes(e)).json({ error: e.message });
  }
}

export const createData = async (req, res) => {
  try {
    const { id: owner } = handleJWT(req.headers.authorization);
    const id = insertOne("DATA", { content: req.body.content, owner });
    updateArray("USERS", ((user) => user.id === owner), id, "posts");
    return res.status(201).json({ id });
  } catch (e) {
    return res.status(handleCodes(e)).json({ error: e.message });
  }
}

export const deleteData = async (req, res) => {
  try {
    const { id: owner } = handleJWT(req.headers.authorization);
    const { id } = req.params;
    const deleted = deleteOne("DATA", ((data) => data.id === Number(id)), owner);
    updateArray("USERS", ((user) => user.id === owner), Number(id), "posts");
    return res.json({ message: "Data deleted", deleted });
  } catch (e) {
    return res.status(handleCodes(e)).json({ error: e.message });
  }
}

export const getData = async (req, res) => {
  try {
    handleJWT(req.headers.authorization);
    const { id } = req.params;
    const data = findOne("DATA", ((data) => data.id === Number(id)));
    return res.json(data);
  } catch (e) {
    return res.status(handleCodes(e)).json({ error: e.message });
  }
}