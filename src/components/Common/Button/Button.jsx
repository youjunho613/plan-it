import * as Styled from "components/Common/Button/Button.style";

const Button = ({ children, ...rest }) => {
  return <Styled.Button {...rest}>{children}</Styled.Button>;
};
export default Button;
