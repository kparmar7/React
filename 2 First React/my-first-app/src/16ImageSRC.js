import React, { Component } from 'react'
import pic1 from './download2.jpeg'
import pic2 from './image2/download.jpeg'
export default class Student extends Component {
    render() {
        return (
            <div>
                <img src={pic1} alt='ROSE_PIC'/> <br></br>
                <img src={pic2} alt='ROSE_PIC'/>
            </div>
        )
    }
}
