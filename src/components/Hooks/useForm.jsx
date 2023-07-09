import { useCallback, useState } from "react";
import _ from "lodash";

const useForm = (initialState, validate, submitAction) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = useCallback(
    event => setValues({ ...values, [event.target.name]: event.target.value }),
    [values]
  );

  const onSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    if (_.isEmpty(validate(values))) {
      submitAction(values);
      setValues(initialState);
    }
  };

  return { values, errors, onChange, onSubmit };
};

export default useForm;

// 위의 코드에서 useFormValidation Hook은 다음의 매개변수를 받습니다:

// initialState: 폼의 초기 상태를 나타내는 객체
// validate: 유효성 검증 함수. 폼 필드 값에 대한 유효성을 검사하고 오류 객체를 반환해야 합니다.
// Hook은 다음의 객체를 반환합니다:

// values: 폼 필드의 값들을 저장하는 객체
// errors: 유효성 검증에서 발생한 오류들을 저장하는 객체
// isSubmitting: 폼이 제출되었는지 여부를 나타내는 상태값
// onChange: 폼 필드 값이 변경될 때 호출되는 이벤트 핸들러
// handleSubmit: 폼이 제출될 때 호출되는 이벤트 핸들러
