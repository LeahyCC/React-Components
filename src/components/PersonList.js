import React, { Component } from 'react';
import axios from 'axios';

export class PersonList extends Component {
  state = {
    persons: [],
    name: ""
  }

  handleChange = event => {
      this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
      event.preventDefault();

      const user = {
          name: this.state.name
      };

      axios.post('https://jsonplaceholder.typicode.com/users', { user })
        .then(res => {
            console.log(res);
            console.log(res.data)
        })
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

// componentWillMount -- Immediately before initial rendering
// componentDidmount -- Immediately after initial rendering
// componentWillReceiveProps -- When compoents receives new props
// shouldComponentUpdate -- Before rendering, after receiving new props or state
// componentWillUpdate -- Before rendering, after receiving new props or state
// componentDidUpdate -- After components updates are flushed to DOM
// componentWillUnmount -- Immediately before removing components from DOM

  render() {
    return (
    <div>
        <ul>
            { this.state.persons.map((person, index) => <li key={index}>{person.name}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
            <label>
                Person Name:
                <input type="text" name="name" onChange={this.handleChange}/>
                <button type="submit">Add</button>
            </label>
        </form>
    </div>
    )
  }
}