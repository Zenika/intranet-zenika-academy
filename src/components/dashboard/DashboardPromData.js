import React from 'react';
import '../layout/Layout.scss';
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

const DashboardPromData = () => (
    <div className="notification">
        <h1 className="title is-2">Promos en cours</h1>
        <article>
            <h2 className="title is-3 ">{promDataForDashboard[0].promo1.country}</h2>
            <ul className="adminDashboard">
                <li className="adminDashboardItem">
                    <PromDataCard
                        title={promDataForDashboard[0].promo1.title}
                        city={promDataForDashboard[0].promo1.city}
                        promo={promDataForDashboard[0].promo1.promo}
                    />
                </li>
                <li className="adminDashboardItem">
                    <PromDataCard
                        title={promDataForDashboard[0].promo2.title}
                        city={promDataForDashboard[0].promo2.city}
                        promo={promDataForDashboard[0].promo2.promo}
                    />
                </li>
                <li className="adminDashboardItem">
                    <PromDataCard
                        title={promDataForDashboard[0].promo3.title}
                        city={promDataForDashboard[0].promo3.city}
                        promo={promDataForDashboard[0].promo3.promo}
                    />
                </li>
            </ul>
        </article>
        <article>
            <h2 className="title is-3 ">{promDataForDashboard[0].promo4.country}</h2>
            <ul className="adminDashboard">
                <li className="adminDashboardItem">
                    <PromDataCard
                        title={promDataForDashboard[0].promo4.title}
                        city={promDataForDashboard[0].promo4.city}
                        promo={promDataForDashboard[0].promo4.promo}
                    />
                </li>
            </ul>
        </article>
    </div>
);

export default DashboardPromData;