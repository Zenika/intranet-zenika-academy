import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './StudentHome.scss';

class StudentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotionDetails: [],
      redirectToUser: false,
      promotionId: '',
    };
  }

  componentDidMount() {
    const id = sessionStorage.getItem('promoId');
    const role = sessionStorage.getItem('userRole');
    if (JSON.parse(role) === 2 || JSON.parse(role) === 3) {
      return this.setState({
        redirectToUser: true,
        promotionId: id,
      });
    }
  }

  render() {
    const { redirectToUser, promotionId } = this.state;
    if (redirectToUser) {
      return <Redirect to={`/user/promo/${promotionId}/details`} />;
    }
  }
}

export default StudentHome;
