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
      title: '',
      startDate: '',
      endDate: '',
      students: [],
      teachers: [],
      program: [],
    };
  }

  /**
   * Allows to handle state change in promo form
   * @param e event from wich data are coming from
   */
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      console.log(`state: ${this.state}, value: ${value}`);
    });
  }

  /**
   * Allows to handle state change from multi select
   * @param options options objects from multi select
   * @param name name of the state to update
   */
  handleMultiChange = (options, name) => {
    if (name === 'program') {
      this.setState({ [name]: [options] }, () => {
        console.log(`state: ${this.state}, value: ${options}`);
      });
    }
    this.setState({ [name]: options }, () => {
      console.log(`state: ${this.state}, value: ${options}`);
    });
  }

  /**
   * Allows to navigate forward on multiform
   */
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  /**
   * Allows to navigate backward on multiform
   */
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  render() {
    const {
      step, title, startDate, endDate, teachers, students, program, country, city,
    } = this.state;
    const promo = {
      title, startDate, endDate, teachers, students, program, country, city,
    };
    const {
      nextStep, prevStep, handleChange, handleMultiChange,
    } = this;

    switch (step) {
      case 1:
        return (
          <PromoCreateStepOne
            nextStep={nextStep}
            step={step}
            promo={promo}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <PromoCreateStepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleMultiChange={handleMultiChange}
            promo={promo}
            step={step}
          />
        );
      case 3:
        return (
          <PromoCreateStepThree
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleMultiChange={handleMultiChange}
            promo={promo}
            step={step}
          />
        );
      case 4:
        return (
          <PromoCreateStepFour
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleMultiChange={handleMultiChange}
            promo={promo}
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
