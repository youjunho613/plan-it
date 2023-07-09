import React from "react";
import useForm from "components/Hooks/useForm";

const initialState = {
  email: "",
  password: ""
};

const validateForm = values => {
  let errors = {};

  if (!values.email) {
    errors.email = "이메일을 입력해주세요.";
  }

  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요.";
  }

  return errors;
};

const JoinForm = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    initialState,
    validateForm
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={values.email}
        placeholder="이메일"
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}
      <button disabled={isSubmitting}>로그인</button>
    </form>
  );
};

export default JoinForm;
