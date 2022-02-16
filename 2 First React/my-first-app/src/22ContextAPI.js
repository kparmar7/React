// import React, { Component } from 'react';

// class App extends Component {
//     render() {
//         return (
//             <>
//                 <h1>App</h1>
//                 <div>{this.props.name}</div>
//             </>);
//     }
// }



// class Guest extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Guest</h1>
//                 <App name={this.props.name}/>
//                 <MyContext.Consumer>
//                     {data => data}
//                 </MyContext.Consumer>
//             </>);
//     }
// }

// class User extends Component {
//     render() {
//         return (
//             <>
//                 <h1>User</h1>
//                 <Guest name={this.props.name}/>
//             </>);
//     }
// }


// const MyContext = React.createContext();
// export default class Student extends Component {
//     state ={
//         name:"kashyap",
//         age:28
//     }
//   render() {
//     return (
//         <>
//             <h1>Student</h1>
//             <User name={this.state.name}/>
//             <MyContext.Provider value={this.state.age}>
//                 <User />
//             </MyContext.Provider>
//         </>);
//   }
// }



//---------------------------

import React, { Component } from 'react';

class Guest extends Component {
    render() {
        return (
            <>
                <h1>Guest</h1>
                <MyContext.Consumer>
                    {
                        ({data,handleClick})=>(<>
                            <h4>Name: {data.age}</h4>
                            <button onClick={handleClick}>Click Me</button>
                        </>)
                    }
                </MyContext.Consumer>
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
