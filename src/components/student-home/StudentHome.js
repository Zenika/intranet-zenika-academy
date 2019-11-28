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
    const title = this.state.promotions[0] ? this.state.promotions[0].title : null;
    return (
      <div>
        {title}
      </div>
    );
  }
}

export default StudentHome;
