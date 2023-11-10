import React, { Component } from 'react'

export default class Hello extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            name: 'NO Name'
        }
    }

    onSayHelloClick = (e) => {
        e.preventDefault()
        alert('Hello : ' + e.target.value)
    }

    onValueChanged = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    render() {
    return (
      <div>
        <h1>Data Entry</h1>
        <input 
            type='text' 
            name='txtName' 
            onChange={e => this.onValueChanged(e)}
            placeholder='Enter Your Name' />
            <h3>{this.state.name}</h3>
        <button onClick={e => this.onSayHelloClick(e)} value="TEST">Click Me</button>
      </div>
    )
  }
}
