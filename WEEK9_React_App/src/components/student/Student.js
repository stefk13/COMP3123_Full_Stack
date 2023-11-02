import React, {Component} from "react"
export default class Student extends Component{

    constructor(state){
        super(state)
        this.state ={
            fnm:"Stefan"
        }
    }

    render(){
        return(
            <h1>Student of {this.props.college}</h1>
        )
    }

}

