import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
export class SearchForm extends Component {

    constructor() {
        super()
        this.state = {
            query: ''
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        // console.log(this.state.query);
        this.props.searchUser(this.state.query)
        this.setState({query : ''})
    }


    render() {
        return (
            <>
                <Container className='mt-5'>
                    <Form className='d-flex justify-content-center align-items-center' onSubmit={this.submitForm}>
                        <Form.Group controlId="formBasicEmail" className='m-2'>
                            <Form.Control type="text" placeholder="Search user name" value={this.state.query} onChange={(e)=>this.setState({query : e.target.value})} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='m-2'>
                            Submit
                        </Button>
                    </Form>
                </Container>

            </>
        )
    }
}

export default SearchForm