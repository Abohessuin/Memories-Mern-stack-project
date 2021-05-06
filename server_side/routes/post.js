import express from "express";

//
import { getPostsController } from "../controllers/post.js";
const router = express.Router();

router.get("/", getPostsController);

export default router;
