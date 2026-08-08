import express from "express";
import { getAllNotes,createNote,updateNote,deleteNote,getNoteById } from "../controllers/noteController.js";

const router = express.Router();


router.get("/", getAllNotes);
// for user to find the specific notes
router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;



// What is endpoint?
// An endpoint is a combination of a URL and a HTTP method (GET, POST, PUT, DELETE, etc.) that defines a specific resource or action on a server.
// It is the point of interaction between a client and a server in a web application.