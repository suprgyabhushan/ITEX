import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container.jsx';
import { signUp } from './../../actions/session_actions.js';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const user = {username:"Guest", email: "guest@guest.com", password: "password"};
    store.dispatch(signUp(user)).then(() => this.props.router.push('/dashboard'));
  }

  render() {
    return (
      <div className="homepage-container">
        <header className="header group">
          <div className="header-nav">
            <h1 className="header-logo">ITEX</h1>

            <ul className="header-list">
              <li className="nav-button"><Link to="/login">Log In</Link></li>
              <li>or</li>
              <li className="nav-button-signup" onClick={this.handleGuestLogin}>Demo</li>
            </ul>
          </div>
        </header>
        <section className="main-content group">
          <div className="headline">
            <div className="top-line-headline">

              <h1>Divide Expenses with Friends</h1>
            </div>
          </div>

        </section>

          <div className="image-form group">
            <div className="top-line-headline">
              <h1> Sign Up </h1>
            </div>

            <div className="signup-form">
              <SessionFormContainer {...this.props} />
            </div>
          </div>

      </div>
    );
  }
}

export default Homepage;
