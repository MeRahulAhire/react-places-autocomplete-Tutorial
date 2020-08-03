# 🚨 Alert - Before Starting to use this code (Please read it)


The issue with the video tutorial that I stated in [my video](https://youtu.be/-KOZwDkWpJE "How to Make an Auto Complete Search Input in React.js") is taken from the Library known as [React-Places-Autocomplete](https://www.npmjs.com/package/react-places-autocomplete) and it does work really well

<h4>But, however the problem I faced with it, is that you may not able to access the state(as per the code below) of this library to your other component via props</h4> 

```
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
```

<h2>
✅ So, Do use the mentioned below(recommended).
</h2>
<h3>❕❗ Although I'd Say please try both and see first how the library works for your project requirement. If it works fine then go for it or else use the below ones</h3>

```
import React, { Component } from 'react';
import './app.css';

export class locationInput extends Component {
  state = {
   location : '',
  }
handleChange = (e) => {
   this.setState({location: this.state.location})
  
		function initAutocomplete() {
			var input = document.getElementById('pac-input');
			var searchBox = new window.google.maps.places.SearchBox(input);
			searchBox.addListener('places_changed', function() {
				this.setState({ CollegeName: document.getElementById('pac-input').value });
			});
		}
  
		initAutocomplete();

}
	render() {
		return (
			<div>
				<input
					defaultValue={this.state.location}
					onChange={this.handleChange}
					id="pac-input"  // Do not change the value of id here. if you do, it wont work with google map API
					className="controls"
					type="text"
					placeholder="Search your College"
				/>
			</div>
		);
	}
}
export default locationInput
```
<h3>and don't forget to mention below script tag in your project with API key from your GCP console</h3>

<code><script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" type="text/javascript"></script></code>
