import React, { Component } from 'react'

// short cut 'rcc'

class Guest extends Component {
    render() {
        return (
            <div>
                <h1>Hellow Guest !!</h1>
                <button onClick={this.props.clickData}>Sign In !!</button>
                <button >Register !!</button>
            </div>
        )
    }
}


class User extends Component {
    render() {
        return (
            <div>
                <h1>Hellow {this.props.name} !!</h1>
                <button onClick={this.props.clickData}>Log Out !!</button>
            </div>
        )
    }
}

class Student extends Component {
    state = {
        isLoggedIn : false,
    }

    clickSignIn = () =>{
        this.setState({isLoggedIn : true});
    }

    clickLogOut = () => {
        this.setState({isLoggedIn : false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn){
            return <User name="Rahul" clickData={this.clickLogOut}/>;
        }else{
            return <Guest clickData={this.clickSignIn}/>;
        }
    }
}

export default Student;

