import axios from "axios";

const getPosts = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return data;
};

const addPost = async newPost => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost);
};

const patchPost = async ({ id, values }) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, values);
};

const deletePost = async id => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
};

export { getPosts, addPost, deletePost, patchPost };
