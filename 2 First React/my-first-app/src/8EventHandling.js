import React, { Component } from 'react';

// https://reactjs.org/docs/events.html   official website

/*
class Student extends Component{

    constructor(prp){
        super(prp);
        this.hancleClick = this.hancleClick.bind(this);
    }
    // hancleClick(e){
    //     e.preventDefault();
    //     console.log("button is Clicked" ,this );
    // } 
    hancleClick(){
        console.log("button is Clicked" ,this );
    } //  -------OR------- always use below one

    
    
    // hancleClick = () => {                          // always use arrow function instead of normal function
    //     console.log("button is Clicked" ,this );  //in normal function THIS value is undefined, and in arrow function THIS value is Student object
    // }


    render() {
        return (
             <>
                 <h1>Hellow Kashyap !!</h1>
                 <button onClick={this.hancleClick}>Click Me</button>
             </>
        );
    }
}*/

/*
function Student() {
    // function hancleClick(){
    //     console.log("button is Clicked" );
    // } ------OR

    const hancleClick = () => {
        console.log("button is Clicked" );
    } 

    return (
            <>
                <h1>Hellow Kashyap !!</h1>
                <button onClick={hancleClick}>Click Me</button>
            </>
    );
}*/

function Student() {
    // function hancleClick(){
    //     console.log("button is Clicked" );
    // } ------OR

    const hancleClick = (e) => {
        e.preventDefault();
        console.log("button is Clicked" );
    } 

    return (
            <>
                <h1>Hellow Kashyap !!</h1>
                <button onClick={hancleClick}>Click Me</button>
            </>
    );
}

export default Student;