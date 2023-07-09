import { deletePost, patchPost } from "api/posts";
import Button from "components/Common/Button/Button";
import Input from "components/Common/Input/Input";
import useForm from "components/Hooks/useForm";
import { buttonValidate, validate } from "modules/formValidate";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const PostCard = ({ item }) => {
  const { id, title, content } = item;
  const [isOpen, setIsOpen] = useState({
    deleteOpen: false,
    patchOpen: false
  });

  const changeBoolean = (type, boolean) => {
    if (type === "delete") setIsOpen({ ...isOpen, deleteOpen: boolean });
    if (type === "patch") setIsOpen({ ...isOpen, patchOpen: boolean });
  };

  const initialState = { title: title, content: content };

  const queryClient = useQueryClient();
  // delete
  const deleteMutation = useMutation(deletePost, {
    onSuccess: () => queryClient.invalidateQueries("posts")
  });
  const deleteHandler = id => deleteMutation.mutate(id);

  // patch
  const patchMutation = useMutation(patchPost, {
    onSuccess: () => queryClient.invalidateQueries("posts")
  });
  const submitAction = () => patchMutation.mutate(valuesId);
  const [valuesId, setValuesId] = useState();

  const { values, errors, onChange, onSubmit } = useForm(initialState, validate, submitAction);

  useEffect(() => {
    setValuesId({ values, id: id });
  }, [id, values]);

  const inputAttribute = (name, placeholder) => ({
    type: "text",
    name,
    value: values[name],
    placeholder,
    onChange
  });

  return (
    <li>
      <form onSubmit={onSubmit}>
        <span>{id}</span>
        {!isOpen.deleteOpen && !isOpen.patchOpen && (
          <>
            <p>{title}</p>
            <p>{content}</p>
            <Button onClick={() => changeBoolean("patch", true)}>수정</Button>
            <Button onClick={() => changeBoolean("delete", true)}>삭제</Button>
          </>
        )}

        {isOpen.patchOpen && (
          <>
            <Input {...inputAttribute("title", "제목")} />
            {errors.title && <span>{errors.title}</span>}
            <Input {...inputAttribute("content", "내용")} />
            {errors.content && <span>{errors.content}</span>}
            <Button disabled={buttonValidate(values)}>수정 완료</Button>
            <Button onClick={() => changeBoolean("patch", false)}>닫기</Button>
          </>
        )}

        {isOpen.deleteOpen && (
          <>
            <Button type="button" onClick={() => deleteHandler(id)}>
              삭제 확인
            </Button>
            <Button onClick={() => changeBoolean("delete", false)}>닫기</Button>
          </>
        )}
      </form>
    </li>
  );
};

export default PostCard;
