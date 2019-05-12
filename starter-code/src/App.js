import React, { Component } from "react";
import "./App.css";

import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  getRandomActor = () => {
    // add random actor
    let randomActor = contacts[Math.floor(Math.random() * contacts.length)];
    if (!this.state.contacts.includes(randomActor)) {
      contacts: this.state.contacts.push(randomActor);
    }

    this.setState({});
  };

  filterByName = () => {
    // filter by name
    let contactsByName = this.state.contacts.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    this.setState({
      contacts: contactsByName
    });
  };

  filterByPopularity = () => {
    // filter by popularity
    let contactsByPopularity = this.state.contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: contactsByPopularity
    });
  };

  removeActor = index => {
    let contactMinusOne = this.state.contacts;
    contactMinusOne.splice(index, 1);
    this.setState({
      contacts: contactMinusOne
    });
  };

  render() {
    return (
      <section className="my-section">
        <h1>IronContacts</h1>
        <p>Totals contacts displayed: {this.state.contacts.length}</p>
        <div className="filter-buttons">
          <button onClick={this.getRandomActor}>Add random contact</button>
          <button onClick={this.filterByName}>Sort by name</button>
          <button onClick={this.filterByPopularity}>Sort by popularity</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((actor, index) => (
              <tr>
                <td>
                  <img src={actor.pictureUrl} />
                </td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>
                <td>
                  <button onClick={() => this.removeActor(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default App;
