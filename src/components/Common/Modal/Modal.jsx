import * as Styled from "components/Common/Modal/Modal.style";
import Button from "components/Common/Button/Button";

const Modal = Children => {
  return (
    <Styled.Outer>
      <Styled.Inner>{Children}</Styled.Inner>
      <Button></Button>
    </Styled.Outer>
  );
};

export default Modal;
