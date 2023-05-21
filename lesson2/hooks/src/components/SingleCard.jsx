import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col"
const SingleCard = ({ podcast }) => {
    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={podcast.thumbnail} />
                    <Card.Body>
                        <Card.Title>{podcast.title}</Card.Title>
                        <Card.Text>
                            {podcast.description}
                        </Card.Text>
                        <Button variant="primary">{podcast.author}</Button>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}

export default SingleCard