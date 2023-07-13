import PostForm from "components/Main/PostForm/PostForm";
import PostList from "components/Main/PostList/PostList";
import { styled } from "styled-components";

const Main = () => {
  return (
    <Div>
      <h2>일정을 관리하세요</h2>
      <PostForm></PostForm>
      <PostList></PostList>
    </Div>
  );
};

export default Main;

const Div = styled.div`
  width: 100%;
  height: 2000px;
`;
// const App = () => {
//   const dispatch = useDispatch();
//   const isOpen = useSelector(state => state.modal.isOpen);

//   const handleOpenModal = () => {
//     dispatch(openModal());
//   };

//   const handleCloseModal = () => {
//     dispatch(closeModal());
//   };

//   return (
//     <div>
//       <h1>My App</h1>
//       <button onClick={handleOpenModal}>Open Modal</button>
//       <Modal isOpen={isOpen} onClose={handleCloseModal}>
//         <p>Modal Content</p>
//       </Modal>
//     </div>
//   );
// };
