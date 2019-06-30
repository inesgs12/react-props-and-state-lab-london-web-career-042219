import React from "react";

import Pet from "./Pet";

//indefinite amount of pets will go in the pet browser

//we map over the pet props (objects) we want to go from an array of pet objects to an array of pet components <Pet /> and we need to pass it the object of pet to each individual component

//every time we map we want to make sure we give it a key, anything unique, it can be an id but it doesn't have to be.

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {" "}
        {this.props.pets.map(pet => (
          <Pet key={`pet-${pet.id}`} pet={pet} onAdoptPet={this.props.onAdoptPet} />
        ))}
      </div>
    );
  }
}

export default PetBrowser;
