import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import PasswordInput from "../../../common/password-input/password-input";
import {
  getUserAuthUser,
  getUserByIdAll,
  login,
} from "../../../../api/user-service";
import { toast } from "../../../../utils/functions/swal";
import secureLocalStorage from "react-secure-storage";
import { useDispatch } from "react-redux";
import { loginFailed, loginSuccess } from "../../../../store/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      console.log(values);
      const respAuth = await login(values);
      secureLocalStorage.setItem("token", respAuth.data.token);

      const respUser = await getUserAuthUser();
      console.log(respUser.data.id);

      const userAll = await getUserByIdAll(respUser.data.id);

      console.log(respUser);

      console.log(userAll);

      dispatch(loginSuccess(userAll.data));

      navigate("/user-information");
    } catch (err) {
      dispatch(loginFailed());
      toast(err.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" placeholder="Email">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" placeholder="Password">
        {/* <Form.Label>Password</Form.Label> */}
        <PasswordInput
          className="goz"
          {...formik.getFieldProps("password")}
          isInvalid={formik.touched.password && formik.errors.password}
          isValid={formik.touched.password && !formik.errors.password}
          error={formik.errors.password}
        />
      </Form.Group>
      <Button
        type="submit"
        disabled={loading}
        style={{
          backgroundColor: "#e9f548",
          color: "#005555",
          padding: ".5rem 8.5rem .5rem 8.5rem",
        }}
      >
        {loading && <Spinner animation="border" size="sm" />} Login
      </Button>
    </Form>
  );
};

export default LoginForm;
