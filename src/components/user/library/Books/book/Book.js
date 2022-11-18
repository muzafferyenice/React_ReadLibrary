import React from 'react'
import { Card } from 'react-bootstrap'
import "./Book.scss"


const Book = () => {
  return (
    <Card className='bookCard' >
      <Card.Img variant="top" src="/assets/img/books/HarryPotter5.jpg" />
      <Card.Body >
        <Card.Title >Harry Potter And The Cursed Child</Card.Title>
        <Card.Text >
          John Tiffany & Jack Thorne
          <p>Scholastic</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Book