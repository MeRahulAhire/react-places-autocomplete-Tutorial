import React, { Component } from 'react'
import './App.css'
import PlacesAutocomplete from 'react-places-autocomplete';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  render() {
    return (
      <div className="canvas">
      <PlacesAutocomplete
      value={this.state.address}
      onChange={this.handleChange}
      onSelect={this.handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#42a5f5', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div className="input-suggestion"
                  {...getSuggestionItemProps(suggestion, {
                    
                    style,
                  })}
                >
                <i class="material-icons">location_on  </i> <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
      </div>
    )
  }
}

export default App

