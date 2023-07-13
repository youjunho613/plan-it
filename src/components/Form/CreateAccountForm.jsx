// feat
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { buttonValidate } from "modules/formValidate";
// hook
import useAuth from "components/Hooks/useAuth";
import useForm from "components/Hooks/useForm";
// import usePrintError from "components/Hooks/usePrintError";
// component
import Button from "components/Common/Button/Button";
import Input from "components/Common/Input/Input";
import Text from "components/Common/Text/Text";
// style
import { FormColumnBox } from "./Form.style";

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const initialState = {
    id: "",
    password: ""
    // passwordCheck: ""
  };

  const validateForm = () => {
    let errors = {};
    if (!values.id) errors.id = "아이디를 입력해주세요.";
    if (!values.password) errors.password = "비밀번호를 입력해주세요.";
    // if (values.password !== values.passwordCheck) errors.passwordCheck = "비밀번호가 일치하지 않습니다.";
    return errors;
  };

  const { createUsers } = useAuth();
  const queryClient = useQueryClient();
  const mutation = useMutation(createUsers, {
    onSuccess: () => queryClient.invalidateQueries("user")
  });

  // @Todo 회원가입 후에 로그인창으로 보내주기
  const submitAction = values => {
    mutation.mutate(values);
    alert("회원가입 성공");
  };

  // const { errorMessage, printError } = usePrintError();
  const { values, errors, onChange, onSubmit } = useForm(initialState, validateForm, submitAction);

  const inputAttribute = (type, name, placeholder) => ({
    type,
    name,
    value: values[name],
    placeholder,
    onChange
  });

  return (
    <FormColumnBox padding={"40px"} bgcolor={"endeavor"} onSubmit={onSubmit}>
      <Input size={"large"} {...inputAttribute("text", "id", "아이디")} />
      {errors.id && <Text as={"span"}>{errors.id}</Text>}
      {/* {errorMessage && <span>{errorMessage}</span>} */}
      <Input size={"large"} {...inputAttribute("password", "password", "비밀번호")} />
      {errors.password && <Text as={"span"}>{errors.password}</Text>}
      {/* <Input {...inputAttribute("password", "passwordCheck", "비밀번호 확인")} /> */}
      {/* {errors.passwordCheck && <span>{errors.passwordCheck}</span>} */}
      <Button
        size={"large"}
        bgcolor={"tropics"}
        fontWeight={"700"}
        disabled={buttonValidate(values)}
      >
        회원가입
      </Button>
      <Button
        size={"large"}
        bgcolor={"tropics"}
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
