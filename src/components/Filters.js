import React from "react";

class Filters extends React.Component {
  //In the select we should call the onChange event. But event listeners listen to events so the function onChangeTypes is waiting for an event. But we don't do to do anything. Alternatively we can write onChange={event => this.props.onChangeType(event)}
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.props.onChangeType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            onClick={this.props.onFindPetsClick}
            className="ui secondary button"
          >
            Find pets
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;

//OnClick calls the function for us. We don't have to add (). And we don't have to pass it any event or parameters because our function doesn't take any, so we don't care.
