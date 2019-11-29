import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import './AdminHome.scss';

class AdminHome extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { promotions: {} };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/promotions')
      .then((res) => {
        const promotions = res.data;
        if (this._isMounted) {
          this.setState({ promotions });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const promotions = this.state.promotions.length > 0 ? this.state.promotions : [];
    return (
      <>
        <h1 className="title is-2 mbmd">Bienvenue</h1>
        <h2 className="title is-4 mbmd">Liste des promotions :</h2>
        <ul className="promosContainer">
          {promotions.map((promotion) => (
            <li className="promoLineContainer" key={promotion.id}>
              {promotion.title}
              {' du '}
              <Moment format="DD/MM/YYYY">{promotion.startDate}</Moment>
              {' au '}
              <Moment format="DD/MM/YYYY">{promotion.endDate}</Moment>
              {' à '}
              {promotion.city}
              { ' ' }
              <a href="/" className="detailsLink">détails...</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default AdminHome;
