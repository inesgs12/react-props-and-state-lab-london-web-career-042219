import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();
    //My pet state will get updated with whatever we search for. We need to change our pets array to whatever we get back from the fetch => onFindPetsClick()
    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onAdoptPet = petId => {
    //give me a new array that has:
    // - all of the same pets
    // - but the pet with a matching ID should be a copy with isAdopted set to true
    //map returns a copy of an array with some transformation
    // ternary says: give me a copy of this pet if the pet matches the id and spread operator all its properties except for isAdopted that we want to change to true

    const pets = this.state.pets.map(pet =>
      pet.id === petId ? { ...pet, isAdopted: true } : pet
    );

    // now that we have the new array of pets, we replace the old one.

    this.setState({ pets });
  };
  //onFindPetsClick should fetch pets and then update the state. BUT this depends on the filter (all, cats, dogs, or micropigs).
  onFindPetsClick = () => {
    const filter = this.state.filters.type;
    //I will either have to fetch ALL of the pets or I will have to fetch a specific type of pet. So, I add a ternary to see which url we are fetching from
    const url = filter === "all" ? "/api/pets" : `/api/pets?type=${filter}`;

    //Once I get the response back, I need to change the state of the pets array
    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({ pets: pets }));

    //When should we trigger this function? Let's take a look at the Filter Component to see what it the event. In Filters.js it is just a button. So we have to pass it down through Filters. In the rendering when I see the Filters component in the div, I add this function as a 'user defined component' or props. Filters is the component with onFindPetsClick={this.onFindPetsClick} as props. I need to go to Filters.js and in the button get the props from the App that are passed down as an onClick event listener.
  };

  //we need a method that changes filter from all to dog to whatever.
  //We do it in App.js because this is where state is.

  onChangeType = event => {
    //always use arrow functions. I need to take an event, because it will be the event of the select and put the event.target.value.
    this.setState({
      filters: {
        type: event.target.value
      }
      //we need to pass this prop to filters because filters is where the select value is. The props is called onChangeType and what the props passes down is this function in this component called onChangeType
    });
  };

  //Filters and PetBrowser are components
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
