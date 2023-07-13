const validate = values => {
  const errors = {};
  if (values.content.length < 10) errors.content = "내용은 최소 10글자 이상을 입력해주세요";
  return errors;
};

const buttonValidate = values =>
  (!values.title || !values.content) && (!values.id || !values.password);

export { validate, buttonValidate };
