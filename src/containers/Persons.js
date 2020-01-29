import React, { Component } from "react";

import AddPerson from "../components/AddPerson/AddPerson";
import Person from "../components/Person/Person";

class Persons extends Component {
  state = { persons: [] };

  personAddedHandler = () => {
    const newPerson = {
      id: Math.random(), // not really unique
      name: "Túlio",
      age: Math.floor(Math.random() * 40)
    };

    this.setState(prevState => {
      return { persons: prevState.persons.concat(newPerson) };
    });
  };

  personDeleteHandler = personId => {
    this.setState(prevState => {
      return {
        persons: prevState.persons.filter(person => person.id !== personId)
      };
    });
  };

  render() {
    return (
      <div>
        <AddPerson personAdded={this.personAddedHandler} />
        {this.state.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.personDeleteHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

export default Persons;
