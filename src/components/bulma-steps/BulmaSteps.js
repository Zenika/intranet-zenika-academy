import React, { Component } from 'react';

export class BulmaSteps extends Component {
  render() {
    const { step } = this.props;
    return (
      <ul className="steps has-content-centered">
        <li className={`steps-segment ${step === 1 ? 'is-active' : ' '}`}>
          <span className="steps-marker" />
          <div className="steps-content">
            <p className="is-size-4">{step === 1 ? '1' : ' '}</p>
          </div>
        </li>
        <li className={`steps-segment ${step === 2 ? 'is-active' : ' '}`}>
          <span className="steps-marker" />
          <div className="steps-content">
            <p className="is-size-4">{step === 2 ? '2' : ' '}</p>
          </div>
        </li>
        <li className={`steps-segment ${step === 3 ? 'is-active' : ' '}`}>
          <span className="steps-marker" />
          <div className="steps-content">
            <p className="is-size-4">{step === 3 ? '3' : ' '}</p>
          </div>
        </li>
        <li className={`steps-segment ${step === 4 ? 'is-active' : ' '}`}>
          <span className="steps-marker" />
          <div className="steps-content">
            <p className="is-size-4">{step === 4 ? '4' : ' '}</p>
          </div>
        </li>
        <li className={`steps-segment ${step === 5 ? 'is-active' : ' '}`}>
          <span className="steps-marker" />
          <div className="steps-content">
            <p className="is-size-4">{step === 5 ? '5' : ' '}</p>
          </div>
        </li>
      </ul>


    );
  }
}

export default BulmaSteps;
