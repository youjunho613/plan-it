import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { buttonValidate } from "modules/formValidate";
import useForm from "components/hooks/useForm";
import useAuth from "components/hooks/useAuth";
import Input from "components/Common/Input/Input";
import Button from "components/Common/Button/Button";
import { FormColumnBox } from "./Form.style";
import Text from "components/Common/Text/Text";

const initialState = { id: "", password: "" };

const validateForm = values => {
  let errors = {};
  if (!values.id) errors.id = "이메일을 입력해주세요.";
  if (!values.password) errors.password = "비밀번호를 입력해주세요.";
  return errors;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const queryClient = useQueryClient();
  const mutation = useMutation(login, {
    onSuccess: () => queryClient.invalidateQueries("user")
  });

  const submitAction = () => {
    mutation.mutate(values);
  };

  const { values, errors, onSubmit, inputAttribute } = useForm(
    initialState,
    validateForm,
    submitAction
  );

  return (
    <FormColumnBox padding={"40px"} $bgcolor={"sand"} onSubmit={onSubmit}>
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
      <Button
        size={"large"}
        $bgcolor={"cabana"}
        fontWeight={"700"}
        disabled={buttonValidate(values)}
      >
        로그인
      </Button>
      <Button
        size={"large"}
        $bgcolor={"cabana"}
        fontWeight={"700"}
        type={"button"}
        onClick={() => navigate("/createaccount")}
      >
        회원 가입
      </Button>
    </FormColumnBox>
  );
};

export default LoginForm;
