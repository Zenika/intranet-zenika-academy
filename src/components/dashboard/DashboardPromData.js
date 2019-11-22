import React, { Component } from 'react';
import '../layout/Layout.scss';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import PromDataCard from './PromDataCard.js';

const promDataForDashboard = [
    {
        promo1: {
            promo: 'Promo 3',
            title: 'Consultant JS',
            startDate: '2019-09-05',
            endDate: '2020-01-06',
            country: 'France',
            city: 'Paris',
        },
        promo2: {
            promo: 'Promo 2',
            title: 'Consultant Java',
            number: '2',
            startDate: '2021-09-05',
            endDate: '2022-01-06',
            country: 'France',
            city: 'Rennes',
        },
        promo3: {
            promo: 'Promo 4',
            title: 'Consultant DevOps',
            number: '4',
            startDate: '2050-09-05',
            endDate: '2051-01-06',
            country: 'France',
            city: 'Lyon',
        },
        promo4: {
            promo: 'Promo 1',
            title: 'Consultant Spring',
            number: '1',
            startDate: '2050-09-05',
            endDate: '2051-01-06',
            country: 'Canada',
            city: 'Montréal',
        }
    }
];

class DashboardPromData extends Component {
    componentDidMount() {
        this.collapsibles = bulmaCollapsible.attach(".is-collapsible", {
            container: this.refs.collapsibles,
            collapsed: false,
            allowMultiple: true
        });
    }

    render() {
        return (
            <div className="notification">
                <h1 className="title is-4">Promos en cours</h1>
                <section ref="collapsibles" id="accordion_first">
                    <article className="message">
                        <div className="message-header">
                            <h2 className="title is-5 ">{promDataForDashboard[0].promo1.country} (3)</h2>
                            <a href="#collapsible-section1" data-action="collapse">
                                <i className="fas fa-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapsible-section1" className="adminDashboard message-body is-collapsible" data-parent="accordion_first">
                            <div className="adminDashboardItem message-body-content">
                                <PromDataCard
                                    title={promDataForDashboard[0].promo1.title}
                                    city={promDataForDashboard[0].promo1.city}
                                    promo={promDataForDashboard[0].promo1.promo}
                                />
                            </div>
                            <div className="adminDashboardItem message-body-content">
                                <PromDataCard
                                    title={promDataForDashboard[0].promo2.title}
                                    city={promDataForDashboard[0].promo2.city}
                                    promo={promDataForDashboard[0].promo2.promo}
                                />
                            </div>
                            <div className="adminDashboardItem message-body-content">
                                <PromDataCard
                                    title={promDataForDashboard[0].promo3.title}
                                    city={promDataForDashboard[0].promo3.city}
                                    promo={promDataForDashboard[0].promo3.promo}
                                />
                            </div>
                        </div>
                    </article>
                    <article className="message">
                        <div className="message-header">
                            <h2 className="title is-5">{promDataForDashboard[0].promo4.country} (1)</h2>
                            <a  href="#collapsible-section2" data-action="collapse">
                                <i className="fas fa-chevron-down"></i>
                            </a>
                        </div>
                        <div id="collapsible-section2" className="adminDashboard message-body is-collapsible" data-parent="accordion_first">
                            <div className="adminDashboardItem message-body-content">
                                <PromDataCard
                                    title={promDataForDashboard[0].promo4.title}
                                    city={promDataForDashboard[0].promo4.city}
                                    promo={promDataForDashboard[0].promo4.promo}
                                />
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}

export default DashboardPromData;