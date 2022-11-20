import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactMessage from './ContactMessage'

const ContactMessages = (props) => {
    const { messages } = props

    return (
        <Container>
            <Row className='g-5'>
                {messages.map((message, index) =>
                    <Col md={12} key={index} >
                        <ContactMessage message={message} />
                    </Col>
                )
                }

            </Row>
        </Container>
    )
}

export default ContactMessages