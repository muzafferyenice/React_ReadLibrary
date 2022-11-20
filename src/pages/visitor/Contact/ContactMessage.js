import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactMessage = (props) => {
    const { message } = props
    return (
        <>
            <Row>
                <Col>{message.id}</Col>
                <Col>{message.name}</Col>
                <Col>{message.email}</Col>
                <Col>{message.subject}</Col>
                <Col>{message.body}</Col>
                <Col>{message.isread} </Col>
            </Row>

        </>
    )
}

export default ContactMessage