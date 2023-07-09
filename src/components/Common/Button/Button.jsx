import * as Styled from "components/Common/Button/Button.style";

const Button = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

export default Button;

/*
**공통 사항**
커서는 포인터
호버 스타일

**프롭스**
사이즈 
테마색상

*/
