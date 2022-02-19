import { useState } from 'react';

export const useForm = ({ initialValues, validate, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const inputName = e.target.name;
    switch (inputName) {
      case 'account': {
        setValues({ ...values, account: e.target.value });
        break;
      }
      case 'password': {
        setValues({ ...values, password: e.target.value });
        break;
      }
      case 'rememberMe': {
        setValues({ ...values, rememberMe: e.target.checked });
        break;
      }
      default: {
        throw Error('Other issues');
      }
    }
  };

  const handleSubmit = () => {
    const validationObj = validate(values)
    setErrors(validationObj)
    const isValidated = Object.keys(validationObj).length === 0
    if(isValidated){
      onSubmit(values)
      setValues(initialValues)
    } 
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
