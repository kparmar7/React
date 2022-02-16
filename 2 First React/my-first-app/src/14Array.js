
import React, { Component } from 'react'
/*
export default class ArrayClass extends Component {
    render() {
        const arr=[10,20,30,40];
        return (
            <ul>
                <li>{arr[0]}</li>
                <li>{arr[1]}</li>
                <li>{arr[2]}</li>
                <li>{arr[3]}</li>
            </ul>
        )
    }
}
*/


// export default class ArrayClass extends Component {
//     render() {
//         const arr= [10,20,30,40];
//         const newArr = arr.map( num=> {
//             return <li>{num}</li>
//         });
//         return (
//             <ul>
//                 {newArr}
//             </ul>
//         )
//     }
// }


export default class ArrayClass extends Component {
    state = {
        users : [
            {id:101, name:"Rahul"},
            {id:102, name:"Raja"},
            {id:103, name:"Ram"},
        ],
    }

    render() {
        const useArr = this.state.users.map(user => {
            return <h1 key={user.id}>id : {user.id}name: {user.name}</h1>;
        });
        return (
            <div >
                {/* {this.state.users[0].id} */}
                {useArr}
            </div>
        )
    }
}
