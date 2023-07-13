// feat
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { buttonValidate } from "modules/formValidate";
// hook
import useForm from "components/Hooks/useForm";
import useAuth from "components/Hooks/useAuth";
// import usePrintError from "components/Hooks/usePrintError";
// component
import Input from "components/Common/Input/Input";
import Button from "components/Common/Button/Button";
// style
import { FormColumnBox } from "./Form.style";

const initialState = { id: "", password: "" };

const validateForm = values => {
  let errors = {};
  if (!values.id) errors.id = "이메일을 입력해주세요.";
  if (!values.password) errors.password = "비밀번호를 입력해주세요.";
  return errors;
};

const LoginForm = () => {
  // const { errorMessage, printError } = usePrintError();
  const navigate = useNavigate();
  const { login } = useAuth();
  const queryClient = useQueryClient();
  const mutation = useMutation(login, {
    onSuccess: () => queryClient.invalidateQueries("user")
  });

  const submitAction = () => {
    mutation.mutate(values);
    console.log("Todo 쿠키 설정");
  };

  const { values, errors, onChange, onSubmit } = useForm(initialState, validateForm, submitAction);

  const inputAttribute = (name, placeholder) => ({
    type: name,
    name,
    value: values[name],
    placeholder,
    onChange
  });

  return (
    <FormColumnBox padding={"40px"} bgcolor={"sand"} onSubmit={onSubmit}>
      <Input size={"large"} {...inputAttribute("id", "아이디")} />
      {errors.id && <span>{errors.id}</span>}
      {/* {errorMessage && <span>{errorMessage}</span>} */}
      <Input size={"large"} {...inputAttribute("password", "비밀번호")} />
      {errors.password && <span>{errors.password}</span>}
      <Button
        size={"large"}
        bgcolor={"cabana"}
        fontWeight={"700"}
        disabled={buttonValidate(values)}
      >
        로그인
      </Button>
      <Button
        size={"large"}
        bgcolor={"cabana"}
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
