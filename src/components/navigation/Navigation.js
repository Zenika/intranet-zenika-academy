import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: '',
      loggedIn: false,
      isNavAdmin: false,
    };
  }

  componentDidMount() {
    let { isNavAdmin } = this.props;
    isNavAdmin = localStorage.getItem('navbarAdmin');
    if (isNavAdmin) {
      this.setState({ isNavAdmin: true });
    }
    const isUserLogged = localStorage.getItem('loggedIn');

    if (isUserLogged != null && isUserLogged === 'true') {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false, modalState: '' });
    }
  }

  setNavbarState(state) {
    this.setState({ isNavAdmin: state });
    localStorage.setItem('navbarAdmin', state);
  }

    /**
     * Allows to check if the user is logged in
     */
    connect = (ev) => {
      localStorage.setItem('loggedIn', `${ev}`);
      this.setState({ loggedIn: ev });
      if (!ev) {
        this.setState({
          modalState: '',
        });
        this.props.history.push('/');
      }
    };

    /**
     * Allows to open or close de sign in Modal
     * @param {*} ev boolean
     */
    toggleModal(ev) {
      if (ev === false) {
        this.setState({ modalState: '' });
      } else {
        this.setState({ modalState: 'is-active' });
      }
    }


    render() {
      const { loggedIn, modalState, isNavAdmin } = this.state;

      const mainLink = (
        <section className="navbar-item">
          <Link to="/">
            <span className="navbar-item" onClick={() => this.setNavbarState(false)}>Accueil</span>
          </Link>
        </section>
      );

      const adminLinks = (
        <section className="navbar-start">
          {mainLink}
          <section className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Mes formation</span>
            <section className="navbar-dropdown">
              <Link to="/admin/parcours/create">
                <span className="navbar-item">Créer un parcours</span>
              </Link>
              <Link to="/admin/parcours">
                <span className="navbar-item">Modifier un parcours</span>
              </Link>
              <Link to="/admin/parcours/administration">
                <span className="navbar-item">Administration</span>
              </Link>
            </section>
          </section>
          <section className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Programmes</span>
            <section className="navbar-dropdown">
              <Link to="/admin/program">
                <span className="navbar-item">
                                    Liste des programmes (Créer/Modifier)
                </span>
              </Link>
              <Link to="/admin/program/ressources">
                <span className="navbar-item">
                                    Créer / Modifier une ressources
                </span>
              </Link>
            </section>
          </section>
          <section className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Communauté</span>
            <section className="navbar-dropdown">
              <Link to="/admin/community/slackAcademy">
                <span className="navbar-item">Zenika Slack</span>
              </Link>
              <Link to="/admin/community/rssfeed">
                <span className="navbar-item">Flux RSS</span>
              </Link>
              <Link to="/admin/community/whotofollow">
                <span className="navbar-item">Who to follow</span>
              </Link>
            </section>
          </section>
        </section>
      );

      const notAdminLinks = (
        <section className="navbar-start">
          {mainLink}
          <section className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Ma formation</span>
            <section className="navbar-dropdown">
              <Link to="/agenda">
                <span className="navbar-item">Agenda</span>
              </Link>
              <Link to="/contacts">
                <span className="navbar-item">Mes Contacts</span>
              </Link>
              <Link to="/welcomeBooklet">
                <span className="navbar-item">Livret d'accueil</span>
              </Link>
            </section>
          </section>
          <section className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Ressources</span>
            <section className="navbar-dropdown">
              <Link to="/ressources?author=Formateurs">
                <span className="navbar-item">Formateurs</span>
              </Link>
              <Link to="/ressources?author=Eleves">
                <span className="navbar-item">Elèves</span>
              </Link>
            </section>
          </section>
          <section className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Communauté</span>
            <section className="navbar-dropdown">
              <Link to="/slackAcademy">
                <span className="navbar-item">Slack Academy</span>
              </Link>
              <Link to="/rssFeed">
                <span className="navbar-item">RSS écosystème</span>
              </Link>
              <Link to="/whoToFollow">
                <span className="navbar-item">Who to follow</span>
              </Link>
            </section>
          </section>
          <section className="navbar-item">
            <Link to="/admin/parcours/administration">
              <span className="navbar-item" onClick={() => this.setNavbarState(true)}>Administration</span>
            </Link>
          </section>
        </section>
      );

      const mainNav = (
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
        >
          <section className="navbar-brand" />
          <section className="navbar-menu">
            {isNavAdmin ? adminLinks : notAdminLinks}
            <section className="navbar-end">

                <section className="navbar-item has-dropdown is-hoverable">
                  <span className="navbar-link is-arrowless">
                  <img
                    className="image is-48x48 is-rounded"
                    src="http://blogue-ton-ecole.ac-dijon.fr/wp-content/uploads/2016/07/Avatar_girl_face.png"
                    alt="placeholde-avatar"
                    id="navBarAvatar"
                  />
                  </span>
                  <section className="navbar-dropdown">
                    <Link to="/profil">
                      <span className="navbar-item">Mon profil</span>
                    </Link>
                  </section>
                </section>
              <section className="navbar-item">
                <p>Bienvenue, Anne-Lise!</p>
              </section>
              <section className="navbar-item">
                <Link to="/">
                  <span
                    onClick={() => this.connect(false)}
                    className="button is-danger"
                  >
                                            Sign out
                  </span>
                </Link>
              </section>
            </section>
          </section>
        </nav>
      );

      const loggedOutNav = (
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
        >
          <section className="navbar-menu">
            <section className="navBarLoggedOut">
              <section className="navbar-start">
                <p>There is no fate but what we make</p>
              </section>
            </section>
            <section className="navbar-end">
              <section className="navbar-item">
                <button
                  onClick={() => this.toggleModal(true)}
                  className="button"
                >
                                    Sign in
                </button>
              </section>
            </section>
          </section>
          <section id="modalLogin" className={`modal ${modalState}`}>
            <section className="modal-background" />
            <section className="modal-card">
              <section className="modal-card-body">
                <form>
                  <section className="field">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Username"
                      />
                      <span className="icon is-small is-left" />
                    </p>
                  </section>
                  <section className="field">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                      </span>
                    </p>
                  </section>
                </form>
              </section>
              <footer className="modal-card-foot">
                <button
                  onClick={() => this.connect(true)}
                  className="button is-success"
                >
                                    Sign in
                </button>
                <button
                  onClick={() => this.toggleModal(false)}
                  className="button"
                >
                                    Cancel
                </button>
              </footer>
            </section>
          </section>
        </nav>
      );

      if (loggedIn) {
        return mainNav;
      }
      return loggedOutNav;
    }
}

export default NavigationBar;
