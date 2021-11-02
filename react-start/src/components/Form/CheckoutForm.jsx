import React from "react";
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import CheckoutField from "./CheckoutField";
import actions from "../../redux/actions";
import { clearLocalStorage } from "../../localStorage/clearLocalStorage";
import "./CheckoutForm.scss";

const schema = Yup.object().shape({
  firstName: Yup.string().required("This field can not be empty"),
  lastName: Yup.string().required("This field can not be empty"),
  age: Yup.number()
    .min(14, "Your age must be at least 14 y.o")
    .required("This field can not be empty"),
  address: Yup.string().required("This field can not be empty"),
  mobile: Yup.string().required("This field can not be empty"),
});

const CheckoutForm = () => {
  return (
    <div className={"form-wrapper"}>
      <h3 className={"form-title"}>Checkout form</h3>
      <Form className={"form"}>
        <CheckoutField
          name={"firstName"}
          type="text"
          label={"First name"}
          placeholder={"Enter your first name"}
        />
        <CheckoutField
          name={"lastName"}
          type="text"
          label={"Last name"}
          placeholder={"Enter your second name"}
        />
        <CheckoutField
          name={"age"}
          type="number"
          label={"Age"}
          placeholder={"Enter your age"}
        />
        <CheckoutField
          name={"address"}
          type="text"
          label={"Address"}
          placeholder={"Shipment address"}
        />
        <CheckoutField
          name={"mobile"}
          type="tel"
          label={"Mobile number"}
          placeholder={"Enter your phone number"}
        />
        <button type={"submit"} className={"btn"}>
          Chekout
        </button>
      </Form>
    </div>
  );
};

const checkoutFormWithFormik = withFormik({
  mapPropsToValues: () => ({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    mobile: "",
  }),
  validationSchema: schema,
  handleSubmit: (values, formik) => {
    const { dispatch } = formik.props;
    console.log(localStorage.getItem("cart"));
    console.log(values);
    clearLocalStorage("cart");
    dispatch(actions.clearCart());
  },
})(CheckoutForm);

export default connect()(checkoutFormWithFormik);
