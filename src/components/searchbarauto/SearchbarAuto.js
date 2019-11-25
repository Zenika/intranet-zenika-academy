import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

class SearchbarAuto extends Component {
  render() {
    const {
      options, defaultValue, handleChange, isMulti, name, defaultLabel, csv, className,
    } = this.props;

    /* If new teachers have been created from csv,
     * a new object is made to display the values in the Select component
     */
    const selectedValues = csv ? defaultValue.reduce((arr, v) => {
      const obj = {
        label: `${v.Nom} ${v.Prénom}`,
        value: `${v.Nom} ${v.Prénom}`,
      };
      arr.push(obj);
      return arr;
    }, []) : defaultValue;

    return (
      <Select
        name={name}
        components={animatedComponents}
        options={options}
        isMulti={isMulti}
        className={className}
        placeholder={defaultLabel}
        onChange={(e) => handleChange(e)}
        defaultValue={selectedValues}
        closeMenuOnSelect={!isMulti}
        noOptionsMessage={(inputValues) => `${inputValues.inputValue} n'est pas trouvé, demandez au canard !`}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
      />
    );
  }
}

export default SearchbarAuto;
