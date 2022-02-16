// import React, { Component } from 'react';

// export default class Student extends Component {
//     constructor(props){
//         super(props);

//         this.textInput = React.createRef();
//     }
//     componentDidMount = () =>{
//         // console.log(this.textInput);
//         // console.log(this.textInput.current);
//         this.textInput.current.focus();
//     }

//     render() {
//         return (
//         <div>
//             <form>
//                 Name: <input type="text"/>
//                 <br/>
//                 <br/>
//                 Password: <input type="text" ref={this.textInput}/>
//                 <br/>
//                 <br/>
//                 Address: <input type="text"/>
//             </form>
//         </div>);
//     }
// }


import React, { Component } from 'react';

export default class Student extends Component {
    constructor(props){
        super(props);

        this.state ={
            value : "",
        }


        this.textInput = React.createRef();
    }
    componentDidMount = () =>{
        // console.log(this.textInput);
        // console.log(this.textInput.current);
        this.textInput.current.focus();
    }

    handleSubmit = (ev) =>{
        ev.preventDefault();
        console.log(this.textInput);
        this.setState({value:this.textInput.current.value})
    }

    render() {
        return (
        <div>
            <h1>chekc this : {this.state.value}</h1>
            <form onSubmit={this.handleSubmit}>
                Input: <input type="text" ref={this.textInput}/>
                <input type="submit" value = "Submit"/>
            </form>
        </div>);
    }
}
