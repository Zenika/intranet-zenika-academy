import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import './theme.scss';

export class SearchbarAuto extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

   getSuggestions = (value) => {
     const { searchObject, searchKey } = this.props;
     const inputValue = value.trim().toLowerCase();
     const inputLength = inputValue.length;
     return inputLength === 0 ? [] : searchObject.filter((search) => search[searchKey].toLowerCase().slice(0, inputLength) === inputValue);
   };

   getSuggestionValue = (suggestion) => suggestion[this.props.searchKey];

   renderSuggestion = (suggestion) => (
     <div>
       {suggestion[this.props.searchKey]}
     </div>
   );

   render() {
     const { value, suggestions } = this.state;
     const inputProps = {
       placeholder: 'Rechercher',
       value,
       onChange: this.onChange,
     };
     return (
       <Autosuggest
         suggestions={suggestions}
         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
         getSuggestionValue={this.getSuggestionValue}
         renderSuggestion={this.renderSuggestion}
         inputProps={inputProps}
       />
     );
   }
}

export default SearchbarAuto;
