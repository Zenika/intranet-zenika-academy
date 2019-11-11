import React from 'react';
import DashboardPromData from './DashboardPromData';
import DashboardFilterBar from './DashboardFilterBar';

class Dashboard extends React.Component {

  componentDidMount() {
    document.title = 'Admin/Dashboard';
  }

  render() {
    return (
      <>
        <h1 className="title is-2 mbmd">Dashboard</h1>
        <h2 className="title is-4 mbmd">Filtrer les promotions</h2>
        <DashboardFilterBar />
        <DashboardPromData />
      </>
    );
  }
}

export default Dashboard;
