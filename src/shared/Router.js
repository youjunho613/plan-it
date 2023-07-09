import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme/theme";
import GlobalStyle from "styles/GlobalStyle";
import Header from "components/Header/Header";
import Nav from "components/Nav/Nav";
import Detail from "pages/Detail";
import Profile from "pages/Profile";
import Main from "pages/Main";

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="content/:contentId" element={<Detail />} />
          <Route path="profile/:uid" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
