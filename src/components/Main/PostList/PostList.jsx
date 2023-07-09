import { getPosts } from "api/posts";
import { useQuery } from "react-query";
import PostCard from "../PostCard/PostCard";

const PostList = () => {
  const { isLoading, isError, data } = useQuery("posts", getPosts);

  if (isLoading) {
    return <h2>로딩중입니다!!</h2>;
  }

  if (isError) {
    return <h2>에러가 발생하였습니다.</h2>;
  }

  return (
    <ol>
      {data.map(item => {
        return <PostCard key={item.id} item={item} />;
      })}
    </ol>
  );
};

export default PostList;
