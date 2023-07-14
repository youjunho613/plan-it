const validate = values => {
  const errors = {};
  if (values.content.length < 10) errors.content = "내용은 최소 10글자 이상을 입력해주세요";
  return errors;
};

const buttonValidate = values =>
  (!values.title || !values.content) && (!values.id || !values.password);

const validateForm = values => {
  let errors = {};
  if (!values.id) errors.id = "아이디를 입력해주세요.";
  if (!values.password) errors.password = "비밀번호를 입력해주세요.";
  if (values.password !== values.passwordCheck)
    errors.passwordCheck = "비밀번호가 일치하지 않습니다.";
  return errors;
};

export { validate, buttonValidate, validateForm };
