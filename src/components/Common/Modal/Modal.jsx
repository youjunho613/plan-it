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

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { closeModal } from '../features/modal/modalSlice';
// import './Modal.css';

// function Modal({ isOpen, onClose, children }) {
//   const dispatch = useDispatch();

//   const handleClose = () => {
//     dispatch(closeModal());
//     onClose();
//   };

//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>Modal Title</h2>
//           <button className="close-button" onClick={handleClose}>
//             X
//           </button>
//         </div>
//         <div className="modal-body">{children}</div>
//       </div>
//       <div className="overlay" />
//     </div>
//   );
// }

// export default Modal;

/*
위의 코드에서 Redux Toolkit을 사용하여 modalSlice를 생성합니다.
이 Slice는 모달의 열림/닫힘 상태를 관리합니다. 
openModal 액션과 closeModal 액션을 정의하여 상태를 변경합니다.

App 컴포넌트에서 useDispatch 훅을 사용하여 Redux의 dispatch 함수를 가져와서 
handleOpenModal과 handleCloseModal 함수에서 액션을 디스패치합니다. 
isOpen 상태는 useSelector 훅을 사용하여 Redux 상태에서 가져옵니다.

Modal 컴포넌트에서도 useDispatch 훅을 사용하여 
closeModal 액션을 디스패치하는 handleClose 함수를 정의합니다. 
모달이 열려있을 때만 렌더링되도록 조건을 추가하였습니다.

Redux Toolkit을 사용하여 모달의 열림/닫힘 상태를 관리하고, 
해당 상태를 컴포넌트에서 사용할 수 있도록 구현되었습니다. 
모달을 열고 닫을 때 Redux 상태를 업데이트하므로 다른 컴포넌트에서도 모달 상태를 쉽게 관리할 수 있습니다.
*/
