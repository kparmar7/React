import React, {Component} from "react";
import pt from "prop-types";

// https://www.npmjs.com/package/prop-types    official website

class Student extends Component{
    render(){
        return <h1>Hi KP {this.props.name} {this.props.age} {this.props.address} {this.props.children}</h1>
    }
}

Student.propTypes = {
    name : pt.string.isRequired,
    age : pt.number,
}

Student.defaultProps = {
    address : "Hyderabad"
}

export default Student;