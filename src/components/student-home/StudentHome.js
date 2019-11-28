import React, { Component } from 'react';
import axios from 'axios';

class StudentHome extends Component {
  constructor(props) {
    super(props);
    this.state = { promotions: {} };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/promotions')
      .then((res) => {
        const promotions = res.data;
        this.setState({ promotions });
      });
  }

  render() {
    const promotions = this.state.promotions.length > 0 ? this.state.promotions : [];
    return (
      <>
        {promotions.map((promotion) => (
          <div key={promotion.id}>
            {promotion.title}
            {' du '}
            {promotion.startDate}
            {' au '}
            {promotion.endDate}
          </div>
        ))}
      </>
    );
  }
}

export default StudentHome;
