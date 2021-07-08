import postMessage from "../models/postMessage.js";


export const getPostsController = async (req, res) => {
  console.log("get posts");
  try {
    const postMassages = await postMessage.find();
    res.status(200).json(postMassages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPostController = async (req, res) => {
  console.log("create post");
  const post = req.body;
  const newPost = new postMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
