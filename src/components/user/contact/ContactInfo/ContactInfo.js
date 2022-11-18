import React from 'react'
import { Col, Container } from 'react-bootstrap'
import "./ContactInfo.scss"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <Container className='contactInfoBorder'>
            <Col>
                <h2>GET IN TOUCH</h2>
                <p>
                    <b>
                        We can ensure reliability. low cast fares and most important, with safety and confort in mind
                    </b>
                </p>
                <p>
                    We can ensure reliability. low cast fares and most important, with safety and confort in mind
                </p>
                <h1 className='spacer'><FaFacebookSquare /><FaInstagramSquare /><FaTwitterSquare /><FaWhatsappSquare /></h1>

            </Col>
        </Container>
    )
}

export default ContactInfo