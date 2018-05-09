import React, { Component } from 'react';

export class Events extends Component {

    constructor(props) {
        super();
        this.state = {
            age: props.user.age,
            status: 0
        };
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        return(
            <div>
                <p>Your name is {this.props.user.name}</p>
                <p>Your age is {this.state.age}</p>
                <button onClick={() => this.onMakeOlder()}>Make me older!</button>
                <br />
                <button onClick={this.props.greet} >Greet</button>
            </div>
        )
    }
}
