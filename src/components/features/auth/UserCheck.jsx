import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import useAuth from "components/Hooks/useAuth";

const UserCheck = ({ children }) => {
  const navigate = useNavigate();
  // 유저 정보 get
  // @Todo 유저 토큰 가져오기
  const { getUser } = useAuth();
  const { isLoading, isError, data } = useQuery("user", getUser);
  console.log("🚀 토큰 :", data);

  if (isLoading) return <h2>로딩중입니다!!</h2>;

  if (isError) return <h2>에러가 발생하였습니다.</h2>;

  // @Todo 로그인 안되있을 경우 로그인페이지로 이동
  // @Todo 가져온 토큰 값 if 조건문
  // if (!token 값) return navigate("/login");
  if (!data) {
    navigate("/login");
    alert("로그인 부탁드립니다");
    return;
  }

  return <>{children}</>;
};

export default UserCheck;
