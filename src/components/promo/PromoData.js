import React from 'react';
import Axios from 'axios';

class PromoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      program: {},
      promotion: {},
    };
  }

  componentDidMount() {
    const url = `http://localhost:4000/api/promotions/details/${parseInt(this.props.match.params.id, 10)}`;
    Axios.get(url)
      .then((result) => {
        this.setState({
          ...result.data,
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="tabs">
        <ul>
          <li className="is-active"><a href="#">Elèves</a></li>
          <li><a href="#">Formateurs</a></li>
          <li><a href="#">Programme</a></li>
        </ul>
      </div>
    );
  }
}

export default PromoDetails;
