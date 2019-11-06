import React, { Component } from 'react';
import PromoCreateStepOne from './PromoCreateStepOne';
import { PromoCreateStepTwo } from './PromoCreateStepTwo';
import { PromoCreateStepThree } from './PromoCreateStepThree';
import { PromoCreateStepFour } from './PromoCreateStepFour';

export class PromoCreateContainer extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      isTeachers: true,
      promo: {
        number: 0,
        startDate: '',
        endDate: '',
        students: [],
        teachers: [],
        program: [],
      },
    };
  }

  /**
   * Allows to handle state change in promo form
   * @param e event from wich data are coming from
   */
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  /**
   * Allows to navigate forward on multiform
   */
  nextStep = () => {
    const { step } = this.state;
    if (step > 2) {
      this.setState({ isTeachers: false });
    }
    this.setState({ step: step + 1 });
  }

  /**
   * Allows to navigate backward on multiform
   */
  prevStep = () => {
    const { step } = this.state;
    if (step < 5) {
      this.setState({ isTeachers: true });
    }
    this.setState({ step: step - 1 });
  }

  render() {
    const { step, isTeachers } = this.state;
    const { nextStep, prevStep } = this;

    switch (step) {
      case 1:
        return (
          <PromoCreateStepOne
            nextStep={nextStep}
            step={step}
          />
        );
      case 2:
        return (
          <PromoCreateStepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 3:
        return (
          <PromoCreateStepThree
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 4:
        return (
          <PromoCreateStepFour
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
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
