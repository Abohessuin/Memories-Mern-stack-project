import axios from "axios";

const getPosts_URL = "http://localhost:5000/posts/getposts";
const CreatePost_URL = "http://localhost:5000/posts/createpost";


export const getPostsRequest =()=>{
   return axios.get(getPosts_URL);
}
export const createPostRequest = async (newPost) => {
  await axios.post(CreatePost_URL, newPost);
};
