import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type props = {
  contacts: string[],
}

class ContactList extends Component<props> {
  render() {
    const people = this.props.contacts;
    return <ol>
      {people.map((people, index) => (
        <li key={index}>{people.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Michael'},
          { name: 'Ryan'},
          { name: 'Tyler'}
        ]}/>
        <ContactList contacts={[
          { name: 'Jeff'},
          { name: 'Ryan'},
          { name: 'Tyler'}
        ]}/>
      </div>
    );
  }
}

export default App;
