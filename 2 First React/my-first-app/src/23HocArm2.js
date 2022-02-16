// import React, { Component } from 'react';
// import Army from "./23HOCArm";


// class ArmyMan2 extends Component {
//     state = {
//         gunShots: 0,
//     }
//     handleGunShots = () =>{
//         this.setState({gunShots: this.state.gunShots+1})
//     } 
//     render() {
//       return (<div>
//           <h3 onMouseOver={this.handleGunShots}>Army Man 2 : {this.state.gunShots}</h3>
//           <h4>{this.props.hocgunname} ::::</h4>
//       </div>);
//     }
//   }

//   export default Army(ArmyMan2);

//-------
import React, { Component } from 'react';
import Army from "./23HOCArm";


class ArmyMan2 extends Component {
    render() {
      return (<div>
          <h3 onMouseOver={this.props.hocHnadler}>Army Man 2 : {this.props.hocgunshots}</h3>
          <h4>{this.props.hocgunname} :::: {this.props.camp}</h4>
      </div>);
    }
  }

  export default Army(ArmyMan2,10);