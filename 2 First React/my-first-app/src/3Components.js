
// function Student(){
//     return <h1>Hi kashyap</h1>;
// }  OR

// const Student = () => {
//     return <h1>Hi kashyap</h1>;    
// }

// function Student(pro){
//     return <h1>Hi {pro.name}</h1>;
// }  OR

// const Student = (props) => {
//     return <h1>Hi kashyap {props.name}</h1>;    
// }

// import React, {Component} from "react";
// class Student extends Component{
//     render(){
//         return <h1>Hi KP</h1>
//     }
// }

import React, {Component} from "react";
class Student extends Component{
    render(){
        return <h1>Hi KP {this.props.name} {this.props.age}</h1>
    }
}


export default Student