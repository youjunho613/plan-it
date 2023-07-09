import Button from "components/Common/Button/Button";
import Input from "components/Common/Input/Input";
import useForm from "components/Hooks/useForm";
import { useMutation, useQueryClient } from "react-query";
import { addPost } from "api/posts";
import { buttonValidate, validate } from "modules/formValidate";

const initialState = {
  title: "",
  content: ""
};

const PostForm = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => queryClient.invalidateQueries("posts")
  });
  const submitAction = values => mutation.mutate(values);

  const { values, errors, onChange, onSubmit } = useForm(initialState, validate, submitAction);

  const inputAttribute = (name, placeholder) => ({
    type: "text",
    name,
    value: values[name],
    placeholder,
    onChange
  });
  return (
    <form onSubmit={onSubmit}>
      <Input {...inputAttribute("title", "제목")} />
      {errors.title && <span>{errors.title}</span>}
      <Input {...inputAttribute("content", "내용")} />
      {errors.content && <span>{errors.content}</span>}
      <Button disabled={buttonValidate(values)}>작성</Button>
    </form>
  );
};

export default PostForm;
