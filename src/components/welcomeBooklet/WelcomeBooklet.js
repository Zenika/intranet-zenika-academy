import React from 'react';

const WelcomeBooklet = () => (
  <React.Fragment>
    <div>
      <h1 className="title is-2 mbmd">Livret d'accueil</h1>
    </div>
    <div id="bookletFrame">
      <iframe id="welcome-book" title="Welcome2Zenika" width="100%" height="100%" src="https://www.generation-industrie.net/sites/default/files/modele_livret_accueil.pdf" allow="fullscreen" />
      <style jsx>
        {` 
        #bookletFrame {
            margin : auto;
            height: 500px;
        }

        #welcome-book {
            height: 500px;
        }
    `}
      </style>

    </div>
  </React.Fragment>
);

export default WelcomeBooklet;
