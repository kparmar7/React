
import React, { Component } from 'react';

class Student extends Component{

    constructor(prp){
        super(prp);
        this.state = {
            name : "",
            age : this.props.age,
            address : "Surat",
        }
    }
    
    hancleClick = () => {                         
        console.log("button is Clicked" ,this );  
        this.setState({age : "Baja", address : "Bangalore"});
        // this.setState({address : "Bangalore"});
    }    //--------OR-------

    // hancleClick = () => {                         
    //     console.log("button is Clicked" ,this );  
    //     this.setState(
    //         function(state, prop){
    //             console.log(state, prop);
    //         }
    //     );
    // } ----------OR------

    // hancleClick = () => {                         
    //     console.log("button is Clicked" ,this );  
    //     this.setState(
    //         (state, prop) => {
    //             console.log(state, prop);
    //         }
    //     );
    // }


    render() {
        return (
             <>
                 <h1>Hellow Kashyap !!</h1>
                 <button onClick={this.hancleClick}>Click Me</button>
                 <h1>Name:  {this.props.name}</h1>
                 <h1>age:  {this.state.age}</h1>
                 <h1>Address:  {this.state.address}</h1>
             </>
        );
    }
}

export default Student;