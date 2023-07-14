import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import useAuth from "components/hooks/useAuth";
import { useEffect } from "react";

const UserCheck = ({ children }) => {
  const navigate = useNavigate();

  const { getUser } = useAuth();
  const { isLoading, isError, data } = useQuery("user", getUser);

  useEffect(() => {
    if (!data) {
      navigate("/login");
      return alert("로그인 부탁드립니다");
    }
  }, [data, navigate]);

  if (isLoading) return <h2>로딩중입니다!!</h2>;
  if (isError) return <h2>에러가 발생하였습니다.</h2>;
  return <>{children}</>;
};

export default UserCheck;
