import Button from "components/Common/Button/Button";
import Input from "components/Common/Input/Input";
import useForm from "components/hooks/useForm";
import { useMutation, useQueryClient } from "react-query";
import { addPost } from "api/posts";
import { buttonValidate, validate } from "modules/formValidate";
import { FormColumnBox } from "./Form.style";
import { useDispatch } from "react-redux";
import { closeModal } from "redux/modules/modalSlice";
import Text from "components/Common/Text/Text";
import { Textarea } from "components/Common/Input/Input.style";

const PostForm = () => {
  const initialState = { title: "", content: "" };

  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => queryClient.invalidateQueries("posts")
  });
  const submitAction = () => {
    mutation.mutate(values);
    dispatch(closeModal("postCreate"));
  };

  const { values, errors, onSubmit, inputAttribute } = useForm(
    initialState,
    validate,
    submitAction
  );

  return (
    <FormColumnBox onSubmit={onSubmit}>
      <Input size={"post"} {...inputAttribute("title")} type={"text"} placeholder={"제목"} />
      {errors.title && (
        <Text as={"span"} size={"medium"} color={"white"} fontWeight={700} letterSpacing={"1.2px"}>
          {errors.title}
        </Text>
      )}

      <Textarea
        size={"post"}
        as={"textarea"}
        {...inputAttribute("content")}
        type={"text"}
        placeholder={"내용"}
      />
      {errors.content && (
        <Text as={"span"} size={"medium"} color={"white"} fontWeight={700} letterSpacing={"1.2px"}>
          {errors.content}
        </Text>
      )}
      <Button size={"medium"} $bgcolor={"cabana"} disabled={buttonValidate(values)}>
        작성
      </Button>
    </FormColumnBox>
  );
};

export default PostForm;
