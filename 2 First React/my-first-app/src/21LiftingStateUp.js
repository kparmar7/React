import React, { Component } from 'react';

class User extends Component {
    state = {
        name:'Rahul',
    }

    render() {
        return (
            <>
            <Guest name={this.state.name}/>
            <Child name={this.state.name}/>
            </>);
    }
}

class Child extends Component {
    render() {
      return (<div>{this.props.name}</div>);
    }
}  


class Guest extends Component {
    render() {
      return (<div>{this.props.name}</div>);
    }
}  


export default class Student extends Component {
  render() {
    return (<div><User /></div>);
  }
}
