import React, { Component } from 'react'

// short cut 'rcc'

class Guest extends Component {
    render() {
        return (
            <div>
                <h1>Hellow Guest !!</h1>
                <button >Sign In !!</button>
                <button >Register !!</button>
            </div>
        )
    }
}


class User extends Component {
    render() {
        return (
            <div>
                <h1>Hellow User !!</h1>
                <button >Log Out !!</button>
            </div>
        )
    }
}

class Student extends Component {
    render() {
        const isRegisterd = this.props.consumer;
        if (isRegisterd){
            return <User/>
        }
        return <Guest/>
    }
}

export default Student;

