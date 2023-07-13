import Button from "components/Common/Button/Button";
import useAuth from "components/Hooks/useAuth";
import Nav from "components/Nav/Nav";
import { useMutation } from "react-query";
import { ButtonBox, HeaderBox } from "./Header.style";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "redux/modules/modalSlice";
import Modal from "components/Common/Modal/Modal";

// @Todo 로그아웃
// @Todo 글작성 모달
const Header = () => {
  const { logout } = useAuth();
  const mutation = useMutation(logout);

  const isOpen = useSelector(state => state.modal);
  console.log("redux", isOpen);

  const dispatch = useDispatch();

  const modalOpenHandler = () => {
    dispatch(openModal("postCreate"));
  };
  return (
    <HeaderBox>
      <Nav />
      <ButtonBox>
        <Button size={"large"} bgcolor={"sand"} fontWeight={600} onClick={modalOpenHandler}>
          새 글
        </Button>
        {isOpen.postCreate && <Modal></Modal>}
        <Button size={"large"} bgcolor={"sand"} fontWeight={600} onClick={() => mutation.mutate()}>
          로그아웃
        </Button>
      </ButtonBox>
    </HeaderBox>
  );
};

export default Header;
