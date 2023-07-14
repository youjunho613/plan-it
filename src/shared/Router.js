import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header/Header";
import UserCheck from "components/features/auth/UserCheck";
import Home from "pages/Home";
import Login from "pages/Login";
import CreateAccount from "pages/CreateAccount";
import Detail from "pages/Detail";
import Layout from "components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserCheck>
              <Header />
              <Layout />
            </UserCheck>
          }
        >
          <Route index element={<Home />} />
          <Route path="content/:contentId" element={<Detail />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="createaccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
