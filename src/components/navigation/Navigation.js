import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { SignInModal } from '../signInModal/SignInModal';
import './Navigation.scss';
import logo from './logo.png';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      loggedIn: false,
      isNavAdmin: false,
    };
    this.setBurgerLink = this.setBurgerLink.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }

  componentDidMount() {
    let isUserLogged = sessionStorage.getItem('loggedIn');
    isUserLogged = JSON.parse(isUserLogged);
    if (isUserLogged != null && isUserLogged) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false, modalState: '' });
    }
  }

  setNavbarState(state) {
    this.setState({ isNavAdmin: state });
    sessionStorage.setItem('navbarAdmin', state);
  }


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
   * Allows to connect or disconnect a user
   */
  connect(user) {
    return axios.post('http://localhost:4000/api/users/signin', user)
      .then((res) => {
        this.setState({ loggedIn: true });
        sessionStorage.setItem('role', `${res.data.role}`);
        sessionStorage.setItem('id', `${res.data.id}`);
        sessionStorage.setItem('promoId', `${res.data.promotionId}`);
        sessionStorage.setItem('loggedIn', 'true');

        /** TO BE IMPLEMENTED WHEN BOTH ADMIN AND STUDENT HOME WILL EXIST */
        // switch (res.data.role) {
        //   case 1:
        //     return <Redirect to="/home/admin" />;
        //   case 2:
        //   case 3:
        //     return <Redirect to="/home/student" />;
        //   default:
        //     return <Redirect to="/" />;
        // }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loggedIn: false });
        this.toggleModal(false);
      });
  }

  disconnect() {
    this.setState({
      modalState: false,
      isNavAdmin: false,
      loggedIn: false,
    });
    sessionStorage.clear();
    return <Redirect to="/" />;
  }

  /**
 * Allows to open or close de sign in Modal
 * @param {*} ev boolean
 */
  toggleModal(ev) {
    if (!ev) {
      this.setState({ modalState: false });
    } else {
      this.setState({ modalState: true });
    }
  }

  render() {
    const {
      loggedIn, modalState, isNavAdmin, email, password,
    } = this.state;
    const navbarMenu = document.querySelector('#navMenu') || '';
    let navbarMenuClass;
    if (isNavAdmin && loggedIn) {
      if (navbarMenu.className && navbarMenu.className === 'navbar-menu navbar-menu-front is-active') {
        navbarMenuClass = 'navbar-menu navbar-menu-admin is-active';
      } else {
        navbarMenuClass = 'navbar-menu navbar-menu-admin';
      }
    } else if (!isNavAdmin || !loggedIn) {
      if (navbarMenu.className && navbarMenu.className === 'navbar-menu navbar-menu-admin is-active') {
        navbarMenuClass = 'navbar-menu navbar-menu-front is-active';
      } else {
        navbarMenuClass = 'navbar-menu navbar-menu-front';
      }
    }
    const mainLink = (
      <section>
        <Link
          tabIndex="0"
          className="navbar-item"
          onKeyUp={() => this.setNavbarState(false)}
          to="/"
        >
          <img id="navbarLogo" src={logo} className="is-hidden-mobile" alt="logo zenika" />
        </Link>
        <Link
          tabIndex="0"
          className="navbar-item"
          onKeyUp={() => this.setNavbarState(false)}
          to="/"
        >
          <span className="navbar-link is-arrowless is-hidden-desktop is-hidden-tablet">Accueil</span>
        </Link>
      </section>
    );

    const adminLinks = (
      <section className="navbar-start">
        {mainLink}
        {/* <section className="navbar-item">
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
            <Link to="/admin/community/rssfeed">
              <span className="navbar-item">Flux RSS</span>
            </Link>
            <Link to="/admin/community/whotofollow">
              <span className="navbar-item">Who to follow</span>
            </Link>
          </section>
        </section> */}
      </section>
    );

    const notAdminLinks = (
      <section className="navbar-start">
        {mainLink}
        {/* <section className="navbar-item has-dropdown is-hoverable">
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
        </section> */}
      </section>
    );

    const mainNav = (
      <nav
        className={isNavAdmin ? 'navbar is-dark' : 'navbar is-light'}
        role="navigation"
        aria-label="main navigation"
      >
        {/* <section className="navbar-brand">
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
        <section className={navbarMenuClass} id="navMenu">
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
            </section> */}
        <section
          className="navbar-item"
        >
          <Link onClick={() => this.disconnect()} to="/" className={isNavAdmin ? 'icon-signout-admin' : 'icon-signout'}>
            <i className="fas fa-sign-out-alt display-desktop" />
            <span className="navbar-link is-arrowless display-mobile">Se déconnecter</span>
          </Link>
        </section>
        {/* </section> */}
        {/* </section > */}
      </nav>
    );

    const loggedOutNav = (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <section className="navbar-item display-mobile">
          <button type="button" onClick={() => this.toggleModal(true)} className="button">
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
              <button type="button" onClick={() => this.toggleModal(true)} className="button">
                Se connecter
              </button>
            </section>
          </section>
        </section>
        {modalState
          && (
            <SignInModal
              toggleModal={this.toggleModal}
              connect={this.connect}
              email={email}
              password={password}
            />
          )}
      </nav>
    );

    if (loggedIn) {
      return mainNav;
    }
    return loggedOutNav;
  }
}

export default NavigationBar;
