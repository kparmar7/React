// import React, { Component } from 'react';
// import Army from "./23HOCArm";


// class ArmyMan1 extends Component {
//     state = {
//         gunShots: 0,
//     }
//     handleGunShots = () =>{
//         this.setState({gunShots: this.state.gunShots+1})
//     } 
//     render() {
//       return (<div>
//           <h3 onMouseOver={this.handleGunShots}>Army Man 1 : {this.state.gunShots}</h3>
//           <h4>{this.props.hocgunname} ::::</h4>
//       </div>);
//     }
//   }

//   export default Army(ArmyMan1);
//--------------------------------
import React, { Component } from 'react';
import Army from "./23HOCArm";


class ArmyMan1 extends Component {
   
    render() {
      return (<div>
          <h3 onMouseOver={this.props.hocHnadler}>Army Man 1 : {this.props.hocgunshots}</h3>
          <h4>{this.props.hocgunname} :::: {this.props.camp}</h4>
      </div>);
    }
  }

  export default Army(ArmyMan1,20);