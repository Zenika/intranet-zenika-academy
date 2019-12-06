import React from 'react';
import './Program.scss';
import '../layout/Layout.scss';
import ProgramForm from './ProgramForm';
import RecapProgramForm from './RecapProgramForm';

class ProgramFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      program: {
        title: '',
        type: 1,
        content: [],
      },
    };
  }

  componentDidMount() {
    document.title = 'Admin / Programme création';
  }

  handleChange = (e, program) => {
    const { value } = e.target;
    this.setState({ step: parseInt(value, 10), program });
  };

  render() {
    const { step, program } = this.state;
    return (
      <>
        { step === 0
          ? (
            <ProgramForm
              program={program}
              handleChange={this.handleChange}
            />
          )
          : <RecapProgramForm program={program} handleChange={this.handleChange} />}
      </>
    );
  }
}

export default ProgramFormContainer;
