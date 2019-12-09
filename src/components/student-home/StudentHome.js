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
    const id = sessionStorage.getItem('promoId');
    this._isMounted = true;
    axios.get(`http://localhost:4000/api/promotions/details/${id}`)
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
    program.push(<h1 className="studentsHomeSectionTitle" key="Program Title">Programme : </h1>);
    keys.forEach((key) => {
      if (key === 'title') {
        program.push(
          <div key={key}>
Titre :
            { ' ' }
            {programData[key]}
          </div>,
        );
      }
    });
    return program;
  }

  displayPromotion = () => {
    const promotion = [];
    const { promotionDetails } = this.state;
    const promotionData = promotionDetails.promotion ? promotionDetails.promotion : [];
    const keys = Object.keys(promotionData);
    promotion.push(<h1 className="studentsHomeSectionTitle" key="promoTitle">Promotion : </h1>);
    keys.forEach((key) => {
      if (key === 'title') {
        promotion.push(
          <div key={key}>
Titre :
            { ' ' }
            {promotionData[key]}
          </div>,
        );
      }
      if (key === 'startDate') {
        promotion.push(
          <div key={key}>
Début :
            { ' ' }
            <Moment format="DD/MM/YYYY" key={key}>{promotionData[key]}</Moment>
          </div>,
        );
      }
      if (key === 'endDate') {
        promotion.push(
          <div key={key}>
Fin :
            { ' ' }
            <Moment format="DD/MM/YYYY" key={key}>{promotionData[key]}</Moment>
          </div>,
        );
      }
      if (key === 'city') {
        promotion.push(
          <div key={key}>
Ville :
            { ' ' }
            {promotionData[key]}
          </div>,
        );
      }
    });
    return promotion;
  }

  displayStudents = () => {
    const students = [];
    const { promotionDetails } = this.state;
    const usersData = promotionDetails.users ? promotionDetails.users : [];
    students.push(<h1 className="studentsHomeSectionTitle" key="promoStudentsTitle">Eleves : </h1>);
    usersData.forEach((user) => {
      if (user.role === 3) {
        students.push(
          <div key={user.id}>
            {user.firstName}
            { ' ' }
            {user.lastName.toUpperCase()}
          </div>,
        );
      }
    });
    return students;
  }

  displayTeachers = () => {
    const teacher = [];
    const { promotionDetails } = this.state;
    const usersData = promotionDetails.users ? promotionDetails.users : [];
    teacher.push(<h1 className="studentsHomeSectionTitle" key="promoteacherTitle">Formateurs : </h1>);
    usersData.forEach((user) => {
      if (user.role === 2) {
        teacher.push(
          <div key={user.id}>
            {user.firstName}
            { ' ' }
            {user.lastName.toUpperCase()}
          </div>,
        );
      }
    });
    return teacher;
  }

  render() {
    return (
      <>
        <h1 className="title is-2 mbmd">Bienvenue</h1>
        <section className="studentHomeSection">{this.displayPromotion()}</section>
        <section className="studentHomeSection">{this.displayStudents()}</section>
        <section className="studentHomeSection">{this.displayProgram()}</section>
        <section className="studentHomeSection">{this.displayTeachers()}</section>
      </>
    );
  }
}

export default StudentHome;
