import React from "react";

// every time you see an or do a ternary and put a condition for it.     {/*'♀' OR '♂' */}

//Initially there are 2 buttons: Already adpoted and Adopt pet. We need to show one or the other. Every time we have an either/or situation we need a ternary

// Now I need to change the adopt pet button so it changes the isAdopted status. First I need to write a function (in App.js ) where I can access isAdopted of pets and change that state.

class Pet extends React.Component {
  render() {
    const pet = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === "male" ? "♂ " : "♀ "}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={() => this.props.onAdoptPet(pet.id)}
              className="ui primary button"
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

//onClick we pass it an empty event so that it doesn't call the function that returns undefined

export default Pet;

// age:
// 3
// gender:
// "male"
// id:
// "2c902312-dfa3-446f-8b4b-5e115170d807"

// isAdopted:
// false
// name:
// "Teddy"
// type:
// "cat"
// weight:
// 1
