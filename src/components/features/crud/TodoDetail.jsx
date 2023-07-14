import Button from "components/Common/Button/Button";
import Text from "components/Common/Text/Text";
import IsError from "components/lenderStatus/IsError";
import IsLoading from "components/lenderStatus/IsLoading";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ButtonBox, DivBox } from "./Todo.style";
import Delete from "./delete/delete";
import Patch from "./patch/Patch";
import { getPosts } from "api/posts";

const TodoDetail = () => {
  const param = useParams();
  const { isLoading, isError, data } = useQuery("posts", getPosts);
  const item = data?.find(todo => String(todo.id) === param.contentId);

  const { id, title, content } = item;
  const [isOpen, setIsOpen] = useState({ deleteOpen: false, patchOpen: false });

  const changeBoolean = (type, boolean) =>
    type === "delete"
      ? setIsOpen({ ...isOpen, deleteOpen: boolean })
      : setIsOpen({ ...isOpen, patchOpen: boolean });

  if (isLoading) return <IsLoading />;
  if (isError || item === undefined) return <IsError />;
  return (
    <DivBox>
      <Text size={"small"}>게시글 번호 : {id}</Text>
      <Text size={"large"} $textalign={"center"}>
        {title}
      </Text>
      <Text size={"medium"}>{content}</Text>

      {!isOpen.deleteOpen && !isOpen.patchOpen && (
        <ButtonBox>
          <Button size={"large"} $bgcolor={"tropics"} onClick={() => changeBoolean("patch", true)}>
            수정
          </Button>
          <Button size={"large"} $bgcolor={"tropics"} onClick={() => changeBoolean("delete", true)}>
            삭제
          </Button>
        </ButtonBox>
      )}

      {isOpen.patchOpen && <Patch changeBoolean={changeBoolean} item={item} />}

      {isOpen.deleteOpen && <Delete changeBoolean={changeBoolean} id={id} />}
    </DivBox>
  );
};

export default TodoDetail;
