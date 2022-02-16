import React, {Component} from "react";

// class App extends Component{
//     render(){
//         return (
//         <div>
//             <h1>Hellow GeekyShows</h1>
//             <h1>Hellow GeekyShows</h1>
//             <h1>Hellow GeekyShows</h1>
//         </div>    
//         );
//     }
// }     This code contains a DIV tag , which is not a recommonded approach

class App extends Component{
    render(){
        return (
        // <React.Fragment></React.Fragment> can be used  with id or without id
        // <React.Fragment key={}></React.Fragment> 
        <>  
            <h1>Hellow GeekyShows</h1>
            <h1>Hellow GeekyShows</h1>
            <h1>Hellow GeekyShows</h1>
        </>    
        );
    }
}

export default App