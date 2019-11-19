import React from 'react';
import { css } from 'emotion';
import DashboardPromData from './DashboardPromData';
// import DashboardFilterBar from './DashboardFilterBar';
import SearchbarAutoComplete from '../searchbarauto/SearchbarAuto';

const pays = [
  { id: 1, label: 'France', group: 'Pays' },
  { id: 2, label: 'Canada', group: 'Pays' },
  { id: 4, label: 'Singapore', group: 'Pays' },
];

const villes = [
  { id: 5, label: 'Paris', group: 'Ville' },
  { id: 6, label: 'Brest', group: 'Ville' },
  { id: 7, label: 'Grenoble', group: 'Ville' },
  { id: 8, label: 'Bordeaux', group: 'Ville' },
  { id: 9, label: 'Montréal', group: 'Ville' },
  { id: 10, label: 'Singapore', group: 'Ville' },
  { id: 11, label: 'Nantes', group: 'Ville' },
  { id: 12, label: 'Lille', group: 'Ville' },
];

const programmes = [
  { id: 13, label: 'Développement JAVA/SPRING', group: 'Programme' },
  { id: 14, label: 'Base de données', group: 'Programme' },
  { id: 15, label: 'Architecture', group: 'Programme' },
  { id: 16, label: 'Méthodologie de production', group: 'Programme' },
  { id: 17, label: 'Culture Devops/Data', group: 'Programme' },
];

class Dashboard extends React.Component {
  componentDidMount() {
    document.title = 'Admin/Dashboard';
  }

  handleMultiChange = (options, name) => {
    // if (name === 'villes') {
    //   this.setState({ [name]: [options] }, () => {
    //     console.log(`state: ${this.state}, value: ${options}`);
    //   });
    // }
    this.setState({ [name]: options }, () => {
      console.log(`state: ${this.state}, value: ${options}`);
    });
  }

  render() {
    return (
      <>
        <h1 className="title is-2 mbmd">Dashboard</h1>
        <h2 className="title is-4 mbmd">Filtrer les promotions</h2>
        {/* <DashboardFilterBar /> */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', margin: '1rem 1rem 1rem 0',
        }}
        >
          <SearchbarAutoComplete className={css`max-width:20rem; min-width:10rem; flex:1; margin:.5rem 1rem .5rem 0`} handleChange={(e) => this.handleMultiChange(e, 'villes')} name="teachers" options={villes} searchKey="title" defaultLabel="Villes" isMulti />
          <SearchbarAutoComplete className={css`max-width:20rem; min-width:10rem; flex:1; margin:.5rem 1rem .5rem 0`} handleChange={(e) => this.handleMultiChange(e, 'pays')} name="teachers" options={pays} searchKey="title" defaultLabel="Pays" isMulti />
          <SearchbarAutoComplete className={css`max-width:20rem; min-width:10rem; flex:1; margin:.5rem 1rem .5rem 0`} handleChange={(e) => this.handleMultiChange(e, 'programmes')} name="teachers" options={programmes} searchKey="title" defaultLabel="Programmes" isMulti />
        </div>


        <DashboardPromData />
      </>
    );
  }
}

export default Dashboard;
