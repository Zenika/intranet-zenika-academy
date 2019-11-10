import React, { Component } from 'react';
import '../app/index.scss';
import '../app/App.scss';
import Caroussel from '../caroussel/Caroussel';

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <h1 className="title is-2 mbmd">Accueil</h1>
        </div>
        <article className="box">
          <Caroussel />
        </article>
      </>
    );
  }
}

export default Home;
