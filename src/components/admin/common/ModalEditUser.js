import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { toast } from "../../../utils/functions/swal";
import {
  Modal,
  Button,
  Container,
  Card,
  Form,
  Spinner,
  InputGroup,
} from "react-bootstrap";
import { findAllLoansByUserId, updateLoan } from "../../../api/loan-service";
import { useNavigate, useParams } from "react-router-dom";
import {
  combineDateAndTime,
  getDate,
  getTime,
} from "../../../utils/functions/date-time";

const ModalEditUser = (props) => {
  const [loading, setLoading] = useState(false);
  const { onHide, show, id } = props;
  const [loans, setLoans] = useState([]);
  const [users, setUsers] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const { userId } = useParams();
  /*  [initialValues, setInitialValues] = useState( */

  const initialValues = {
    notes: id.notes,
    expireDate: getDate(id.expireDate),
    expireTime: getTime(id.expireDate),
    returnDate: getDate(id.returnDate),
    returnTime: getTime(id.returnDate),
  };
  const validationSchema = Yup.object({
    notes: Yup.string().required("Please enter notes"),
    expireDate: Yup.string().required("Please enter the expire date"),
    expireTime: Yup.string().required("Please enter the expire time"),
    returnDate: Yup.string(),
    returnTime: Yup.string(),
  });

  /*   console.log(users[0].id); */
  const onSubmit = async (values) => {
    setLoading(true);

    const { notes, expireDate, expireTime, returnDate, returnTime } = values;
    try {
      const dto = {
        notes,
        expireDate: combineDateAndTime(expireDate, expireTime),
        returnDate: combineDateAndTime(returnDate, returnTime),
      };

      const resp = await updateLoan(dto, id);
      console.log(resp.data);
      setLoans(resp.data);
      onHide();
      toast("Loan Uptated successfully", "success");
    } catch (err) {
      console.log(err);
      toast("An error occured, please try later");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const loadData = async () => {
    setLoading(true);

    try {
      const respLoan = await findAllLoansByUserId(userId);
      console.log(respLoan);
      setUsers(respLoan.data);

      const { notes, expireDate, returnDate } = respLoan.data;

      /*   const dto = {
        notes,
        expireDate: getDate2(id.expireDate),
        expireTime: getTime(expireDate),
        returnDate: getDate2(id.returnDate),
        returnTime: getTime(returnDate),
      };

      setInitialValues(dto); */
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    console.log(users);
  }, []);

  return (
    <Modal {...props} size="lg">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Complete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="summary">
            <Card>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    {...formik.getFieldProps("notes")}
                    isInvalid={!!formik.errors.notes}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Expire Date</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="date"
                      placeholder="Expire Date"
                      size="sm"
                      {...formik.getFieldProps("expireDate")}
                      isInvalid={
                        formik.touched.expireDate && formik.errors.expireDate
                      }
                    />
                    <Form.Control
                      type="time"
                      {...formik.getFieldProps("expireTime")}
                      isInvalid={
                        formik.touched.expireTime && formik.errors.expireTime
                      }
                    />
                  </InputGroup>

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.expireDate || formik.errors.expireTime}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Return Date</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="date"
                      placeholder="Return Date"
                      size="sm"
                      {...formik.getFieldProps("returnDate")}
                    />
                    <Form.Control
                      type="time"
                      {...formik.getFieldProps("returnTime")}
                    />
                  </InputGroup>
                </Form.Group>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading && <Spinner animation="border" size="sm" />} Save{" "}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default ModalEditUser;
