import React from "react";
import { useField } from "formik";
import "./CheckoutField.scss";

const CheckoutField = ({ name, label, ...rest }) => {
  const [field, fieldState] = useField(name);

  return (
    <div className="field-wrapper">
      <label className={"field-label"}>
        {label}
        <input {...field} {...rest} className={"field-input"} />
        {fieldState.error && fieldState.touched && (
          <span className={"error-text"}>{fieldState.error}</span>
        )}
      </label>
    </div>
  );
};

export default CheckoutField;
