import Text from "components/Common/Text/Text";
import { Li } from "./Todo.style";
import { useNavigate } from "react-router-dom";

const TodoCard = ({ item }) => {
  const { id, title, content } = item;
  const navigate = useNavigate();

  return (
    <Li
      $bgcolor={"white"}
      onClick={() => {
        navigate(`content/${id}`);
      }}
    >
      <Text size={"small"}>게시글 번호 : {id}</Text>
      <Text size={"large"} $textalign={"center"}>
        {title}
      </Text>
      <Text size={"medium"}>{content}</Text>
    </Li>
  );
};

export default TodoCard;
