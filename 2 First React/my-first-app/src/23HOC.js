import React, { Component } from 'react';

import ArmyMan1 from './23HOCArm1';

import ArmyMan2 from './23HocArm2';

// export default class Student extends Component {
//   render() {
//     return <div><ArmyMan1/><ArmyMan2/></div>;
//   }
// }

export default class Student extends Component {
    render() {
      return <div><ArmyMan1 camp='120'/><ArmyMan2 camp='123'/></div>;
    }
  }


