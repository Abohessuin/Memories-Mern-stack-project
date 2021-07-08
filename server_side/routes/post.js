import express from "express";

//
import { getPostsController,createPostController } from "../controllers/post.js";
const router = express.Router();

router.get("/getposts", getPostsController);
router.post("/createpost",createPostController);

export default router;
