import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col"
export class UserCard extends Component {
  render() {
    const { avatar_url, login } = this.props.User
    return (
      <>
        <Col lg={3} md={3} className='p-2'>
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img variant="top" src={avatar_url} />
            <Card.Body>
              <Card.Title>{login}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </>
    )
  }
}

export default UserCard