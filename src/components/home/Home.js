import React, { Component } from 'react';
import '../app/index.scss';
import '../app/App.scss';
import Caroussel from '../caroussel/Caroussel';

class Home extends Component {
  componentDidMount() {
    document.title = 'Accueil';
  }

  render() {
    return (
      <>
        <div>
          <h1 className="title is-2 mbmd">Accueil</h1>
        </div>
        <article className="box carousel">
          {/* <Caroussel /> */}
        </article>
      </>
    );
  }
}

export default Home;
