/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import './StudentHome.scss';

class StudentHome extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { promotionDetails: [] };
  }

  componentDidMount() {
    this._isMounted = true;
    axios.get('http://localhost:4000/api/promotions/details/2')
      .then((res) => {
        const promotionDetails = res.data;
        if (this._isMounted) {
          this.setState({ promotionDetails });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  displayProgram = () => {
    const program = [];
    const { promotionDetails } = this.state;
    const programData = promotionDetails.program ? promotionDetails.program : [];
    const keys = Object.keys(programData);
    program.push(<h1 key="Program Title">Programme : </h1>);
    keys.forEach((key) => {
      if (key === 'title') {
        program.push(<div key={key}>Titre : {programData[key]}</div>);
      }
      if (key === 'createdAt') {
        program.push(<div key={key}>Créée le : <Moment format="DD/MM/YYYY" key={key}>{programData[key]}</Moment></div>);
      }
      if (key === 'updatedAt') {
        program.push(<div key={key}>Mis à jour le : <Moment format="DD/MM/YYYY" key={key}>{programData[key]}</Moment></div>);
      }
    });
    return program;
  }

  displayPromotion = () => {
    const promotion = [];
    const { promotionDetails } = this.state;
    const promotionData = promotionDetails.promotion ? promotionDetails.promotion : [];
    const keys = Object.keys(promotionData);
    promotion.push(<h1 key="promoTitle">Promotion : </h1>);
    keys.forEach((key) => {
      if (key === 'title') {
        promotion.push(<div key={key}>Titre : {promotionData[key]}</div>);
      }
      if (key === 'createdAt') {
        promotion.push(<div key={key}>Créée le : <Moment format="DD/MM/YYYY" key={key}>{promotionData[key]}</Moment></div>);
      }
      if (key === 'updatedAt') {
        promotion.push(<div key={key}>Mis à jour le : <Moment format="DD/MM/YYYY" key={key}>{promotionData[key]}</Moment></div>);
      }
    });
    return promotion;
  }

  displaystudents = () => {
    const students = [];
    const { promotionDetails } = this.state;
    const studentsData = promotionDetails.users ? promotionDetails.users : [];
    const keys = Object.keys(studentsData);
    students.push(<h1 key="studentsTitle">Students : </h1>);
    keys.forEach((key) => {
      if (key === 'title') {
        students.push(<div key={key}>Titre : {studentsData[key]}</div>);
      }
      if (key === 'createdAt') {
        students.push(<div key={key}>Créée le : <Moment format="DD/MM/YYYY" key={key}>{studentsData[key]}</Moment></div>);
      }
      if (key === 'updatedAt') {
        students.push(<div key={key}>Mis à jour le : <Moment format="DD/MM/YYYY" key={key}>{studentsData[key]}</Moment></div>);
      }
    });
    return students;
  }

  render() {
    return (
      <>
        <h1 className="title is-2 mbmd">Bienvenue</h1>
        <section>{this.displayPromotion()}</section>
        <section>{this.displayProgram()}</section>
        {/* <section>{this.displayStudents()}</section> */}
      </>
    );
  }
}

export default StudentHome;
