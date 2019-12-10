import React, { Component } from 'react';
import axios from 'axios';

class ProgramDetails extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      programDetails: [],
    };
  }

  componentDidMount() {
    // const id = sessionStorage.getItem('promoId');
    const { match } = this.props;
    const { id } = match.params;
    this._isMounted = true;
    axios.get(`http://localhost:4000/api/programs/${id}`)
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
    const keys = Object.keys(programDetails);
    program.push(
      <h1 className="title is-2 mbmd" key="Program Title">
Programme
        {' '}
        {programDetails.title}
      </h1>,
    );
    // keys.forEach((key) => {
    //   if (key === 'title') {
    //     program.push(
    //       <>
    //         <div key={key}>
    //           { ' ' }
    //           {programDetails[key]}
    //           { ' ' }
    //           {/* <a href={`/home/user/program/${programDetails.id}`} className="detailsLink">détails...</a> */}
    //         </div>
    //       </>,
    //     );
    //   }
    // });
    return program;
  }

  render() {
    const { programDetails } = this.state;
    return (
      <>
        <section className="studentHomeSection">{this.displayProgram()}</section>
      </>
    );
  }
}

export default ProgramDetails;
