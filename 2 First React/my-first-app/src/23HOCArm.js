// import React, { Component } from 'react';

// const Army = (Men, shots) => {
//     console.log('123');
//   class NewMan extends Component {
//     state = {
//         gunShots: 0,
//     }
//     handleGunShots = () =>{
//         this.setState({gunShots: this.state.gunShots+shots})
//     } 
//     render(){
//         return <Men hocgunname='AK47' hocgunshots={this.state.gunShots} hocHnadler={this.handleGunShots}/>;
//     }
//   }
//   return NewMan;
// };

// export default Army;

//================
import React, { Component } from 'react';

const Army = (Men, shots) => {
    console.log('123');
  class NewMan extends Component {
    state = {
        gunShots: 0,
    }
    handleGunShots = () =>{
        this.setState({gunShots: this.state.gunShots+shots})
    } 
    render(){
        return <Men hocgunname='AK47' hocgunshots={this.state.gunShots} hocHnadler={this.handleGunShots} {...this.props}/>;
    }
  }
  return NewMan;
};

export default Army;