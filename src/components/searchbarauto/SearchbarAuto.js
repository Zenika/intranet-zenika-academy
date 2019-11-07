import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export class SearchbarAuto extends Component {



  render() {
    const { options, defaultValue, handleChange, isMulti, name } = this.props;

    return (
      <Select
        name={name}
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={defaultValue}
        onChange={(e) => handleChange(e)}
        options={options}
        isMulti={isMulti}
      />
    );
  }
}

export default SearchbarAuto;
