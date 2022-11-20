import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import "./ProfileForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "../../../../utils/functions/swal";
import {
  updateUserByAdmin,
  updateUserByEmployee,
} from "../../../../api/user-service";
import InputMask from "react-input-mask-next";

import { getDate } from "../../../../utils/functions/date-time";
import { useSelector } from "react-redux";

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const isUserLogin = useSelector((state) => state.auth.isUserLogin);

  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
    phone: user.phone,
    birthDate: user.birthDate,
    email: user.email,
    password: user.password,
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
    console.log(values);
    setLoading(true);
    /* console.log("values =" + values); */
    try {
      await updateUserByAdmin(98, values);
      console.log(values);
      /* console.log("values =" + values); */
      toast("Your profile was updated successfully!", "successfully");
    } catch (err) {
      toast(err.resp.data.message, "error");
    } finally {
      setLoading(false);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  useEffect(() => {
    setLoading();
  }, []);
  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit} className="profile-form">
        <h2>User Information</h2>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("firstName")}
            isInvalid={formik.touched.firstName && formik.errors.firstName}
            isValid={formik.touched.firstName && !formik.errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("lastName")}
            isInvalid={formik.touched.lastName && formik.errors.lastName}
            isValid={formik.touched.lastName && !formik.errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("address")}
            isInvalid={formik.touched.address && formik.errors.address}
            isValid={formik.touched.address && !formik.errors.address}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.address}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
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
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            max={getDate(formik.values.birthDate)}
            {...formik.getFieldProps("birthDate")}
            isInvalid={formik.touched.birthDate && formik.errors.birthDate}
            isValid={formik.touched.birthDate && !formik.errors.birthDate}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.birthDate}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
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
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Button
            className="mb-3"
            variant="primary"
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: "#e9f548",
              color: "#005555",
              //padding: ".5rem 8.5rem .5rem 8.5rem",
            }}
          >
            {loading && <Spinner animation="border" size="sm" />}
            Update
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default ProfileForm;
