// const Student = () =>{
//     return <h1>Hi There !!</h1>;
// }



// const AppStudent = () =>{
//     return (
//         <>
//             <Student/>
//             <Student/>
//             <Student/>
//         </>
//     );
// } -----------------------------------------------

// const Student = (prop) =>{
//     return <h1>Hi There !! {prop.name}</h1>;
// }

// const AppStudent = (pro) =>{
//     return (
//         <>
//             <Student name={pro.name}/>
//             <Student name="Kashyap"/>
//             <Student/>
//         </>
//     );
// }

//--------------------------
import React, {Component} from "react";
class Student extends Component{
    render(){
        return <h1>Hi There !! {this.props.name}</h1>;
    }
}

class AppStudent extends Component{
    render(){ 
        return(
        <>
            <Student name={this.props.name}/>
            <Student name="King Cobra"/>
            <Student/>
        </>);
    }
}
export default AppStudent; 