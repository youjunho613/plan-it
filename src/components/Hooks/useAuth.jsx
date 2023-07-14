import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  let tokenTime = 600;

  const createUsers = async user => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_USER_URL}/register`, user);
      navigate("/login");
      alert("회원가입 성공");
    } catch (error) {
      return alert(error.response.data.message);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_USER_URL}/user`, {
        headers: { authorization: `Bearer ${cookies.userToken}` }
      });
      return response;
    } catch (error) {
      return alert(error.response.data.message);
    }
  };

  const login = async user => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_USER_URL}/login`, user);
      setCookie("userToken", data.token, { path: "/", maxAge: tokenTime });
      navigate("/");
      setTimeout(() => {
        if (!cookies.userToken) alert(`로그인이 만료되었습니다. 재로그인 해주세요`);
      }, tokenTime * 1000);
    } catch (error) {
      return alert(error.response.data.message);
    }
  };

  const logout = () => {
    try {
      removeCookie("userToken");
      navigate("/login");
    } catch (error) {
      return alert(error.response.data.message);
    }
  };

  return { getUser, login, logout, createUsers };
};

export default useAuth;
