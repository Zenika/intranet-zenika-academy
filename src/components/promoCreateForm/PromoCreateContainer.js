import React, { Component } from 'react';
import PromoCreateStepOne from './PromoCreateStepOne';
import { PromoCreateStepTwo } from './PromoCreateStepTwo';
import { PromoCreateStepThree } from './PromoCreateStepThree';
import { PromoCreateStepFour } from './PromoCreateStepFour';
import PromoCreateResume from './PromoCreateResume';

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
      country: '',
      city: '',
    };
  }

  componentDidMount() {
    document.title = 'Création de promotion';
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
   * Allows to pass csv data into state
   * @param name name of the state to update
   * @param data data to put in the state
   */
  handleCSVImport = (name, data) => {
    this.setState({ [name]: [...data] }, () => {
      console.log(`state: ${this.state}, value: ${data}`);
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
      nextStep, prevStep, handleChange, handleMultiChange, handleCSVImport,
    } = this;

    switch (step) {
      case 1:
        return (
          <PromoCreateStepOne
            nextStep={nextStep}
            step={step}
            promo={promo}
            handleChange={handleChange}
            handleMultiChange={handleMultiChange}
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
            handleCSVImport={handleCSVImport}
            name="teachers"
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
            handleCSVImport={handleCSVImport}
            promo={promo}
            step={step}
            name="students"
          />
        );
      default:
        return (
          <PromoCreateResume
            nextStep={nextStep}
            prevStep={prevStep}
            promo={promo}
            step={step}
          />
        );
    }
  }
}

export default PromoCreateContainer;
