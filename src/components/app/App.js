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
import ParcoursList from '../parcours/ParcoursList';
import ParcoursForm from '../parcours/ParcoursForm';
import RessourceForm from '../ressources/RessourceForm';
import ProgramList from '../program/ProgramList';
import ProgramForm from '../program/ProgramForm';
import SlackAcademyAdmin from '../slackAcademy/SlackAcademyAdmin';
import RssFeedList from '../rssFeed/RssFeedList';
import RssFeedForm from '../rssFeed/RssFeedForm';
import WhoToFollowForm from '../whoToFollow/WhoToFollowForm';
import WhoToFollowList from '../whoToFollow/WhoToFollowList';
import UserProfile from '../user/UserProfile';
import Home from '../home/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <NavigationBar isNavAdmin={false} />
        </header>
        <main className="container is-fluid">
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route exact path="/agenda" component={Agenda} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/welcomeBooklet" component={WelcomeBooklet} />
            <Route exact path="/ressources" component={RessourcesList} />
            <Route key="create-ressource" path="/ressources/create" component={RessourceForm} />
            <Route key="edit-ressource" path="/ressources/:id/edit" component={RessourceForm} />
            <Route exact path="/slackAcademy" component={SlackAcademy} />
            <Route exact path="/rssFeed" component={RssFeedList} />
            <Route exact path="/whoToFollow" component={WhoToFollowList} />
            <Route exact path="/admin/parcours" component={ParcoursList} />
            <Route key="create-parcours" path="/admin/parcours/create" component={ParcoursForm} />
            <Route key="edit-parcours" path="/admin/parcours/:id/edit" component={ParcoursForm} />
            <Route exact path="/admin/program" component={ProgramList} />
            <Route key="create-program" exact path="/admin/program/create" component={ProgramForm} />
            <Route key="edit-parcours" path="/admin/program/:id/edit" component={ProgramForm} />
            <Route exact path="/admin/program/ressources" component={RessourcesList} />
            <Route key="create-ressource" path="/admin/program/ressources/create" component={RessourceForm} />
            <Route key="edit-ressource" path="/admin/program/ressources/:id/edit" component={RessourceForm} />
            <Route exact path="/admin/community/slackAcademy" component={SlackAcademyAdmin} />
            <Route exact path="/admin/community/rssFeed" component={RssFeedList} />
            <Route key="create-rss" exact path="/admin/community/rssFeed/create" component={RssFeedForm} />
            <Route key="edit-rss" exact path="/admin/community/rssFeed/:id/edit" component={RssFeedForm} />
            <Route exact path="/admin/community/whoToFollow" component={WhoToFollowList} />
            <Route key="create-whotofollow" exact path="/admin/community/whoToFollow/create" component={WhoToFollowForm} />
            <Route key="edit-whotofollow" exact path="/admin/community/whoToFollow/:id/edit" component={WhoToFollowForm} />
            <Route exact path="/profil" component={UserProfile} />
            <Route component={Notfound} />
          </Switch>
        </main>

        <footer className="footer">
          <Footer />
        </footer>
      </Router>
    );
  }
}

export default App;
