import React, { Component } from 'react'
import Styles from './15CSSExternal1.module.css'
import Style from './15CSSExternal2.module.css'

export default class Student extends Component {
    render() {
        return (
            <div>
                <button className={Styles.txt}>Click Me !!</button>
                <button className={Style.txt}>Click Me !!</button>
            </div>
        )
    }
}
