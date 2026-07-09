import express from "express";
import { handleGetAllUsers, handleGetUserById, handleCreateUserById, handleUpdateUserById, handleReplaceUserById, handleDeleteUserById } from "../controllers/user.js"

const router = express.Router();

// Routes
router
    .route("/")
    .get(handleGetAllUsers)
    .post(handleCreateUserById)

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .put(handleReplaceUserById)
    .delete(handleDeleteUserById)

export { router }
