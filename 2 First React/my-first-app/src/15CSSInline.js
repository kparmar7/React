import React, { Component } from 'react'

// export default class Student extends Component {
//     render() {
//         const btnStyle ={
//             color:'red',
//             backgroundColor: 'yellow',
//         }
//         return (
//             <div>
//                 <button style={btnStyle}>Click Me</button>
//             </div>
//         )
//     }
// }

// export default class Student extends Component {
//     render() {
//         const btnStyle1 ={
//             color:'red',
//         }
//         const btnStyle2 ={
//             backgroundColor: 'yellow',
//         }
//         return (
//             <div>
//                 <button style={{...btnStyle1, ...btnStyle2, ...{fontSize:"200px"}}}>Click Me</button>
//             </div>
//         )
//     }
// }

export default class Student extends Component {
    state = {
        change: false,
    }

    hancleClick = () => {
        this.setState({change:true});
        document.getElementById('button').innerHTML = 'Cliked';
    }
    render() {
        const btnStyle1 ={
            color:'red',
        }
        if(this.state.change){
            btnStyle1.color = 'green';
        }
        
        return (
            <div>
                <button id='button' onClick={this.hancleClick} style={btnStyle1}>Click Me</button>
            </div>
        )
    }
}