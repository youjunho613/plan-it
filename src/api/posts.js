import axios from "axios";

const posts = "/posts";

// FIXME 무한스크롤
// const PAGE_SIZE = 10;
// const getPosts = async (page = 0) => {
//   try {
//     const response = await axios.get(
//       `${process.env.REACT_APP_SERVER_JSON_URL}/posts?_start=${
//         page * PAGE_SIZE
//       }&_limit=${PAGE_SIZE}`
//     );
//     return response.data;
//   } catch (error) {}
// };

const getPosts = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_JSON_URL}${posts}`);
    return data;
  } catch (error) {}
};

const addPost = async newPost => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_JSON_URL}${posts}`, newPost);
  } catch (error) {}
};

const patchPost = async ({ values, id }) => {
  try {
    await axios.patch(`${process.env.REACT_APP_SERVER_JSON_URL}${posts}/${id}`, values);
  } catch (error) {}
};

const deletePost = async id => {
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_JSON_URL}${posts}/${id}`);
  } catch (error) {}
};

export { getPosts, addPost, deletePost, patchPost };
