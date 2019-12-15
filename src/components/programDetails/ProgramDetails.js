import React, { Component } from 'react';
import axios from 'axios';
import './ProgramDetails.scss';

class ProgramDetails extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      programDetails: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this._isMounted = true;
    axios.get(`http://localhost:4000/api/programs/${id}/details`)
      .then((res) => {
        const programDetails = res.data;
        if (this._isMounted) {
          this.setState({ programDetails });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  displayProgram = () => {
    const program = [];
    const { programDetails } = this.state;
    const hasContent = programDetails.content ? programDetails : null;
    let module;
    let moduleTitle;
    let subModule;
    let subModuleTitle;
    let sequence;
    let sequenceTitle;
    if (hasContent !== null) {
      module = hasContent.content.length > 0 ? hasContent.content[0] : null;
      moduleTitle = module.title.toUpperCase();
      if (module !== null) {
        subModule = module.content.length > 0 ? module.content[0] : null;
        subModuleTitle = subModule.title;
        if (subModule !== null) {
          sequence = subModule.content.length > 0 ? subModule.content[0] : null;
          sequenceTitle = sequence.title;
        }
      }
    }

    program.push(
      <>
        <h1 className="title is-2 mbmd" key="Program Title">
Programme
          {' '}
          {programDetails.title}
        </h1>
        <div className="moduleTitle">{moduleTitle}</div>
        <div className="subModuleTitle">
-
          {' '}
          {subModuleTitle}
        </div>
        <div className="sequenceTitle">
-
          {' '}
          {sequenceTitle}
        </div>
      </>,
    );
    return program;
  }

  render() {
    return (
      <>
        <section className="studentHomeSection">{this.displayProgram()}</section>
      </>
    );
  }
}

export default ProgramDetails;
