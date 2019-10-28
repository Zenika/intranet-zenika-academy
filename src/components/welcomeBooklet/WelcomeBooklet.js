import React from 'react';

const WelcomeBooklet = () => (
  <div>

    <iframe id="welcome-book" title="Welcome2Zenika" width="100%" height="100%" src="https://www.generation-industrie.net/sites/default/files/modele_livret_accueil.pdf" allow="fullscreen" />
    <style jsx>
      {` 
        div {
            margin : auto;
            height: 500px;

        }

        #welcome-book {
            height: 500px;
        }

    `}
    </style>

  </div>
);

export default WelcomeBooklet;
