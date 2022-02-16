import React, {Component} from "react";  //imrc, imrd shotcuts to use

// Directly inside CLASS without Constructor
// class Student extends Component{
//     state = {
//         gender : "Male",
//         address : this.props.address,
//     }
//     render(){
//         return <h1>Hi KP {this.props.name} {this.props.age} {this.state.address} {this.state.gender}</h1>
//     }
// }

// inside Constructor
class Student extends Component{
    
    constructor(prop){ //prop
        super(prop);

        this.state = {
            gender : "Male",
            address : this.props.address,  //props
        }
    }
    render(){
        return <h1>Hi KP {this.props.name} {this.props.age} {this.state.address} {this.state.gender}</h1>
    }
}

export default Student