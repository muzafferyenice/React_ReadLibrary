import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactBarAdres from '../../components/user/contact/ContactBar/ContactBarAdress/ContactBarAdres'
import ContactBarEmail from '../../components/user/contact/ContactBar/ContactBarEmail/ContactBarEmail'
import ContactBarPhone from '../../components/user/contact/ContactBar/ContactBarPhone/ContactBarPhone'
import ContactForm from '../../components/user/contact/ContactForm/ContactForm'
import ContactInfo from '../../components/user/contact/ContactInfo/ContactInfo'
import ContactMap from '../../components/user/contact/ContactMap/ContactMap'
import { getMessages } from "../../api/contact-service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactMessages from './Contact/ContactMessages'


const ContactPage = () => {
  const [messages, setmessages] = useState([]);


  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  const looadMessages = async (page) => {
    setLoading(true);
    try {
      const resp = await getMessages(page, perPage);
      setmessages(resp.data.content);
      setTotalRows(resp.data.totalElements);
      console.log(resp.data.content);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };





  const handlePageChange = (page) => {
    // Data table componenti 1 tabanlı, bizim api 0 tabanlı çalıştığı için 1 eksiltip gönderiyoruz
    looadMessages(page - 1);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    looadMessages(page - 1);
    setPerPage(newPerPage);
  };



  const handlePage = () => {
    navigate("/");
  };
  useEffect(() => {
    looadMessages();
  }, []);







  return (
    <>
      <Container>
        <Row>

          <Col><ContactBarAdres /></Col>
          <Col><ContactBarPhone /></Col>
          <Col><ContactBarEmail /></Col>
        </Row>
        <Row>
          <Col><ContactForm /></Col>
          <Col><ContactInfo /></Col>
        </Row>
        <Row>
          <Col><ContactMap /></Col>
        </Row>

        <div style={{ height: 30 }}></div>
        <Row>
          <Col>
            <ContactMessages messages={messages} />
          </Col>
        </Row>
      </Container>




    </>
  )
}

export default ContactPage