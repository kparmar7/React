import React, { Component } from 'react';


class Student extends Component{

    state = {
        gender : "Male",
        address : this.props.address,
    }
    
    /*
    hancleClick = (gender) => {                          
        console.log("button is Clicked" ,gender );          
    }

    hancleClickArg = () => {
        this.hancleClick(this.state.gender);
    }*/  //----OR----1

    hancleClick = (gender, e) => {                          
        console.log("button is Clicked" ,gender );  
        console.log("button is Clicked" ,e );  
    }

    // hancleClickArg = (e) => {
    //     this.hancleClick(this.state.gender, e);
    // } //----OR----2


    render() {
        return (
             <>
                 <h1>Hellow Kashyap !! gender {this.state.gender}</h1>
                 {/* <button onClick={this.hancleClickArg}>Click Me</button>     ----OR----3   */}
                 {/* <button onClick={(e) => {this.hancleClick(this.state.gender, e)}}>Click Me</button>  ----OR----4  */}
                 <button onClick={this.hancleClick.bind(this, this.state.gender)}>Click Me</button>
             </>
        );
    }
}


export default Student;