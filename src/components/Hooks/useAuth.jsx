import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const nav = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);

  const getUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_USER_URL}/user`, {
        headers: { authorization: `Bearer ${cookies.userToken}` }
      });
      return response;
    } catch (error) {
      console.log(`토큰 가져오기 에러 :`, error);
      console.log(`토큰 가져오기 에러 :`, error.response.data.message);
      return alert(error.response.data.message);
    }
  };

  let tokenTime = 600;
  const login = async user => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_USER_URL}/login`, user);
      setCookie("userToken", data.token, { path: "/", maxAge: tokenTime });
      nav("/");
      console.log("로그인 작동");
      setTimeout(() => {
        if (!cookies.userToken) {
          logout();
        }
      }, tokenTime * 1000);
      setTimeout(() => {
        alert(`로그인 시간이 ${tokenTime / 2}초 남았습니다.`);
      }, (tokenTime * 1000) / 2);
    } catch (error) {
      console.log(`로그인  에러 :`, error);
    }
  };

  const logout = () => {
    try {
      removeCookie("userToken");
      nav("/login");
    } catch (error) {
      console.log(`로그아웃 에러 : `, error);
    }
  };

  /**
   * axios post
   * @param {*} user request {id,password}
   */
  const createUsers = async user => {
    try {
      await axios
        .post(`${process.env.REACT_APP_SERVER_USER_URL}/register`, user)
        .then(function (response) {
          console.log(response);
        });
      nav("/login");
    } catch (error) {
      console.log(`회원가입 에러 :`, error);
    }
  };

  return { getUser, login, logout, createUsers };
};

export default useAuth;
