import React from 'react';
import {useField} from "formik";

const FormField = ({name, label, ...rest}) => {
  const [field, fieldState] = useField(name);

  return (
      <div className="field">
        <label className={"field__label"}>{label}
          <input {...field} {...rest} className={fieldState.error && fieldState.touched && "invalid"}/>
          {fieldState.error && fieldState.touched && <span className={"error-text"}>{fieldState.error}</span>}
        </label>
      </div>
  );
};

export default FormField;
