import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Example extends Component {
  render() {
    return (
      <div>
        <h1>Title : {this.props.title}</h1>
        <p>Age : {this.props.age}</p>
      </div>
    )
  }
}

Example.propTypes = {
    title : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired
}


Example.defaultProps = {
    title :'Default title',
    age : 20
}

export default Example