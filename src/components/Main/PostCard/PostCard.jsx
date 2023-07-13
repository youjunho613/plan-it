import { deletePost, patchPost } from "api/posts";
import Button from "components/Common/Button/Button";
import Input from "components/Common/Input/Input";
import Text from "components/Common/Text/Text";
import useForm from "components/Hooks/useForm";
import { buttonValidate, validate } from "modules/formValidate";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const PostCard = ({ item }) => {
  const { id, title, content } = item;
  const [isOpen, setIsOpen] = useState({ deleteOpen: false, patchOpen: false });

  const changeBoolean = (type, boolean) =>
    type === "delete"
      ? setIsOpen({ ...isOpen, deleteOpen: boolean })
      : setIsOpen({ ...isOpen, patchOpen: boolean });

  const initialState = { title, content };

  const queryClient = useQueryClient();
  // delete
  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => queryClient.invalidateQueries("posts")
  });
  const deleteHandler = () => deleteMutation.mutate(id);

  // patch
  const patchMutation = useMutation(patchPost, {
    onSuccess: () => queryClient.invalidateQueries("posts")
  });
  const submitAction = () => patchMutation.mutate({ values, id });

  const { values, errors, onChange, onSubmit } = useForm(initialState, validate, submitAction);

  const inputAttribute = (name, placeholder) => ({
    type: "text",
    name,
    value: values[name],
    placeholder,
    onChange
  });

  return (
    <li>
      <Text size={"small"}>ID : {id}</Text>
      <Text size={"large"}>{title}</Text>
      <Text size={"medium"}>{content}</Text>

      {!isOpen.deleteOpen && !isOpen.patchOpen && (
        <>
          <Button size={"large"} bgcolor={"tropics"} onClick={() => changeBoolean("patch", true)}>
            수정
          </Button>
          <Button size={"large"} bgcolor={"tropics"} onClick={() => changeBoolean("delete", true)}>
            삭제
          </Button>
        </>
      )}

      {isOpen.patchOpen && (
        <form onSubmit={onSubmit}>
          <Input {...inputAttribute("title", "제목")} />
          {errors.title && <span>{errors.title}</span>}
          <Input {...inputAttribute("content", "내용")} />
          {errors.content && <span>{errors.content}</span>}
          <Button size={"large"} bgcolor={"tropics"} disabled={buttonValidate(values)}>
            수정 완료
          </Button>
          <Button
            size={"large"}
            bgcolor={"tropics"}
            type="button"
            onClick={() => changeBoolean("patch", false)}
          >
            닫기
          </Button>
        </form>
      )}

      {isOpen.deleteOpen && (
        <>
          <Button size={"large"} bgcolor={"tropics"} onClick={deleteHandler}>
            삭제하기
          </Button>
          <Button size={"large"} bgcolor={"tropics"} onClick={() => changeBoolean("delete", false)}>
            닫기
          </Button>
        </>
      )}
    </li>
  );
};

export default PostCard;
