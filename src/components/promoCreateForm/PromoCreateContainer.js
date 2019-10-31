import React, { Component } from 'react';
import { PromoCreateStepOne } from './PromoCreateStepOne';
import { PromoCreateStepTwo } from './PromoCreateStepTwo';
import PromoCreateStepThree from './PromoCreateStepThree';

export class PromoCreateContainer extends Component {

  constructor() {
    super();
    this.state = {
      step: 1,
      startDate: '',
      endDate: '',
      students: [],
      teachers: [],
      program: []
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 })
  }

  prevStep = () => {
    const { step } = this.state;
    if (step > 0) this.setState({ step: step - 1 });
  }

  render() {
    const { step } = this.state;
    const { nextStep, prevStep } = this;
    console.log(step);

    switch (step) {
      case 1:
        return (
          <PromoCreateStepOne
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <PromoCreateStepTwo
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <PromoCreateStepThree
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      default:
        return (
          <p>error</p>
        );
    }
  }
}

export default PromoCreateContainer;
