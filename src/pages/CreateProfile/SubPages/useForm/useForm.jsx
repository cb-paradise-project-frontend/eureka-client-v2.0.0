import { useState } from "react";

export default function useForm(config, initValues) {
  const formKeyArray = Object.keys(config);

  const initFormData = formKeyArray.reduce((obj, key) => ({
    ...obj,
    [key]: (initValues && initValues[key]) || '',
  }), {});

  const [formData, setFormData] = useState(initFormData);

  const getData = () => {
    const data = formKeyArray.reduce((obj, key) => ({
      ...obj,
      [key]: formData[key],
    }), {});

    return data;
  };

  const handleDataChange = (target) => (
    (input) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [target]: input,
      }));
    }
  );

  const findEmptyField = () => {
    const emptyField = formKeyArray.find((key) => !formData[key]);

    if (!emptyField) return false;

    return { field: emptyField, message: `${emptyField} is required.` };
  };

  const getErrorMessage = () => {
    const errorField = formKeyArray.find((key) => {
      const value = formData[key];
      const getError = config[key].getErrorMessage;

      return getError && getError(value);
    });

    if (!errorField) return false;

    const errorMessage = config[errorField].getErrorMessage(formData[errorField]);

    return { field: errorField, message: errorMessage };
  };

  const form = {};
  form.getData = getData;
  form.handleDataChange = handleDataChange;
  form.findEmptyField = findEmptyField;
  form.getErrorMessage = getErrorMessage;

  return form;
}
