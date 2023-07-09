import * as Styled from "components/Common/Input/Input.style";

/**
 * Input 컴포넌트
 *
 * @param {object} props - {size, attribute}
 * @param {'small' | 'medium' | 'large'} props.size - size 프로퍼티에 대한 설명
 * @param {'attribute object'} props.rest - 나머지 props에 대한 설명
 */
const Input = ({ ...rest }) => {
  return <Styled.Input {...rest} />;
};

export default Input;
