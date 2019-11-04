import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Navigation.scss';
import logo from './logo.png';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: '',
      loggedIn: false,
      isNavAdmin: false,
    };
    this.setBurgerLink = this.setBurgerLink.bind(this);
  }

  componentDidMount() {
    let isUserLogged = localStorage.getItem('loggedIn');
    isUserLogged = JSON.parse(isUserLogged);
    if (isUserLogged != null && isUserLogged) {
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
        isNavAdmin: false,
      });
      localStorage.clear();
      return <Redirect to="/" />;
    }
  };

  setBurgerBar = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector(`#${burger.dataset.target}`);
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  };

  setBurgerLink = (e) => {
    const navLink = e.currentTarget;
    navLink.nextElementSibling.classList.toggle('is-hidden-mobile');
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
      <section
        className="navbar-item"
        onClick={() => this.setNavbarState(false)}
      >
        <Link to="/">
          <img id="navbarLogo" src={logo} className="is-hidden-mobile" alt="logo zenika" />
        </Link>
        <Link to="/">
          <span className="navbar-link is-arrowless is-hidden-desktop is-hidden-tablet">Accueil</span>
        </Link>
      </section>
    );

    const adminLinks = (
      <section className="navbar-start">
        {mainLink}
        <section className="navbar-item">
          <Link to="/admin/dashboard">
            <span className="navbar-link is-arrowless">Dashboard</span>
          </Link>
        </section>
        <section className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link" onClick={this.setBurgerLink}>Promotions</span>
          <section className="navbar-dropdown is-hidden-mobile is-boxed">
            <Link to="/admin/promo/list">
              <span className="navbar-item">Promo</span>
            </Link>
            <Link to="/admin/promo/create">
              <span className="navbar-item">Créer</span>
            </Link>
          </section>
        </section>
        <section className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link" onClick={this.setBurgerLink}>Programmes</span>
          <section className="navbar-dropdown is-hidden-mobile is-boxed">
            <Link to="/admin/program">
              <span className="navbar-item">Programmes</span>
            </Link>
            <Link to="/admin/module/list">
              <span className="navbar-item">Modules</span>
            </Link>
            <Link to="/admin/program/ressources">
              <span className="navbar-item">Ressources</span>
            </Link>
          </section>
        </section>
        <section className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link" onClick={this.setBurgerLink}>Communauté</span>
          <section className="navbar-dropdown is-hidden-mobile is-boxed">
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
          <span className="navbar-link" onClick={this.setBurgerLink}>Ma formation</span>
          <section className="navbar-dropdown is-hidden-mobile is-boxed">
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
          <span className="navbar-link" onClick={this.setBurgerLink}>Ressources</span>
          <section className="navbar-dropdown is-hidden-mobile is-boxed">
            <Link to="/ressources?author=Formateurs">
              <span className="navbar-item">Formateurs</span>
            </Link>
            <Link to="/ressources?author=Eleves">
              <span className="navbar-item">Elèves</span>
            </Link>
          </section>
        </section>
        <section className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link" onClick={this.setBurgerLink}>Communauté</span>
          <section className="navbar-dropdown is-hidden-mobile is-boxed">
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
          <Link to="/admin/dashboard">
            <span
              className="navbar-link is-arrowless navBorder"
              onClick={() => this.setNavbarState(true)}
            >
              Admin
            </span>
          </Link>
        </section>
      </section>
    );

    const mainNav = (
      <nav
        className={isNavAdmin ? 'navbar is-danger' : 'navbar is-primary'}
        role="navigation"
        aria-label="main navigation"
      >
        <section className="navbar-brand">
          <span
            className="navbar-burger burger"
            onClick={() => this.setBurgerBar()}
            data-target="navMenu"
          >
            <span />
            <span />
            <span />
          </span>
        </section>
        <section className={isNavAdmin ? 'navbar-menu navbar-menu-admin' : 'navbar-menu navbar-menu-front'} id="navMenu">
          {isNavAdmin ? adminLinks : notAdminLinks}
          <section className="navbar-end">
            <section className="navbar-item has-dropdown is-hoverable">
              <Link to="/profile">
                <span className="navbar-link is-arrowless display-desktop">
                  <img
                    src="http://blogue-ton-ecole.ac-dijon.fr/wp-content/uploads/2016/07/Avatar_girl_face.png"
                    alt="placeholde-avatar"
                    id="navBarAvatar"
                  />
                </span>
                <span className="navbar-link is-arrowless display-mobile">Mon Profil</span>
              </Link>
            </section>
            <section className="navbar-item is-hidden-mobile is-hidden-touch">
              <span>Bienvenue, Anne-Lise!</span>
            </section>
            <section
              className="navbar-item"
              onClick={() => this.connect(false)}
            >
              <Link to="/">
                <i className="fas fa-sign-out-alt icon-signout display-desktop" />
                <span className="navbar-link is-arrowless display-mobile">Se déconnecter</span>
              </Link>
            </section>
          </section>
        </section>
      </nav>
    );

    const loggedOutNav = (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <section className="navbar-item display-mobile">
          <button onClick={() => this.toggleModal(true)} className="button">
            Sign in
          </button>
        </section>
        <section className="navbar-menu">
          <section className="navBarLoggedOut">
            <section className="navbar-start">
              <p>There is no fate but what we make</p>
            </section>
          </section>
          <section className="navbar-end">
            <section className="navbar-item">
              <button onClick={() => this.toggleModal(true)} className="button">
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
