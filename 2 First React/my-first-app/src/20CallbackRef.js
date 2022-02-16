import React, { Component } from 'react';

export default class Student extends Component {
    constructor(){
        super();
        this.backRef = null;
        this.setBackRef = (element) =>{
            this.backRef = element;
        }
    }

    componentDidMount = () =>{
        if(this.backRef){
            this.backRef.focus();
        }
    }
    render() {
        return(
            <div>
                <form>
                    Name: <input type="text" />
                    Name: <input type="text" ref={this.setBackRef}/>
                    Name: <input type="text" />
                </form>
            </div>);
    }
}
