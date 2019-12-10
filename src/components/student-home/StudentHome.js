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
    program.push(
      <>
        <h1 className="studentsHomeSectionTitle" key="Program Title">
Programme :
          {' '}
        </h1>
        <div>
          {programData.title}
          {' '}
          <a href={`/home/user/program/${programData.id}`} className="detailsLink">détails...</a>
        </div>
      </>,
    );
    return program;
  }

  displayPromotion = () => {
    const promotion = [];
    const { promotionDetails } = this.state;
    const promotionData = promotionDetails.promotion ? promotionDetails.promotion : [];
    promotion.push(<h1 className="studentsHomeSectionTitle" key="promoTitle">Promotion : </h1>);
    promotion.push(
      <div>
Titre :
        { ' ' }
        {promotionData.title}
      </div>,
      <div>
Début :
        { ' ' }
        <Moment format="DD/MM/YYYY">{promotionData.startDate}</Moment>
      </div>,
      <div>
Fin :
        { ' ' }
        <Moment format="DD/MM/YYYY">{promotionData.endDate}</Moment>
      </div>,
      <div>
Ville :
        { ' ' }
        {promotionData.city}
      </div>,
    );
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
