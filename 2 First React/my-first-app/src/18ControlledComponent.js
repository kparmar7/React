// import React, { Component } from 'react'

// export default class Student extends Component {
//     render() {
//         return (
//             <div>
//                 <form>
//                     <h1>Controlled by React</h1>
//                     <input type="text" value="Parmar"/>
//                     <input type="text" defaultValue="Parmar"/>
//                 </form>
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// export default class Student extends Component {
//     state = {
//         value: "parmar", 
//     }

//     handlechange = (event) =>{
//         console.log(event.target.value);
//         this.setState({ value:event.target.value })
//     }

//     render() {
//         return (
//             <div>
//                 <form>
//                     <h1>Controlled by React</h1>
//                     {/* <input type="text" value={this.state.value}/> */}
//                     <input type="text" value={this.state.value} onChange={this.handlechange}/>
//                     <input type="text" defaultValue={this.state.value}/>
//                 </form>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'

export default class Student extends Component {
    state = {
        name: "parmar", 
        password: 'password'
    }

    handlechange = (event) =>{
        console.log(event.target.value);
        this.setState({ [event.target.name]:event.target.value })
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Controlled by React</h1>
                    <input type="text" name='name' value={this.state.name} onChange={this.handlechange}/>
                    <input type="text" name='password' value={this.state.password} onChange={this.handlechange}/>
                </form>
            </div>
        )
    }
}