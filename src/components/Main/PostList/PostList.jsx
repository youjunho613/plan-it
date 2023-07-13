import { getPosts } from "api/posts";
import { useQuery } from "react-query";
import PostCard from "../PostCard/PostCard";
// import Modal from "components/Common/Modal/Modal";
// import { useDispatch, useSelector } from "react-redux";

const PostList = () => {
  // get
  const { isLoading, isError, data } = useQuery("posts", getPosts);

  if (isLoading) return <h2>로딩중입니다!!</h2>;

  if (isError) return <h2>에러가 발생하였습니다.</h2>;

  // const { postOpen } = useSelector(state => state.modalStatus);
  // const dispatch = useDispatch();
  return (
    <ol>
      {/* <button
        onClick={() => {
          dispatch({ postOpen: true });
        }}
      >
        모달 오픈
      </button>
      {postOpen && (
        <Modal target={postOpen}>
          <PostCard />
        </Modal>
      )} */}
      {data.map(item => {
        return <PostCard key={item.id} item={item} />;
      })}
    </ol>
  );
};

export default PostList;
