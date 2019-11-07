import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

class CreatableSearchbar extends Component {

  handleCreate = (inputValue) => {
    this.setState({ isLoading: true });
    setTimeout( () => {
      const { options } = this.state;
      const newOption = createOption(inputValue);
      this.setState({
        isLoading: false,
        options: [newOption],
      });
    }, 1000);
  };

  render() {
    const {
      options, defaultValue, handleChange, isMulti, name, defaultLabel, isLoading,
    } = this.props;

    return (
      <CreatableSelect
        isClearable
        isCreatable
        name={name}
        defaultValue={defaultValue}
        onChange={(e) => handleChange(e)}
        formatCreateLabel={(inputValue) => `Créer un nouveau  ${defaultLabel} : ${inputValue}`}
        placeholder={defaultLabel}
        options={options}
        isMulti={isMulti}
        isDisabled={isLoading}
        isLoading={isLoading}
        onCreateOption={this.handleCreate}
      />
    );
  }
}

export default CreatableSearchbar;
