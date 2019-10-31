import React, { Component } from 'react';
import '../app/index.scss';
import '../app/App.scss';
import Caroussel from '../caroussel/Caroussel';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className="title is-1 mbmd">Accueil</h1>
        </div>
        <Caroussel />
      </React.Fragment>
    );
  }
}

export default Home;
