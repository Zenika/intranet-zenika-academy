import React from 'react';
import DashboardPromData from './DashboardPromData.js';
import DashboardShearchbar from './DashboardSearchbar.js';
import DashboardFilterBar from './DashboardFilterBar.js';

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <h1 className="title is-1 mbmd">Dashboard</h1>
                <div>
                <DashboardFilterBar />
                <DashboardPromData />
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
