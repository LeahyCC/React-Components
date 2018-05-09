import React, { Component } from 'react';

export class Home extends Component {
    render() {
        var text = "text set in component"
        return(
            <div>
                <p>Home</p>
                <p>Your name is {this.props.user.name}</p>
                <p>Your age is {this.props.user.age}</p>
                <p>{text}</p>
                <p>User Object => helloWorld: {this.props.helloWorld}</p>
                <ul>
                    {this.props.user.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
                </ul>
            </div>
        );
    }
}
