import React from 'react';
import notfound from './notfound.png'; 

const Notfound = () => {
    return (
        <React.Fragment>
            <div>
                <h1 className="title is-1"> WOOPS ! </h1>
                <p>Ce n'était pas prévu </p>
                <img src={notfound} id="notFound" alt="image-404-notfound"></img>
            </div>
        </React.Fragment>
    );
}

export default Notfound;
