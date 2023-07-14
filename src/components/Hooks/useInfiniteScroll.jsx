import { useEffect } from "react";

const useInfiniteScroll = (targetRef, onScroll) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) onScroll();
    };
    if (targetRef.current) targetRef.current.addEventListener("scroll", handleScroll);
    return () => {
      if (targetRef) targetRef.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef, onScroll]);
};

export default useInfiniteScroll;
