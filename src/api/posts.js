import axios from "axios";

const posts = "/posts";

const getPosts = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_JSON_URL}${posts}`);
    return data;
  } catch (error) {
    console.log(`겟오류 :`, error);
  }
};

const addPost = async newPost => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_JSON_URL}${posts}`, newPost);
  } catch (error) {
    console.log(`포스트오류 :`, error);
  }
};

const patchPost = async ({ id, values }) => {
  try {
    await axios.patch(`${process.env.REACT_APP_SERVER_JSON_URL}${posts}/${id}`, values);
  } catch (error) {
    console.log(`수정오류 :`, error);
  }
};

const deletePost = async id => {
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_JSON_URL}${posts}/${id}`);
  } catch (error) {
    console.log(`삭제오류 :`, error);
  }
};

export { getPosts, addPost, deletePost, patchPost };
