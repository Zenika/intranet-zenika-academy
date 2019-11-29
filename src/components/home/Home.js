import React, { Component } from 'react';
import '../app/index.scss';
import '../app/App.scss';
// import Caroussel from '../caroussel/Caroussel';
import AdminHome from '../admin-home/AdminHome';
import StudentHome from '../student-home/StudentHome';

class Home extends Component {
  render() {
    return (
      <>
        {/* <StudentHome /> */}
        <AdminHome />
      </>
    );
  }
}

export default Home;
