import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { Events } from './components/Events';
import { PersonList } from './components/PersonList'

class App extends Component {

  onGreet() {
    alert("Hello!");
  }
  
  render() {

    const user = {
      name: "Colin",
      age: 27,
      hobbies: [
        'Hockey',
        'Climbing',
        'Coding'
      ]
    };

    const navLinks = {
      home: {
          label: "HomeLink",
          url: "/"
      },
      about: {
          label: "AboutPage",
          url: "/about"
      },
      faq: {
          label: "FAQs",
          url: "/faq"
      }
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header navLinks={navLinks} />
        <Home user={user} helloWorld={"Hello World"} />
        <hr />
        <Events user={user} greet={this.onGreet} />
        <hr/>
        <PersonList />
      </div>
    );
  }
}

export default App;
