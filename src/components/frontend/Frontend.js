import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Agenda from '../agenda/Agenda';
import Contacts from '../contacts/ContactList';
import WelcomeBooklet from '../welcomeBooklet/WelcomeBooklet';
import RessourcesList from '../ressources/RessourceList';
import SlackAcademy from '../slackAcademy/SlackAcademy';
import Notfound from '../notfound/Notfound';
import NavigationBar from '../navigation/Navigation';
import Footer from '../footer/Footer';
import RssFeedIntegration from '../rssFeed/RssFeedIntegration';
import WhoToFollowIntegration from '../whoToFollow/WhoToFollowIntegration';
import ParcoursList from '../parcours/ParcoursList';
import ParcoursForm from '../parcours/ParcoursForm';
import RessourceForm from '../ressources/RessourceForm';
import Backend from '../backend/Backend';

const Frontend = () => (
  <Router>
    <header>
      <NavigationBar isNavAdmin={false} />
    </header>
    <main className="container is-fluid">
      <Switch>
        <Route
          exact
          path="/"
          component={Agenda}
        />
        <Route path="/agenda" component={Agenda} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/welcomeBooklet" component={WelcomeBooklet} />
        <Route path="/ressources" component={RessourcesList} />
        <Route path="/ressources/create" component={RessourceForm} />
        <Route path="/ressources/:id/edit" component={RessourceForm} />
        <Route path="/slackAcademy" component={SlackAcademy} />
        <Route path="/rssFeed" component={RssFeedIntegration} />
        <Route path="/whoToFollow" component={WhoToFollowIntegration} />
        <Route path="/admin/parcours/administration" component={Backend} />
        <Route component={Notfound} />
      </Switch>
    </main>

    <footer className="footer">
      <Footer />
    </footer>
  </Router>
);

export default Frontend;
