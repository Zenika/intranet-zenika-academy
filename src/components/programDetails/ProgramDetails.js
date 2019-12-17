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
    this.titles = [];
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

  display = (programDetails) => {
    if (programDetails.content) {
      programDetails.content.forEach(this.display);
    }
  }

  record = (programDetails) => {
    let className;
    if (programDetails.content) {
      if (programDetails.type === 1) {
        className = 'programTitle';
      } else if (programDetails.type === 2) {
        className = 'moduleTitle';
      } else if (programDetails.type === 3) {
        className = 'subModuleTitle';
      } else if (programDetails.type === 4) {
        className = 'sequenceTitle';
      }
      this.titles.push(
        <div key={programDetails.title} className={className}>
          {programDetails.title}
        </div>,
      );
      programDetails.content.forEach(this.record);
    }
  }

  render() {
    const { programDetails } = this.state;
    this.record(programDetails);
    return (
      <>
        <section className="studentHomeSection">{this.titles}</section>
      </>
    );
  }
}

export default ProgramDetails;
