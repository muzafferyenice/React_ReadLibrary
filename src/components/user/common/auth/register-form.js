import React, { useState } from "react";
import InputMask from "react-input-mask-next";
import { Form, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import PasswordInput from "../../../common/password-input/password-input";
import { register } from "../../../../api/user-service";
import { toast } from "../../../../utils/functions/swal";
import { getDate } from "../../../../utils/functions/date-time";

const RegisterForm = ({ setDefaultTab }) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    birthDate: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Please enter your first name")
      .min(2, "Must be at least 2 character")
      .max(30, "Must be a maximum of 30 characters "),
    lastName: Yup.string().required("Please enter your last name"),
    address: Yup.string()
      .required("Please enter your address")
      .min(10, "Must be at least 10 character")
      .max(100, "Must be a maximum of 100 characters "),
    phone: Yup.string().required(),
    birthDate: Yup.string().required("Please enter your birthDate"),
    email: Yup.string()
      .email()
      .required("Please enter your email")
      .min(10, "Must be at least 10 character")
      .max(80, "Must be a maximum of 80 characters "),
    password: Yup.string()
      .required("Please enter your password")
      .min(8, "Must be at least 8 characters")
      .max(15, "Must be a maximum of 100 characters ")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await register(values);
      console.log(values);
      toast("You're registered successfully!", "success");
      formik.resetForm();
      setDefaultTab("login");
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setLoading(false);
    }
    console.log("firstName = " + values.firstName);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="First Name"
          {...formik.getFieldProps("firstName")}
          isInvalid={formik.touched.firstName && formik.errors.firstName}
          isValid={formik.touched.firstName && !formik.errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Last Name"
          {...formik.getFieldProps("lastName")}
          isInvalid={formik.touched.lastName && formik.errors.lastName}
          isValid={formik.touched.lastName && !formik.errors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Address"
          {...formik.getFieldProps("address")}
          isInvalid={formik.touched.address && formik.errors.address}
          isValid={formik.touched.address && !formik.errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.address}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Phone"
          as={InputMask}
          mask="(999) 999-9999"
          {...formik.getFieldProps("phone")}
          isInvalid={formik.touched.phone && formik.errors.phone}
          isValid={formik.touched.phone && !formik.errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.phone}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="date"
          placeholder="Birth Date"
          {...formik.getFieldProps("birthDate")}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.birthDate}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <PasswordInput
          {...formik.getFieldProps("password")}
          isInvalid={formik.touched.password && formik.errors.password}
          isValid={formik.touched.password && !formik.errors.password}
          error={formik.errors.password}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading && <Spinner animation="border" size="sm" />} Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
