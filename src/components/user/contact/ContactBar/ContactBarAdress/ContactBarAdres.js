import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { GrLocation } from "react-icons/gr";
import "./ContactBarAdres.scss"
import { settings } from "../../../../../utils/settings";

const ContactBarAdres = () => {
    return (
        <div>
            <Row>
                <Col className='contactadres'>
                    <h2><GrLocation /></h2>
                    <b>Address</b>
                    <p>{settings.address}</p>
                </Col>
            </Row>
        </div>
    )
}

export default ContactBarAdres