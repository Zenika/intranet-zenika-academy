import React, { Component } from 'react';
import '../app/index.scss';
import '../app/App.scss';
// import Caroussel from '../caroussel/Caroussel';
import AdminHome from '../admin-home/AdminHome';

class Home extends Component {
  componentDidMount() {
    document.title = 'Accueil';
  }

  render() {
    return (
      <>
        <div>
          <h1 className="title is-2 mbmd">Bienvenue</h1>
          <h2 className="title is-4 mbmd">Liste des promotions :</h2>
        </div>
        <AdminHome />
        {/* <article className="box carousel"> */}
        {/* <Caroussel /> */}
        {/* </article> */}
      </>
    );
  }
}

export default Home;
