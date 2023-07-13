import * as Styled from "./Text.style";

const Text = ({ children, ...rest }) => {
  return <Styled.Text {...rest}>{children}</Styled.Text>;
};

export default Text;
