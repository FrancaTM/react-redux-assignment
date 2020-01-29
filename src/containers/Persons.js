import React, { Component } from "react";

import AddPerson from "../components/AddPerson/AddPerson";
import Person from "../components/Person/Person";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdded} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDeleted(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdded: (name, age) =>
      dispatch({
        type: actionTypes.PERSON_ADDED,
        personData: { name: name, age: age }
      }),
    onPersonDeleted: personId =>
      dispatch({ type: actionTypes.PERSON_DELETED, personId: personId })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
