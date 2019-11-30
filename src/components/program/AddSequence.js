import React from 'react';
import '../layout/Layout.scss';

class AddSequence extends React.Component {

  render() {
    const {
      id, title, handleChange,
    } = this.props;

    return (
      <>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Nom de la séquence n°
              {id + 1}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              <label htmlFor="title" className="label">
                <input className="input" id={id} name="title" type="text" placeholder="Nom de la séquence" defaultValue={title} onChange={(e) => handleChange(e)} />
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddSequence;
