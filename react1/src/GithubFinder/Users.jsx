import React, { Component } from 'react'
import UserCard from "./UserCard"
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
export class Users extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            {
              this.props.githubUsers.map((item, index) => {
                return <UserCard User={item} key={index} />
              })
            }
          </Row>
        </Container>

      </>
    )
  }
}

export default Users