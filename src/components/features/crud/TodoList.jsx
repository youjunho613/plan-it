import { getPosts } from "api/posts";
import { useQuery } from "react-query";
import TodoCard from "./TodoCard";
import { Ol } from "./Todo.style";
import IsLoading from "components/lenderStatus/IsLoading";
import IsError from "components/lenderStatus/IsError";

const TodoList = () => {
  const { isLoading, isError, data } = useQuery("posts", getPosts);
  if (isLoading) return <IsLoading />;
  if (isError) return <IsError />;
  return (
    <Ol>
      {data.map(item => {
        return <TodoCard key={item.id} item={item} />;
      })}
    </Ol>
  );
};

export default TodoList;

// FIXME 무한스크롤
// import React, { useEffect } from "react";
// import { useInfiniteQuery } from "react-query";
// import TodoCard from "./TodoCard";
// import { Ol } from "./Todo.style";
// import IsLoading from "components/lenderStatus/IsLoading";
// import IsError from "components/lenderStatus/IsError";
// import { getPosts } from "api/posts";

// const PAGE_SIZE = 15; // 한 번에 로드할 페이지 크기
// const LOAD_THRESHOLD = 200; // 스크롤 이벤트 발생 임계값 (px)

// const TodoList = () => {
//   const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery(
//     "posts",
//     getPosts,
//     {
//       getNextPageParam: lastPage =>
//         lastPage.length < PAGE_SIZE ? false : lastPage.length / PAGE_SIZE
//     }
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrollAtBottom =
//         window.innerHeight + document.documentElement.scrollTop >=
//         document.documentElement.scrollHeight - LOAD_THRESHOLD;
//       if (isScrollAtBottom && !isFetchingNextPage && hasNextPage) fetchNextPage();
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [fetchNextPage, isFetchingNextPage, hasNextPage]);

//   if (status === "loading") return <IsLoading />;
//   if (status === "error") return <IsError />;

//   return (
//     <Ol>
//       {data.pages.map(page => page.map(item => <TodoCard key={item.id} item={item} />))}
//       {isFetchingNextPage && <IsLoading />}
//     </Ol>
//   );
// };

// export default TodoList;
