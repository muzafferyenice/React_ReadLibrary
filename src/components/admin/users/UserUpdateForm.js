import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask-next";
import { Form, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { question, toast } from "../../../utils/functions/swal";
import {
  deleteUserById,
  getUserById,
  updateUserByAdmin,
} from "../../../api/user-service";
import { useNavigate, useParams } from "react-router-dom";
import PasswordInput from "../../common/password-input/password-input";

const UserUpdateForm = () => {
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    score: 0,
    address: "",
    phone: "",
    email: "",
    birthDate: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter  first name"),
    lastName: Yup.string().required("Please enter  last name"),
    address: Yup.string().required("Please enter  address"),
    score: Yup.number().required("Please enter score"),
    phone: Yup.string().required("Please enter phone"),
    birthDate: Yup.string().required("Please enter  birthDate"),
    email: Yup.string().email().required("Please enter  email"),
    password: Yup.string()
      .required("Please enter your password")
      .min(8, "Must be at least 8 characters")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await updateUserByAdmin(userId, values);
      toast("updated successfully!", "success");
      formik.resetForm();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const removeUser = async () => {
    setDeleting(true);
    try {
      await deleteUserById(userId);
      toast("User was deleted", "success");
      navigate(-1);
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setDeleting(false);
    }
  };

  const handleDelete = () => {
    question(
      "Are you sure to delete?",
      "You won't be able to revert this!"
    ).then((result) => {
      if (result.isConfirmed) {
        removeUser();
      }
    });
  };

  const getUserInfo = async () => {
    setLoading(true);

    try {
      const resp = await getUserById(88); //getirmiyuor cors hatasi
      console.log(userId);
      console.log(resp.data);

      /*   const list = Object.entries(resp.data); */
      // setUser(user);
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserInfo(userId);
  }, []);

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
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
        <Form.Label>Score</Form.Label>
        <Form.Control
          type="number"
          {...formik.getFieldProps("score")}
          isInvalid={formik.touched.score && formik.errors.score}
          isValid={formik.touched.score && !formik.errors.score}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.score}
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
          type="text"
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
        <PasswordInput
          {...formik.getFieldProps("password")}
          isInvalid={formik.touched.password && formik.errors.password}
          isValid={formik.touched.password && !formik.errors.password}
          error={formik.errors.password}
        />
      </Form.Group>
      <Button
        variant="danger"
        type="submit"
        disabled={deleting}
        onClick={handleDelete}
      >
        {deleting && <Spinner animation="border" size="sm" />} Delete
      </Button>
      <Button variant="primary" type="submit" disabled={loading}>
        {loading && <Spinner animation="border" size="sm" />} Update
      </Button>
    </Form>
  );
};

export default UserUpdateForm;
