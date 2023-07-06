import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Lifecycle'
        }
        console.log('Constructor');
    }


    componentDidMount = () => {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    shouldComponentUpdate = (nextProps, nextState) => {
      console.log('shouldComponentUpdate');
      return false;
    }
    


    render() {
        console.log('Render');
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={()=>this.setState({title : 'Lifecycle updated'})}>Click</button>
            </div>
        )
    }
}

export default Lifecycle