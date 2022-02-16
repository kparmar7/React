import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL + '/download.jpeg'} alt='ROSE_PIC'/> <br></br>
                <img src={process.env.PUBLIC_URL + 'image1/download.jpeg'} alt='ROSE_PIC'/>
            </div>
        )
    }
}
