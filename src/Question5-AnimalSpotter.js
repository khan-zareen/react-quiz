/*
 * ============= Question 5 =============
 *
 * There are 2 bugs in the AnimalSpotter component and 1 bug in the
 * CounterButton component. When you click the "I spotted an animal" button the
 * number of animals spotted number should increase by 1.
 *
 * Find and fix the bugs in the AnimalSpotter and CounterButton components.
 */

import React, { Component } from "react";

class animalSpotter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animal-spotter">
        <p>Number of animals spotted: {this.state.animalSpotted}</p>
        <CounterButton handleClick={this.spotAnimal} />
      </div>
    );
  }
}

function CounterButton(props) {
  return (
    <button style={{ background: "lightseagreen", color: "white" }} onClick>
      I spotted an animal!
    </button>
  );
}

export default AnimalSpotter;
