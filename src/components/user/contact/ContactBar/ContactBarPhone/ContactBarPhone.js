import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ImHeadphones } from "react-icons/im";
import "../ContactBarAdress/ContactBarAdres.scss"
import { settings } from "../../../../../utils/settings";

const ContactBarPhone = () => {
    return (
        <div>
            <Row>
                <Col className='contactadres'>
                    <h2><ImHeadphones /></h2>
                    <b>Phone</b>
                    <p>{settings.phone1}</p>
                </Col>
            </Row>
        </div>
    )
}

export default ContactBarPhone