import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

class SearchbarAuto extends Component {

  render() {
    const {
      options, defaultValue, handleChange, isMulti, name, defaultLabel,
    } = this.props;

    return (
      <Select
        name={name}
        closeMenuOnSelect={!isMulti}
        components={animatedComponents}
        defaultValue={defaultValue}
        onChange={(e) => handleChange(e)}
        options={options}
        noOptionsMessage={(inputValues) => `${inputValues.inputValue} n'est pas trouvé, demandez au canard !`}
        getOptionLabel={(option) => option.label}
        placeholder={defaultLabel}
        getOptionValue={(option) => option.value}
        isMulti={isMulti}
      />
    );
  }
}

export default SearchbarAuto;
