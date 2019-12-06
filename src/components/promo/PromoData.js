import React, { Component } from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import './PromoData.scss';
// import { CSSTransitionGroup } from 'react-transition-group';
// import PropTypes from 'prop-types';

// const Tab = (props) => {
//   const { name, activeTab, changeActiveTab } = props;
//   return (
//     <li className={name === activeTab && 'is-active'} onClick={() => changeActiveTab(name)}>
//       <a>
//         <span>{name}</span>
//       </a>
//     </li>
//   );
// };

// const activeTabContent = (props) => <div>{props.content}</div>;

// const tablist = [
//   {
//     name: 'Elèves',
//     content: '',
//   },
//   {
//     name: 'Formateurs',
//     content: '',
//   },
//   {
//     name: 'Programmes',
//     content: '',
//   },
// ];

// class PromoTabs extends React.Component {
//   render() {
//     const { activeTab, changeActiveTab } = this.props;
//     return (
//       <div className="tabs">
//         <ul>
//           {
//             tablist.map((tab) => (
//               <Tab
//                 tab={tab}
//                 key={tab.name}
//                 activeTab={activeTab}
//                 changeActiveTab={changeActiveTab}
//               />
//             ))
//           }
//         </ul>
//       </div>
//     );
//   }
// }

// PromoTabs.propTypes = {
//   tablist: PropTypes.shape({
//     name: PropTypes.string,
//     content: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
//   activeTab: PropTypes.string,
//   changeActiveTab: PropTypes.func,
// };


class PromoDetails extends Component {
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
          users: result.data.users,
          program: result.data.program,
          promotion: result.data.promotion,
        });
      });
  }

  render() {
    const { users, program, promotion } = this.state;
    const teachers = users.filter((user) => user.role === 2);
    const students = users.filter((user) => user.role === 3);
    return (
      <>
        <div className="container">
          <div className="PromoDataHeader">
            <div className="promoInfo">
              <h1 className="title is-1 promoTitle">{promotion.title}</h1>
              <h2 className="subtitle is-3">
à
                {' '}
                {promotion.city}
                {' '}
            du
                {' '}
                <Moment format="DD/MM/YYYY">{promotion.startDate}</Moment>
                {' '}
            au
                {' '}
                <Moment format="DD/MM/YYYY">{promotion.endDate}</Moment>
              </h2>
            </div>
            <a href="/home/admin" className="button is-dark goBack">Revenir à l&apos;accueil</a>
          </div>
          <div className="container">
            <div className="notification">
              <h3 className="title is-3">Formateurs</h3>
              <ul className="promoTeachers">
                {
                  teachers.map((teacher) => <li>{`${teacher.firstName} ${teacher.lastName}`}</li>)
                }
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="notification">
              <h3 className="title is-3">Elèves</h3>
              <ul className="promoStudents">
                {
                  students.map((student) => <li>{`${student.firstName} ${student.lastName}`}</li>)
                }
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="notification">
              <h3 className="title is-3">Programme</h3>
              <p>{program.title}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PromoDetails;
