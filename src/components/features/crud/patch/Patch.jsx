import { patchPost } from "api/posts";
import { useMutation, useQueryClient } from "react-query";
import { ButtonBox, PatchForm } from "../Todo.style";
import { Textarea } from "components/Common/Input/Input.style";
import { buttonValidate, validate } from "modules/formValidate";
import useForm from "components/hooks/useForm";
import Input from "components/Common/Input/Input";
import Button from "components/Common/Button/Button";
import Text from "components/Common/Text/Text";

const Patch = ({ changeBoolean, item }) => {
  const { id, title, content } = item;
  const initialState = { title, content };

  const queryClient = useQueryClient();
  const patchMutation = useMutation(patchPost, {
    onSuccess: () => queryClient.invalidateQueries("posts")
  });

  const submitAction = () => {
    patchMutation.mutate({ values, id });
  };

  const { values, errors, onSubmit, inputAttribute } = useForm(
    initialState,
    validate,
    submitAction
  );
  return (
    <PatchForm onSubmit={onSubmit}>
      <Input
        size={"patch"}
        $bgcolor={"sand"}
        {...inputAttribute("title")}
        type={"text"}
        placeholder={"제목"}
      />
      {errors.title && (
        <Text as={"span"} size={"medium"} color={"white"} fontWeight={700} letterSpacing={"1.2px"}>
          {errors.title}
        </Text>
      )}
      <Textarea
        as={"textarea"}
        size={"patch"}
        $bgcolor={"sand"}
        {...inputAttribute("content")}
        type={"text"}
        placeholder={"내용"}
      />
      {errors.content && (
        <Text as={"span"} size={"medium"} color={"white"} fontWeight={700} letterSpacing={"1.2px"}>
          {errors.content}
        </Text>
      )}
      <ButtonBox>
        <Button size={"large"} $bgcolor={"tropics"} disabled={buttonValidate(values)}>
          수정
        </Button>
        <Button
          size={"large"}
          $bgcolor={"tropics"}
          type="button"
          onClick={() => changeBoolean("patch", false)}
        >
          닫기
        </Button>
      </ButtonBox>
    </PatchForm>
  );
};

export default Patch;
