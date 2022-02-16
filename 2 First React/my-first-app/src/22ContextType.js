import React, { Component } from 'react';

class Guest extends Component {
    static contextType = MyContext;
    render() {
        return (
            <>
                <h1>Guest</h1>
                <h4>Name: {this.contextType.data.age}</h4>
                <button onClick={this.contextType.handleClick}>Click Me</button>
            </>);
    }
}

class User extends Component {
    render() {
        return (
            <>
                <h1>User</h1>
                <Guest/>
            </>);
    }
}


const MyContext = React.createContext();
export default class Student extends Component {
    state ={
        name:"kashyap",
        age:28
    };
    handleClickContext = () =>{
        this.setState({age: this.state.age+1})
    };
    render() {
      const contextValue = {
        data: this.state,
        handleClick: this.handleClickContext
      };
    return (
        <>
            <h1>Student</h1>
            <MyContext.Provider value={contextValue}>
                <Guest />
            </MyContext.Provider>
        </>);
  }
}
