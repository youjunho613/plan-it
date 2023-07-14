import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Outlet />
      {children}
    </>
  );
};

export default Layout;
