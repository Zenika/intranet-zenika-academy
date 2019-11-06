import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export class SearchbarAuto extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: null,
    };
    this.handleChange = (selectedOption) => {
      this.setState(
        { selectedOption },
        () => console.log('Option selected:', this.state.selectedOption),
      );
    };
  }


  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        value={selectedOption}
        onChange={this.handleChange}
        options={this.props.searchObject}
        isMulti={this.props.isMulti}
      />
    );
  }
}

export default SearchbarAuto;
