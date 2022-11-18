import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { GoMailRead } from "react-icons/go";
import "../ContactBarAdress/ContactBarAdres.scss"
import { settings } from "../../../../../utils/settings";

const ContactBarEmail = () => {
    return (
        <div>
            <Row>
                <Col className='contactadres'>
                    <h2><GoMailRead /></h2>
                    <b>Email</b>
                    <p>{settings.email}</p>
                </Col>
            </Row>
        </div>
    )
}

export default ContactBarEmail