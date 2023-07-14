import { useCallback, useState } from "react";
import _ from "lodash";

const useForm = (initialState, validate, submitAction) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = useCallback(
    event => setValues({ ...values, [event.target.name]: event.target.value }),
    [values]
  );

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      setErrors(validate(values));
      if (_.isEmpty(validate(values))) {
        submitAction(values);
        setValues(initialState);
      }
    },
    [initialState, submitAction, validate, values]
  );

  const inputAttribute = name => ({
    name,
    value: values[name],
    onChange
  });

  return { values, errors, onSubmit, inputAttribute };
};

export default useForm;
