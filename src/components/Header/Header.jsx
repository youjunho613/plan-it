import Button from "components/Common/Button/Button";
import Nav from "components/Nav/Nav";
import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <h1>Plan-It</h1>
      <Nav />
      <Button>글 작성</Button>
      <Button>로그인</Button>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  top: 0;
  left: 0;
  position: static;

  width: 100%;
  height: 100px;

  background-color: ${props => props.theme.main.endeavor};
  color: ${props => props.theme.main.textWhite};
`;
