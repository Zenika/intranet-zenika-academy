import React from 'react';
import DashboardPromData from './DashboardPromData.js';
import DashboardFilterBar from './DashboardFilterBar.js';

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="title is-2 mbmd">Dashboard</h1>
                <h2 className="title is-4 mbmd">Filtrer les promotions</h2>
                <DashboardFilterBar />
                <DashboardPromData />
            </React.Fragment>
        );
    }
}

export default Dashboard;
