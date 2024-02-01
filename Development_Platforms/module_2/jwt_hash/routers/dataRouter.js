import { Router } from "express";
import { getAllData, getData, createData, deleteData } from "../controllers/dataController.js";

const router = Router();

router.get("/", getAllData);
router.post("/", createData);
router.delete("/:id", deleteData);
router.get("/:id", getData);


export default router;