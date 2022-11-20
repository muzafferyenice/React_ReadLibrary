import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
//home page books
const Books = (props) => {
    const { books } = props
    return (
        <>
            <Container>
                <Row className='g-5'>
                    {books.map((book, index) =>
                        <Col md={4} key={index} >
                            {book.name}
                        </Col>
                    )
                    }

                </Row>
            </Container>

        </>
    )
}

export default Books