import Button from "components/Common/Button/Button";
import useAuth from "components/hooks/useAuth";
import Nav from "components/Nav/Nav";
import { useMutation } from "react-query";
import { HeaderBox } from "./Header.style";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "redux/modules/modalSlice";
import Modal from "components/Common/Modal/Modal";
import PostForm from "components/Form/PostForm";

const Header = () => {
  const { logout } = useAuth();
  const mutation = useMutation(logout);

  const isOpen = useSelector(state => state.modal);

  const dispatch = useDispatch();

  const modalOpenHandler = () => {
    dispatch(openModal("postCreate"));
  };

  // TODO 버튼&h1 구름 백그라운드 추가
  return (
    <HeaderBox>
      <Nav />
      <div>
        <Button size={"large"} $bgcolor={"sand"} fontWeight={600} onClick={modalOpenHandler}>
          새 글
        </Button>
        {isOpen.postCreate && (
          <Modal closeTarget={"postCreate"}>
            <PostForm />
          </Modal>
        )}
        <Button size={"large"} $bgcolor={"sand"} fontWeight={600} onClick={() => mutation.mutate()}>
          로그아웃
        </Button>
      </div>
    </HeaderBox>
  );
};

export default Header;
