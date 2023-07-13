import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header/Header";
import UserCheck from "components/features/auth/UserCheck";
import Main from "pages/Main";
import Login from "pages/Login";
import CreateAccount from "pages/CreateAccount";
import Detail from "pages/Detail";
import Profile from "pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserCheck>
              <Header />
              <Main />
            </UserCheck>
          }
        >
          <Route path="content/:contentId" element={<Detail />} />
          <Route path="profile/:uid" element={<Profile />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="createaccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
