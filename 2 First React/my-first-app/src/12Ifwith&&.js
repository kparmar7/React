import React, { Component } from 'react'

// short cut 'rcc'


class User extends Component {
    render() {
        return (
            <div>
                <h1>Prime Member !!</h1>
            </div>
        )
    }
}

class Student extends Component {
    render() {
        const isPrime = this.props.primeMember;
        
        return(
            <>
                <h1>Welcome User</h1>
                {isPrime && <User/>}
            </>
        );
    }
}

export default Student;

