import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { validateForm } from "modules/formValidate";
import useAuth from "components/hooks/useAuth";
import useForm from "components/hooks/useForm";
import Button from "components/Common/Button/Button";
import Input from "components/Common/Input/Input";
import Text from "components/Common/Text/Text";
import { FormColumnBox } from "./Form.style";

const CreateAccountForm = () => {
  const navigate = useNavigate();

  const initialState = {
    id: "",
    password: "",
    passwordCheck: ""
  };

  const { createUsers } = useAuth();
  const queryClient = useQueryClient();
  const mutation = useMutation(createUsers, {
    onSuccess: () => queryClient.invalidateQueries("user")
  });

  const submitAction = () => mutation.mutate({ id: values.id, password: values.password });

  const { values, errors, onSubmit, inputAttribute } = useForm(
    initialState,
    validateForm,
    submitAction
  );

  return (
    <FormColumnBox padding={"40px"} $bgcolor={"endeavor"} onSubmit={onSubmit}>
      <Input size={"large"} {...inputAttribute("id")} type={"id"} placeholder={"아이디"} />
      {errors.id && (
        <Text as={"span"} size={"medium"} color={"white"} fontWeight={700} letterSpacing={"1.2px"}>
          {errors.id}
        </Text>
      )}
      <Input
        size={"large"}
        {...inputAttribute("password")}
        type={"password"}
        placeholder={"비밀번호"}
      />
      {errors.password && (
        <Text as={"span"} size={"medium"} color={"white"} fontWeight={700} letterSpacing={"1.2px"}>
          {errors.password}
        </Text>
      )}
      <Input
        size={"large"}
        {...inputAttribute("passwordCheck")}
        type={"password"}
        placeholder={"비밀번호 확인"}
      />
      {errors.passwordCheck && (
        <Text as={"span"} size={"medium"} color={"white"} fontWeight={700} letterSpacing={"1.2px"}>
          {errors.passwordCheck}
        </Text>
      )}
      <Button size={"large"} $bgcolor={"tropics"} fontWeight={"700"}>
        회원가입
      </Button>
      <Button
        size={"large"}
        $bgcolor={"tropics"}
        fontWeight={"700"}
        type={"button"}
        onClick={() => navigate("/login")}
      >
        로그인으로
      </Button>
    </FormColumnBox>
  );
};

export default CreateAccountForm;
